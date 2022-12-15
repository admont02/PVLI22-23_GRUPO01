import Enemy from './enemy.js';


/**
* Clase relativa al Speed Enemy
*/
export default class SpeedEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player, click) {
    super(scene, x, y, 125, imgKey, player, 30, 150, click);

    this.enemyFactorDamage = 3.75;

    this.speed = 200;
    this.setScale(0.4);
    this.hp.setScale(0.3);

    this.hp.bar.setScale(0.3);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    this.animSpeedEnemy();
    this.hp.bar.setX(this.x - this.width / 4)
  }

  //Animaciones del speed Enemy
  andarNormal() {
    this.play('MovimientoGeneralSpeedEnemy', true);
  }

  andardeLado() {
    this.speed = 200;
    this.play('turboLateralSpeedEnemy', true);
  }

  animacionesCorrer() {
    if (this.body.velocity.x == 0 && this.body.velocity.y > 0 || this.body.velocity.x > 0 && this.body.velocity.y == 0 || this.body.velocity.x < 0 && this.body.velocity.y == 0) {
      this.speed = 200;
      this.play('turboAbajoSpeedEnemy', true);
    }
    //si se mueve arriba e izq
    if (this.body.velocity.x < 0 && this.body.velocity.y >= 0) {
      this.speed = 200;
      this.play('turboAbajoSpeedEnemy', true);
    }
    //si se mueve arriba y derecha
    else if (this.body.velocity.x >= 0 && this.body.velocity.y >= 0) {
      this.speed = 125;
      //bajamos velocidad
      this.andarNormal();

    }
    //si se mueve abajo y derecha
    else if (this.body.velocity.x >= 0 && this.body.velocity.y < 0) {
      this.andardeLado();
    }
    //si se mueve abajo e izq
    else if (this.body.velocity.x < 0 && this.body.velocity.y < 0) {
      this.speed = 125;
      //bajamos velocidad
      this.andarNormal();

    }
    else {
      this.speed = 200;
      this.play('turboAbajoSpeedEnemy', true);
    }


  }

  animSpeedEnemy() {
    this.animacionesCorrer();
  }

}