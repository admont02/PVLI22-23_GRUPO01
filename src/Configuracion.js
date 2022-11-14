export default class Configuracion extends Phaser.Scene {
  constructor() {
      super({ key: 'configuracion' });
  }
  create() {
      
      
      this.playbutton = this.add.text(this.scale.width/2 - 140, this.scale.height/2 + 100, "Back").setInteractive();
 
      this.playbutton.setScale(3);

    //conexion con escena level
      this.playbutton.on("pointerdown", () => {
          this.scene.start('menu');
      });
  }
}