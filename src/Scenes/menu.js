export default class Menu extends Phaser.Scene {
  constructor() {
      super({ key: 'menu' });
  }
  create() {
      
      this.playbutton = this.add.text(this.scale.width/2 - 20, this.scale.height/2 - 20, "PLAY").setInteractive();
      this.playbutton2 = this.add.text(this.scale.width/2 - 20, this.scale.height/2 + 40, "BOSS").setInteractive();
      this.playbutton3 = this.add.text(this.scale.width/2 - 140, this.scale.height/2 + 100, "CONFIGURACION").setInteractive();

    
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