/**
 * El jugador recuperará una vida al coger este objeto
 * (si no supera las vidas máximas)
 */
export default class damagePowerUp extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'damage');

        this.play('damage', true);
        this.setScale(0.35);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.player = player;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        if (this.scene.physics.overlap(this, this.player)) {
            //lo hacemos invisible
            this.setVisible(false);
            this.player.DamageChange(100);
             //aumentamos daño que hace el jugador en clase bottle durante 10 segundos
             this.timer = this.scene.time.addEvent({
                delay: 10000,
                 //ponemos otra vez daño normal en clase bottle
                callback: () => {
                    this.player.DamageChange(10);
                }
              });

           
           
            //desactivamos
            this.setActive(false);
            //destruimos
            this.destroy();
           
        }
    }
}
