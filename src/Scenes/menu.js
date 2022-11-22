export default class Menu extends Phaser.Scene {
  constructor() {
      super({ key: 'menu' });
  }
  create() {
      this.image =this.add.image(500, 250, 'fondoMenu');
      this.playbutton = this.add.text(this.scale.width/2 - 70, this.scale.height/5.6 - 20, "_____").setInteractive();
      this.playbutton2 = this.add.text(this.scale.width/2 - 60, this.scale.height/2 + 120, "________").setInteractive();
      this.playbutton3 = this.add.text(this.scale.width/2 - 180, this.scale.height/2-40, "____________").setInteractive();

    
      this.playbutton.setScale(3);
      this.playbutton2.setScale(3);
      this.playbutton3.setScale(3);

    //conexion con escena level
      this.playbutton.on("pointerdown", () => {
          this.scene.start('level');
      });

    //conexion con escena level3
      this.playbutton2.on("pointerdown", () => {
        this.scene.start('level3');
    });

    //conexion con escena level4
      this.playbutton3.on("pointerdown",  () => {
        this.scene.start('configuracion');
      });
  }
}