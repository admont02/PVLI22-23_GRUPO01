
//Clase padre Bullet de la que heredarna todas las balas del juego
 export default class Bullet extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, sprite) {
      //en el super pasas el nombre del sprite bottle
      super(scene, x, y, sprite);
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
     
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
      
      this.bulletAnims();
    }

    bulletAnims()
    {
      if (this !== undefined) {
        if (this.body.velocity.x >= 0) this.setFlipX(0);
        else this.setFlipX(-1);
      }
    }
}
  