/**
 * El jugador recuperará una vida al coger este objeto
 * (si no supera las vidas máximas)
 */
export default class LifePowerUp extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'bottle');

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.player = player;
        this.setScale(2.1);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if (this.scene.physics.overlap(this, this.player)) {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
            this.player.earnLive(1);

        }
    }
}
