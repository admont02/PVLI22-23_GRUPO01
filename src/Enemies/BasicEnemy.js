import Enemy from './enemy.js';

//Clase del basicEnemy
export default class BasicEnemy extends Enemy {
 
  constructor(scene, x, y, imgKey, player) {
   
    super(scene, x, y, 100, imgKey, player, 20, 150);
    this.play('basicEnemyVerdeDerecha', true);

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }




}