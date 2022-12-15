export default class Final extends Phaser.Scene {
  constructor() {
    super({ key: 'final' });

  }


  create(data) {
    this.sonidoMenu();
    this.text = data.text;
    if (this.text === 'LOSE'){
      this.image = this.add.image(500, 250, 'lost');
    }
      //this.image = this.add.image(500, 250, 'morado');
    this.textFinal = this.add.text(this.scale.width / 2 - 250, this.scale.height / 5.6, this.text).setInteractive();
    this.textFinal.setScale(5)

    this.playbutton = this.add.text(this.scale.width / 2 - 140, this.scale.height / 5.6 + 200, 'Return menu').setInteractive();
    this.playbutton.setScale(3);

    //conexion con escena level
    this.playbutton.on("pointerdown", () => {
      //paramos musica
      this.menusong.destroy();
      this.scene.start('menu');
    });
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
    this.menusong = this.sound.add('menusong');
    this.menusong.play();
  }
}