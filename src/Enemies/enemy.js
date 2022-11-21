import HealthBar from '../healthbar.js';

export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, speed, sprite, player, life, lifeValue) {
        super(scene, x, y, sprite);

        //posicion inicial
        this.newPosX = 200;
        this.newPosY = 200;
        
        
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
        this.body.setCollideWorldBounds();
       
        this.lives = life;
        this.v = lifeValue;
        // this.hp = new HealthBar(scene, 10, 10, this.v);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        // this.hp.bar.setX(this.x - this.scene.cameras.main._scrollX - this.width)
        // this.hp.bar.setY(this.y - this.height)

        //movemos enemy a esa posicion con velocidad 100
        this.scene.physics.moveTo(this, this.newPosX, this.newPosY, this.speed);

        //distancia entre antigua posicion y nueva posicion
        var distance = (this.x - this.newPosX) + (this.y - this.newPosY);

        //overlap es para dos objetos con fisica , mietras que la distancia sea entre -30 y 30, hacemos un gran radio de accion ,
        //tambien ponemos limites en x e y, cuidado estamos pidiendo info de la escena antes de hacerse , asi ponemos sus valores en vez de scene.width y height
        if (distance < 30 && distance > -30) {
           
            //llamamos a la funcion para cambiar valores
            //le asociamos x e y aleatorias
            this.newPosX = Phaser.Math.Between(0, this.scene.scale.width);
            this.newPosY = Phaser.Math.Between(0, this.scene.scale.height);

            //si hay un valor fuera de el tamaño del canvas o un poco menos ponemos otro a proposito para que no llegue al exterior
            if (this.newPosX > 900 || this.newPosY > 400) {
                this.newPosX = 200
                this.newPosY = 200
            }
        }

        if (this !== undefined) {
            this.enemyAnimsFlip();
          }

        //permite que todos lo hijos enemy puedan acceder al if este ya que es parte del update del enemy
        if (this.scene.physics.collide(this.player, this)) {
            //si coincide pos de enemy y jugador pierde vida y lo actualiza por pantalla
            this.player.modifyValue(-2);
            this.player.updateLivesText();

            //metodo que haga "rebote" para que no coincidan posiciones
            this.player.choque();
        }
    }

    //hace que durante 1 segundo rebote en diagonal
    choque() {
        this.SetVelocityX(-this.body.velocity.x);
        this.SetVelocityY(-this.body.velocity.y);
        this.timer = this.scene.time.addEvent({
            delay: 500,
            callback: () => {
                this.sinchoque();
            }
        });
    }

    //Devuelve al enemigo a su posicion original
    sinchoque() {
        this.SetVelocityX(this.body.velocity.x);
        this.SetVelocityY(this.body.velocity.y);

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
        //despues de quitarle daño damos feedback
        this.lives -= damage;
        //repetir el parpadeo 3 veces
        this.EnemyInvisible();

        if (this.lives <= 0) {
            this.scene.QuitarEnemyVivo();
            this.scene.updateLivesEnemy();
            this.EnemyDie();
        }
    }

    //Convertir al enemy en invisible 
    EnemyInvisible() {
        if (this !== undefined) 
        {
            this.setVisible(false);
            this.timer = this.scene.time.addEvent({
                delay: 250,
                callback: () => 
                {
                    this.EnemyVisible(); 
                }
            });

        }
    }

    //Hacer al enemy visible
    EnemyVisible()
    {
        this.setVisible(true);
    }
    //Muerte de enemigo
    EnemyDie() {
        //this.hp.bar.destroy();
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
    enemyAnimsFlip() 
    { 
      if (this !== undefined) {
        if (this.body.velocity.x >= 0) this.setFlipX(0);
        else this.setFlipX(1);
      }
    }
}
