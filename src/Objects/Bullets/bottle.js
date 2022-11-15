import Bullet from "./bullet.js";

/**
 * El jugador disparará biberones hacia la dirección a la que esté mirando en ese 
 * momento, infligiendo daño a los enemigos que encuentre por el camino.
 */
 export default class Bottle extends Bullet {

    constructor(scene, x, y, dirX, dirY) {
      //en el super pasas el nombre del sprite bottle
      super(scene, x, y, 'bottle');
  
      this.speed = 500;
      this.dirX = dirX;
      this.dirY = dirY;
      this.setScale(.05);

      // Cambia la orientacion del sprite
      this.setFlipX(dirX < 0);
      this.setFlipY(dirY < 0);
      this.setAngle(90 * dirY);
      //this.setAngle(Phaser.Math.RadToDeg(Math.atan2(dirY, dirX)));

      this.damage = 10;
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
      
      this.body.setVelocityX(this.speed * this.dirX);
      this.body.setVelocityY(this.speed * this.dirY);  

      if(this.scene.physics.overlap(this.scene.enemy, this, (o1, o2) => { o1.takeDamage(this.damage); o2.destroy(); }));
      else if(this.x > 1000 - this.body.width || this.x < 0 + this.body.width || this.y < 0 + this.body.height || this.y > 500 - this.body.height) {
        this.destroy();
      }
    }
}
  