import Enemy from './enemy.js';


//Clase para el enemigo tanque
export default class StrongEnemy extends Enemy {
  constructor(scene, x, y, imgKey, player) {
    super(scene, x, y, 50, imgKey, player, 40, 150);

    this.play('StrongEnemyWalk', true);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }


}