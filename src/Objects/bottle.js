/**
 * El jugador disparará biberones hacia la dirección a la que esté mirando en ese 
 * momento, infligiendo daño a los enemigos que encuentre por el camino.
 */
 export default class Bottle extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, dirX, dirY) {
      super(scene, x, y, 'bottle');
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
      this.speed = 100;
      this.dirX = dirX;
      this.dirY = dirY;
      this.setScale(.1);
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
      
      this.body.setVelocityX(this.speed * this.dirX);
      this.body.setVelocityY(this.speed * this.dirY);  
    }
}
  