import Enemy from './enemy.js';
import balaRangedEnemy from '../Objects/Bullets/balaRangedEnemy.js';

/**
* Clase para el Ranged Enemy, que dispara potentes balas
*/
export default class RangedEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player, moving, click) {
    super(scene, x, y, 50, imgKey, player, 20, 150, click);

    this.setScale(.5);
    this.hp.setScale(0.5);
    this.enemyFactorDamage = 5;
    this.range = 150;
    // this.hp.bar.setScale(0.5);
    this.playerX = this.player.x;
    this.playerY = this.player.y;

    this.moving = moving;

    this.play('RangedEnemyDer', true);

    //Las balas se disparan cada cuatro segundos
    this.timer = this.scene.time.addEvent({
      delay: 4000,
      callback: this.enemyShoot,
      callbackScope: this,
      loop: true
    });

    this.shots = this.scene.add.group();
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
  }


  //disparar enemigo en x e y a la pos del player
  enemyShoot() {
    this.angle = Phaser.Math.Angle.Between(this.x, this.y, this.player.x, this.player.y);

    this.posPlayer();

    //creas la bala y le pasas el origen de disparo y la direccion que es la resta entre el destino y el origen
    if (this.active && ((this.dX < this.range && this.dY < this.range && this.dX > -this.range && this.dY > -this.range)))
      this.shots.add(new balaRangedEnemy(this.scene, this.x, this.y, this.player, this.angle, this.moving));
  }

  pauseAnim() {
    this.play('RangedEnemyDer', false);
  }

}