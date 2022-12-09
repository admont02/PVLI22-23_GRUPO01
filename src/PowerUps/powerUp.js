

export default class PowerUp extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite, player) {
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.player = player;
        //this.setScale(0.05)
        this.scene.tweens.add({
            targets: this,
            y: y + 1,
            duration: 1000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            //yoyo: true
        });
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);


        //permite que todos lo hijos enemy puedan acceder al if este ya que es parte del update del enemy
        if (this.scene.physics.collide(this.player, this)) {
            this.effectToPlayer();

            this.destroyPowerUp();

        }


    }

    /**
* Método virtual que sobreescriben los powerUps, aplicando un detrminado efecto al jugador
*/
    effectToPlayer() {

    }
    /**
    * Método para destruir los powerUps
    */
    destroyPowerUp() {
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
    }
}
