import GhostBullet from '../Objects/Bullets/ghostBullet.js';

//Clase para el jefe 
export default class Boss extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'boss');

        this.play('walkBossD', true);

        this.isDash = false;
        this.doAction = false;
        this.setScale(2);

        this.speed = 100;

        this.scene.add.existing(this)
        this.setOrigin(0, 0);
        this.scene.physics.add.existing(this);
        this.player = player;
        this.body.setCollideWorldBounds();

        this.laughSound = this.scene.sound.add('booLaugh');
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        //movemos enemy a la posicion del jugador con velocidad 100
        if (!this.isDash) {
            this.scene.physics.moveTo(this, this.player.x, this.player.y, this.speed);
        }

        //Los ataques se realizaran de manera aleatoria en un tiempo aleatorio
        this.value = Phaser.Math.Between(0, 1000);

        //Hacer accion
        if (this.value == 0) this.makeAc();

        //Colision con el jugador
        if (this.scene.physics.overlap(this.player, this)) {
            this.player.modifyValue(-30);
            this.changePos();
        }

        if (!this.isDash && this !== undefined) {

            this.BossAnimsFlip();
            if (this.body.velocity.x != 0) this.play('walkBossD', true);
            else if (this.body.velocity.x === 0) this.play('waitBoss', true);
        }

        //Muerte del jefe
        if (this.scene.NumEnemigos() == 0)
            this.dieBoss();

    }


    //Se elige la siguiente accion
    makeAc() {

        if (this !== undefined) {

            this.laughSound.play();

            this.stop();

            this.timer = this.scene.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.random = Phaser.Math.Between(0, 2);

                    if (this.random == 0)
                        this.bossInvisible();
                    else if (this.random == 1)
                        this.shoot();
                    else if (this.random == 2) {
                        this.dash();
                    }

                    this.startMoving();
                }
            });
        }

    }

    //Parar
    stop() {
        this.speed = 0;
    }

    //Reestablecer velocidad
    startMoving() {
        this.speed = 100;
    }

    //Disparar fantasma
    shoot() {
        new GhostBullet(this.scene, this.x, this.y, this.player);
    }

    //Dash hacia la posicion de ese momento del jugador
    dash() {
        this.isDash = true;

        this.play('dashBoss', true);

        this.dx = this.player.x;
        this.dy = this.player.y;

        this.scene.physics.moveTo(this, this.dx, this.dy, 500);

        this.timer = this.scene.time.addEvent({
            delay: 900,
            callback: () => {
                this.isDash = false;
            }
        });
    }

    //Convertir al jefe en invisible
    bossInvisible() {
        if (this !== undefined) {
            this.setVisible(false);
            this.speed = 50;

            this.timer = this.scene.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.bossVisible();
                }
            });

        }
    }

    //Hacer al jefe visible
    bossVisible() {
        this.setVisible(true);
        this.startMoving();
    }

    //Cuando el jugador toca al jefe
    changePos() {
        this.rx = Phaser.Math.Between(-300, 300);
        this.ry = Phaser.Math.Between(-300, 300);

        this.x = this.player.x + this.rx;
        this.y = this.player.y + this.ry;

        this.bossInvisible();
    }

    //Flip para las animaciones
    BossAnimsFlip() {
        if (this !== undefined) {
            if (this.body.velocity.x >= 0) this.setFlipX(0);
            else this.setFlipX(-1);
        }
    }

    //Metodo para la muerte del jefe
    dieBoss()
    {

        this.setVisible(false);
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            callback: () => {
                this.scene.scene.start('final', {text : 'Has ganado'});
                this.destroy();
            }
        });

       
    }

}
