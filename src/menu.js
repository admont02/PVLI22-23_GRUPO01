export default class Menu extends Phaser.Scene {
  constructor() {
      super({ key: 'menu' });
  }
  create() {
      
      this.playbutton = this.add.text(this.scale.width/2 - 20, this.scale.height/2 - 20, "PLAY").setInteractive();
    
      this.playbutton.setScale(3);

      this.playbutton.on("pointerdown", () => {
          this.scene.start('level');
      });
  }
}