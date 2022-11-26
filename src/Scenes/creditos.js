export default class Creditos extends Phaser.Scene {
  constructor() {
      super({ key: 'Creditos' });
  }
  create()
   {
    
      // this es Scene
      this.image = this.add.image(125, 200, 'creditos').setOrigin(0,0);
      // this.image =this.add.image(-200, -1000, 'fondoMenu');
      
      // Animación para mover de lado a lado creditos en Y
      this.tween = this.tweens.add({
          targets: [ this.image ],
          y: -1000,
          duration: 10000,
          // ease: 'Sine.easeInOut',
          // flipX: true,
          // yoyo: true,
          repeat: -1
      });

      
  }
}