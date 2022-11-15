
 export default class Bullet extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite) {
      //en el super pasas el nombre del sprite bottle
      super(scene, x, y, sprite);
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
     
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
      
    }
}
  