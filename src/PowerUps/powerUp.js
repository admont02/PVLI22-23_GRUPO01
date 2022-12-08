

export default class PowerUp extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite, player) {
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.player = player;
        //this.setScale(0.05)
        this.scene.tweens.add({
            targets: this,
            y: y+1,
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
                this.effectToPlayer()

            }
        

    }

   

    //Convertir al enemy en invisible
    PowerUpInvisible() {
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
    PowerUpVisible() {
        //this.setVisible(true);
        this.clearTint()
    }

    /**
* Método virtual que sobreescriben los enemigos que tienen algún efecto al chocar con el jugador
*/
    effectToPlayer() 
    {

    }
}
