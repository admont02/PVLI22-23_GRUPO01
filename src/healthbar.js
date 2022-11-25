
//Clase para la barra de vida
export default class HealthBar extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y,initial) {
        super(scene, x, y);
        this.bar = new Phaser.GameObjects.Graphics(scene);
        // this.setScale(0.35);

        // this.bar.setScale(0.35);
        this.x = x;
        this.y = y;
        this.value = this.maxValue = initial;
        this.p = 3 / 3;

        this.draw();

        scene.add.existing(this.bar);
    }

    //Cambiar el valor de esta
    modify(amount) {
        this.value += amount;

        if (this.value < 0)
            this.value = 0;

        if (this.value > this.maxValue)
            this.value = this.maxValue;

        this.draw();

        return (this.value === 0);
    }

    //Dibujar la informacion en ella
    draw() {
        this.bar.clear();

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, this.maxValue+4, 32);

        //  Health

        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 2, this.y + 2, this.maxValue, 28);//-4,-4

        if (this.value <= 75 && this.value > 40) {
            this.bar.fillStyle(0xff8000);
        }
        else if (this.value <= 40) {
            this.bar.fillStyle(0xff0000);
        }
        else {
            this.bar.fillStyle(0x00ff00);
        }

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(this.x + 2, this.y + 2, d, 28);
    }

    //Obtener su valo actual
    getValue() {
        return this.value;
    }

}