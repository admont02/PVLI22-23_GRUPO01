export default class Configuracion extends Phaser.Scene {
  constructor() {
      super({ key: 'configuracion' });
  }
  create() {
      
      this.image =this.add.image(500, 250, 'configuracion');
      this.playbutton = this.add.text(this.scale.width/2 - 65, this.scale.height/2 + 165, "___").setInteractive();
      this.image.setScale(1);
      this.playbutton.setScale(3);

    //conexion con escena level
      this.playbutton.on("pointerdown", () => {
          this.scene.start('menu');
      });
  }
}