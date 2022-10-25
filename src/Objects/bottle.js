/**
 * El jugador disparará biberones hacia la dirección a la que esté mirando en ese 
 * momento, infligiendo daño a los enemigos que encuentre por el camino.
 */
 export default class Bottle extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, dir) {
      super(scene, x, y, 'bottle');
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
      this.speed = 100;
      this.dir = dir;
      this.setScale(.1);
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
      
      this.body.setVelocityX(this.speed * this.dir);
      this.body.setVelocityY(0);  
    }
}
  