export default class Configuracion extends Phaser.Scene {
  constructor() {
      super({ key: 'configuracion' });
  }
  create() {
      
    this.sonidoMenu();
      this.image =this.add.image(500, 250, 'configuracion');
      this.playbutton = this.add.text(this.scale.width/2 - 65, this.scale.height/2 + 165, "___").setInteractive();
      this.image.setScale(1);
      this.playbutton.setScale(3);

    //conexion con escena level
      this.playbutton.on("pointerdown", () => {
          this.menusong.destroy();
          this.scene.start('menu');
      });
  }

  sonidoMenu()
  {
    const config = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
    };
    this.menusong = this.sound.add('menusong', config);
    this.menusong.play();
  }
}