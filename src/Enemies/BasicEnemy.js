import Enemy from './enemy.js';

//Clase del basicEnemy
export default class BasicEnemy extends Enemy {
 
  constructor(scene, x, y, imgKey, player) {
   
    super(scene, x, y, 100, imgKey, player, 20, 150);
    this.setScale(1.5);
    //imgKey indica desde level el BasicEnemy que queremos
    this.play(imgKey, true);

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }




}