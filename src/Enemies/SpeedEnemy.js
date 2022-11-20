import Enemy from './enemy.js';


//Clase para el enemigo rapido
export default class SpeedEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player) {
    super(scene, x, y, 300, imgKey, player, 20, 100);
 
    this.play('MovimientoGeneralSpeedEnemy', true);
    this.setScale(1);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    
  }

}