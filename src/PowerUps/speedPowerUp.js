/**
 * El jugador recuperará una vida al coger este objeto
 * (si no supera las vidas máximas)
 */
export default class speedPowerUp extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'speedyPower');

        //con 2 argumentos cambias x e y
        this.setScale(0.6 , 0.6);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.player = player;

        
        this.play('speedyPower', true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        if (this.scene.physics.overlap(this, this.player)) {
            this.setVisible(false);
            this.player.speedChange(600);
             //aumentamos daño que hace el jugador en clase bottle durante 10 segundos
             this.timer = this.scene.time.addEvent({
                delay: 2000,
                 //ponemos otra vez daño normal en clase bottle
                callback: () => {
                    this.player.speedChange(300);
                }
              });

           
           
            //desactivamos
            this.setActive(false);
            //destruimos
            this.destroy();
        }
    }
}
