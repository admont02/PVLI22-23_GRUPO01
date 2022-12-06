import Enemy from './enemy.js';

//Clase del basicEnemy
export default class BasicEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player) {

    super(scene, x, y, 100, imgKey, player, 20, 150);
    this.setScale(.5);
    this.hp.setScale(0.2);
    this.enemyFactorDamage = 5;

    this.hp.bar.setScale(0.2);
    //imgKey indica desde level el BasicEnemy que queremos
    this.play(imgKey, true);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }
  pauseAnim() {
    //this.play(imgKey,false); 
    this.setActive(false);
  }



}