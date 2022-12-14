
//Clase para pasar de nivel
export default class MiddleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'middleScene' });
    }

    init(data) {
        this.mapName = data.mapName;
    }
    create(data) {
        this.text = data.text;

        this.background = this.add.image(500, 250, 'morado');
        this.middleSceneText = this.add.text(this.scale.width / 2 - 250, this.scale.height / 5, this.text).setInteractive();
        this.middleSceneText.setScale(5);

        this.text = this.add.text(this.scale.width / 2 - 250, this.scale.height / 2 - 100, 'You have finished the level').setInteractive();
        this.text.setScale(2);

        this.player = this.add.image(this.scale.width / 2, this.scale.height / 2, 'cara');
        this.player.setScale(2);
        this.tweens.add({
            targets: this.player,
            y: this.player.y + 10,
            duration: 1000,
            ease: 'Power2',
            repeat: -1,
            yoyo: true
        });

        this.playButton = this.add.text(this.scale.width / 2 - 150, this.scale.height / 2 + 100, 'Next level').setInteractive();
        this.playButton.setScale(3);

        //segun que nivel te pases te mandará a un sitio o otro
        if (this.mapName === 'mapLevel1') {
            //level2
            this.playButton.on("pointerdown", () => {

                this.scene.start('level1', { mapName: 'map3' });
            });
        }
        // te pasas level2

        if (this.mapName === 'map2') {
            //level3
            this.playButton.on("pointerdown", () => {
                this.scene.start('level1', { mapName: 'map3' });
            });
        }
    }
}