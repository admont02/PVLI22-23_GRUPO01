

export default class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, speed, sprite, player, life, lifeValue) {
        super(scene, x, y, sprite);

        this.player = player;

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
