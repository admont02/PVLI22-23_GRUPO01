import Enemy from './enemy.js';


/**
* Clase del Strong Enmy, te ralentiza al colisionar con él.
*/
export default class StrongEnemy extends Enemy {
  constructor(scene, x, y, imgKey, player, click) {
    super(scene, x, y, 30, imgKey, player, 40, 150, click);

    this.setScale(0.75);
    this.hp.setScale(0.5);
    // this.player = player;
    this.hp.bar.setScale(0.5);
    this.enemyFactorDamage = 3;

    this.play('StrongEnemyWalk', true);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
  }
  effectToPlayer() {
    this.player.modifySpeed(2);
  }
  pauseAnim() {
    this.play('StrongEnemyWalk', false);
  }
}