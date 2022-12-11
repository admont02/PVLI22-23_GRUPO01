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

    // timer que despues de 1 segundo llama a un metodo que destruye la botella
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

    // Si colisiona con un enemigo se destruye la botella y el enemigo recibe daño
    if (this.scene.physics.overlap(this.scene.enemy, this, (o1, o2) => { o1.takeDamage(this.damageBottle); o2.destroyBottle(); }));
    // Si colisiona con las paredes se destruye la botella
    else if(this.scene.physics.collide(this.scene.boxLayer, this)) this.destroy();
  }

  //Destruccion de la botella
  destroyBottle(){
    // Se destruye el timer
    if(this.timer != null){
      this.timer.destroy();
      this.timer = null;
    }

    // Sonido de la botella al romperse
    this.glassSound.play();

    this.destroy();
  }


}
