import Enemy from './enemy.js';


//Clase para el enemigo tanque
export default class StrongEnemy extends Enemy {
  constructor(scene, x, y, imgKey, player) {
    super(scene, x, y, 25, imgKey, player, 40, 150);

    this.setScale(.5);
    this.hp.setScale(0.5);
    // this.player = player;
    this.hp.bar.setScale(0.25);
    this.enemyFactorDamage=3;
    
    this.play('StrongEnemyWalk', true);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
  }
  effectToPlayer() {
    this.player.slowDown();
  }
  pauseAnim(){
    this.play('StrongEnemyWalk', false);
  }
}