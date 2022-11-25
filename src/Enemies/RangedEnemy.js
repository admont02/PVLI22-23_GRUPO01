import Enemy from './enemy.js';
import balaRangedEnemy from '../Objects/Bullets/balaRangedEnemy.js';

//Clase para el Ranged Enemy
export default class RangedEnemy extends Enemy {
 
  constructor(scene, x, y, imgKey, player, tiempoBala) {
      super(scene, x, y, 200, imgKey, player, 20, 150);

    this.setScale(1.5);
    // this.hp.setScale(0.5);

    // this.hp.bar.setScale(0.5);
    this.playerX = this.player.x;
    this.playerY = this.player.y;
    this.tiempoBala = 4000;
    this.lastShot = 0;
    this.play('RangedEnemyDer', true);


    
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.delta = t - this.lastShot;

    //Las balas se disparan cada cuatro segundos
    if (this.delta > this.tiempoBala) {
      this.enemyShoot();
      this.lastShot = t;
    }
  }


  //disparar enemigo en x e y a la pos del player
  enemyShoot() {
    //creas la bala y le pasas el origen de disparo y la direccion que es la resta entre el destino y el origen
    var BalaRangedEnemy = new balaRangedEnemy(this.scene, this.x, this.y, this.player.x - this.x, this.player.y - this.y, this.player);
  }

 
}