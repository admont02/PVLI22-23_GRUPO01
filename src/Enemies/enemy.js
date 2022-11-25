import HealthBar from '../healthbar.js';

export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, speed, sprite, player, life, lifeValue) {
        super(scene, x, y, sprite);

        //posicion inicial
        this.newPosX = x;
        this.newPosY = y;

        //Valores para impedir que se quede quieto en una posicion
        this.posRepeX = x;
        this.posRepeY = y;
        this.repeCount = 60;
        this.currentRep = 0;

        //Puntero
        this.pointer = this.scene.input.activePointer;
        this.setInteractive();

        //Arrastre de los enemigos
        this.on("pointerdown", () => {
            this.startDrag();
        });

        this.on("pointerup", () => {
            this.takeDamage(1);
        });

        //Velocidad
        this.speed = speed;
        this.speedBolean = false;
        this.scene.AumentarEnemyVivo();

        this.scene.add.existing(this)
        this.setOrigin(0, 0);
        this.scene.physics.add.existing(this);

        this.player = player;

        this.lives = life;
        this.v = lifeValue;
        this.hp = new HealthBar(scene, 10, 10, this.v);
        this.hp.setScale(0.35);

        this.hp.bar.setScale(0.35);

        this.dieSound = this.scene.sound.add('death');
        this.damageSound = this.scene.sound.add('loseLive');

    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.hp.bar.setX(this.x - this.width/2)
        this.hp.bar.setY(this.y - this.height*1.2)

        //movemos enemy a esa posicion con velocidad 100
        this.scene.physics.moveTo(this, this.newPosX, this.newPosY, this.speed);

        //distancia entre antigua posicion y nueva posicion
        var distance = (this.x - this.newPosX) + (this.y - this.newPosY);

        //overlap es para dos objetos con fisica , mietras que la distancia sea entre -30 y 30, hacemos un gran radio de accion ,
        //tambien ponemos limites en x e y, cuidado estamos pidiendo info de la escena antes de hacerse , asi ponemos sus valores en vez de scene.width y height
        if (distance < 30 && distance > -30) {

            //llamamos a la funcion para cambiar valores
            //le asociamos x e y aleatorias
            this.newPosX = Phaser.Math.Between(this.x - 200, this.x + 200);
            this.newPosY = Phaser.Math.Between(this.y - 200, this.y + 200);
        }

        //Comprobacion de si esta quieto
        //Sumamos los frames
        this.currentRep++;
        if (this.currentRep == this.repeCount) {
            this.repeticiones();
        }

        if (this !== undefined) {
            this.enemyAnimsFlip();
        }

        //permite que todos lo hijos enemy puedan acceder al if este ya que es parte del update del enemy
        if (this.scene.physics.collide(this.player, this)) {
            //si coincide pos de enemy y jugador pierde vida y lo actualiza por pantalla
            this.player.modifyValue(-2);

            //metodo que haga "rebote" para que no coincidan posiciones
            this.player.choque();
        }
    }

    //Duplica su velocidad se llama cuando el jugador entra en el area que crea un ojo
    duplicateStats() {
        if (!this.speedBolean) {
            this.speed *= 2;
            this.speedBolean = true;

            this.timer = this.scene.time.addEvent({
                delay: 3000,
                callback: () => {
                    this.divideStats();
                }
            });
        }
    }

    //Metodo que vuelve la velocidad multiplicada a la original
    divideStats() {
        this.speed = this.speed / 2;
        this.speedBolean = false;
    }

    //Metodo para recibir daño
    takeDamage(damage) {
        if (this.lives > 0) {
           
            this.damageSound.play();

            //despues de quitarle daño damos feedback
            this.lives -= damage;
            this.hp.modify(-damage);
            //repetir el parpadeo 3 veces
            this.EnemyInvisible();
        }
        else {
            
            this.dieSound.play();

            this.scene.QuitarEnemyVivo();
            this.scene.updateLivesEnemy();
            this.EnemyDie();
        }
    }

    //Convertir al enemy en invisible
    EnemyInvisible() {
        if (this !== undefined) {
            //this.setVisible(false);
            this.setTint(0xff0000)
            this.timer = this.scene.time.addEvent({
                delay: 250,
                callback: () => {
                    this.EnemyVisible();
                }
            });

        }
    }

    //Hacer al enemy visible
    EnemyVisible() {
        //this.setVisible(true);
        this.clearTint()
    }
    //Muerte de enemigo
    EnemyDie() {
        this.hp.bar.destroy();
        this.setActive(false)
        this.destroy();
    }


    //Metodos para el arrastre de los enemigos
    startDrag() {
        if (this !== undefined) {
            this.scene.input.on('pointermove', this.doDrag, this);
            this.scene.input.on('pointerup', this.stopDrag, this);
        }
    }

    doDrag() {
        if (this !== undefined) {
            this.x = this.pointer.x + this.scene.cameras.main.midPoint.x - 500;
            this.y = this.pointer.y + this.scene.cameras.main.midPoint.y - 250;

            console.log(this.scene.cameras.main.x);
        }
    }

    stopDrag() {
        if (this !== undefined) {
            this.scene.input.off('pointermove', this.doDrag, this);
        }
    }


    //Flip para las animaciones
    enemyAnimsFlip() {
        if (this !== undefined) {
            if (this.body.velocity.x >= 0) this.setFlipX(0);
            else this.setFlipX(1);
        }
    }


    //Metodo para evitar que el enemigo se quede estancado en una posicion
    repeticiones() {
        this.currentRep = 0;

        if (Math.abs(this.posRepeX - this.x) < 1 && Math.abs(this.posRepeY - this.y) < 1) {
            this.newPosX = Phaser.Math.Between(this.x - 300, this.x + 300);
            this.newPosY = Phaser.Math.Between(this.y - 300, this.y + 300);
        }

        this.posRepeX = this.x;
        this.posRepeY = this.y;

    }

}
