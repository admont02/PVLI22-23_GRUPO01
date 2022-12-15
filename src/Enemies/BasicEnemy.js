import Enemy from './enemy.js';

/**
* Clase para elBasic Enemy, destaca por su ligero tamaño 
*/
export default class BasicEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player, click) {

    super(scene, x, y, 50, imgKey, player, 20, 150, click);
    this.setScale(.5);
    this.hp.setScale(0.2);
    this.enemyFactorDamage = 5;

    this.range = 125;

    this.hp.bar.setScale(0.2);

    //imgKey indica desde level el BasicEnemy que queremos
    this.play(imgKey, true);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    this.posPlayer();
    //Si se encuentra cerca del jugador este empezará a seguirlo
    if (this.active && (this.dX < this.range && this.dY < this.range && this.dX > -this.range && this.dY > -this.range)) {
      this.scene.physics.moveTo(this, this.player.x, this.player.y, this.speed);
    }
  }


  //Metodo para la pausa
  pauseAnim() {
    this.setActive(false);
  }



}