
//Clase para pasar de nivel
export default class MiddleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'middleScene' });
    }

    init(data) {
        this.mapName = data.mapName;
        //numero de middleScene que es segun nivel
        this.middleSceneNumber = data.middle;
    }
    create(data) {
        this.text = data.text;


        
        this.background = this.add.image(500, 250, 'fondo');
        this.middleSceneText = this.add.text(this.scale.width / 2 - 250, this.scale.height / 5, this.text).setInteractive();
        this.middleSceneText.setScale(5);

        //habilidad 1, si pasas a la escena 2
        if (this.mapName === 'mapLevel1') {
            this.text = this.add.text(this.scale.width / 2 - 250, this.scale.height / 2 - 200, 'Level 1 completed').setInteractive();
            this.text.setScale(2);
            this.text2 = this.add.text(this.scale.width / 2 - 250, this.scale.height / 2 - 100, '-You have unlocked the dash!').setInteractive();
            this.text2.setScale(2);
            //foto icono dash
            this.icono1= this.add.image(this.scale.width-150, this.scale.height / 2 - 100 , 'icono1');
            this.icono1.setScale(0.5);
        }

         //habilidad 2
        if (this.mapName === 'map2') {
            this.text = this.add.text(this.scale.width / 2 - 250, this.scale.height / 2 - 200, 'Level 2 completed').setInteractive();
            this.text.setScale(2);
            this.text3 = this.add.text(this.scale.width / 2 - 400, this.scale.height / 2 - 100, '-You have unlocked the click damage!').setInteractive();
            this.text3.setScale(2);
            //foto icono click damage
            this.icono2= this.add.image(this.scale.width-150, this.scale.height / 2 - 150 , 'icono2');
            this.icono2.setScale(0.5);
        }


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

                this.scene.start('level1', { mapName: 'map2',middleSceneNumber:'two' });
            });
        }
        // te pasas level2

        if (this.mapName === 'map2') {
            //level3
            this.playButton.on("pointerdown", () => {
                this.scene.start('level1', { mapName: 'map3',middleSceneNumber:'two' });
            });
        }
    }
}