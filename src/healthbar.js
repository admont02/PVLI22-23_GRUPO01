export default class HealthBar extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player) {
        super(scene, x, y);
        this.bar = new Phaser.GameObjects.Graphics(scene);
this.bar.setScrollFactor(0)
        this.x = x;
        this.y = y;
        this.value = 100;
        this.p = 76 / 100;
        this.player = player;
        this.draw();

        scene.add.existing(this.bar);
    }

    decrease(amount) {
        this.value -= amount;

        if (this.value < 0) {
            this.value = 0;
        }

        this.draw();

        return (this.value === 0);
    }

    draw() {
        this.bar.clear();

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, 204, 20);

        //  Health

        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 2, this.y + 2, 200, 16);

        if (this.value < 30) {
            this.bar.fillStyle(0xff0000);
        }
        else {
            this.bar.fillStyle(0x00ff00);
        }

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(this.x + 2, this.y + 2, 200, 16);
    }
    moveBar(newX, newY) {
        this.bar.moveTo(newX, newY)
    }
}