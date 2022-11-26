export default class Creditos extends Phaser.Scene {
  constructor() {
      super({ key: 'Creditos' });
  }
  create()
   {
        this.sonidoMenu();
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