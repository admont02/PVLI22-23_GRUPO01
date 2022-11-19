import Enemy from './enemy.js';

export default class StrongEnemy extends Enemy {


  constructor(scene, x, y, imgKey, player) {
    //constructor que invoca a la clase enemy con scene con tamaño posicion , con una velocidad determinada y con la foto star
    //falta poner el sprite que queramos
    super(scene, x, y, 50, imgKey, player, 40, 150);

  
   

    this.play('StrongEnemyWalk', true);
  }

  //permite llamar a la clase padre para la herencia
  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    // this.hp.bar.setX(this.x-this.scene.cameras.main._scrollX-this.width)
    // this.hp.bar.setY(this.y-this.height)
    //hacer animaciones
    if (this !== undefined) {
      this.animsStrongEnemy();
      //velocidad 50
    }

  }


  animsStrongEnemy() {
    if (this !== undefined) {
      if (this.body.velocity.x >= 0) this.setFlipX(0);
      else this.setFlipX(1);
    }

  }


}