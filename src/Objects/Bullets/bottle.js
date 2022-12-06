import Bullet from "./bullet.js";

/**
 * El jugador disparará biberones hacia la dirección a la que esté mirando en ese
 * momento, infligiendo daño a los enemigos que encuentre por el camino.
 */
export default class Bottle extends Bullet {

  constructor(scene, x, y, dirX, dirY,damageBottle) {
    //en el super pasas el nombre del sprite bottle
    super(scene, x, y, 'bottle');

    this.speed = 500;
    this.dirX = dirX;
    this.dirY = dirY;
    this.setScale(.0125);

    // Cambia la orientacion del sprite
    this.setFlipX(dirX < 0);
    this.setFlipY(dirY < 0);
    this.setAngle(90 * dirY);

    this.damageBottle = damageBottle;

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      callback: () =>
      {
        this.destroyBottle();
      }
    });

    this.glassSound = this.scene.sound.add('glass');
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    this.body.setVelocityX(this.speed * this.dirX);
    this.body.setVelocityY(this.speed * this.dirY);

    if (this.scene.physics.overlap(this.scene.enemy, this, (o1, o2) => { o1.takeDamage(this.damageBottle); o2.destroyBottle(); }));
    else if(this.scene.physics.collide(this.scene.boxLayer, this)) this.destroy();
  }

  destroyBottle(){
    if(this.timer != null){
      this.timer.destroy();
      this.timer = null;
    }

    this.glassSound.play();

    this.destroy();
  }

  
}
