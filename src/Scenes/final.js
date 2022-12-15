export default class Final extends Phaser.Scene {
  constructor() {
    super({ key: 'final' });

  }


  create(data) {
    this.sonidoMenu();
    this.mapName = data.mapName;
    this.canPlayerDash = data.dash;
    this.canClick = data.click;
    //numero de middleScene que es segun nivel
    this.middleSceneNumber = data.middle;
    this.text = data.text;
    if (this.text === 'LOSE') {
      this.image = this.add.image(500, 250, 'lost');
      this.playbutton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 200, 'back').setInteractive().setScale(0.15);
      this.playbutton.on("pointerdown", () => {
        //paramos musica
       // this.menusong.destroy();
        this.scene.start('level1',{ mapName: this.mapName,dash:this.canPlayerDash, click:this.canClick , middle:this.middleSceneNumber });
      });
    }
    else {
      this.image = this.add.image(500, 250, 'win');
      this.playbutton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 200, 'back').setInteractive().setScale(0.15);
      this.menusong = this.sound.add('winsong');
      this.menusong.play();
      this.playbutton.on("pointerdown", () => {
        //paramos musica
        this.menusong.destroy();
        this.scene.start('menu');
      });


    }
  }

  sonidoMenu() {
    const config = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    //this.menusong = this.sound.add('winsong');
  }
}