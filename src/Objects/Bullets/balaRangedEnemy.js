import Bullet from "./bullet.js";

/**
 * El enemigo disparará balas hacia la dirección a la que esté mirando en ese
 * momento, infligiendo daño a el player que encuentre por el camino.
 */

export default class balaRangedEnemy extends Bullet {

  constructor(scene, x, y, player, angle, movingObject) {
    //le pasas la escena , la x , la y y el sprite balaE
    super(scene, x, y, 'balaRanged');

    this.speed = 100;
    this.player = player;
    this.setScale(0.02);
    this.setAngle(angle);

    this.movingObject = movingObject;

    this.dirX = this.player.x - this.x;
    this.dirY = this.player.y - this.y;
    this.vec = new Phaser.Math.Vector2(this.dirX, this.dirY);
    this.vec.normalize();

    //creas timer que llame en 2 segundos a un metodo que destruya la bala
    this.timer = this.scene.time.addEvent(
      {
        delay: 2000,
        callback: () => {
          this.destroyBala();
        }

      });


  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    //asi pones la direccion que es tu destino
    this.body.setVelocityX(this.speed * this.vec.x);
    this.body.setVelocityY(this.speed * this.vec.y);

    //si coincide pos de bala y player se quita vida al player y se destruye bala
    if (this.scene.physics.overlap(this.player, this)) {
      this.destroyBala();
      this.player.modifyValue(-10);
    }
    // Si colisiona con un objeto se destruye la bala
    else if (this.scene.physics.collide(this.movingObject, this)) this.destroyBala();
    // Si colisiona con las paredes se destruye la bala
    else if (this.scene.physics.collide(this.scene.boxLayer, this)) this.destroyBala();
  }

  destroyBala() {
    this.setActive(false);
    this.destroy();
  }
}
