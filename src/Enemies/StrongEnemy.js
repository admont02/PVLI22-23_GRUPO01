import Enemy from './enemy.js';

export default class StrongEnemy extends Enemy {
  /**
   * Constructor de Goblin
   * @param {Scene} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */

  constructor(scene, x, y, imgKey, player) {
    //constructor que invoca a la clase enemy con scene con tamaño posicion , con una velocidad determinada y con la foto star
    //falta poner el sprite que queramos
    super(scene, x, y, 50, imgKey, player, 40, 150);

    //instancia para poder modificar clase player desde aqui
    // this.hp = new HealthBar(scene, 10, 10, this);
    //aplicar escala en X e Y en BasicEnemy
    //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
    //sino pones nada mete el tamaño por defecto
    this.setScale(1);

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
      this.body.velocity.normalize().scale(50);
      // console.log(this.body.velocity.x+","+this.body.velocity.y);
    }

  }


  animsStrongEnemy() {
    if (this !== undefined) {
      if (this.body.velocity.x >= 0) this.setFlipX(0);
      else this.setFlipX(1);
    }

  }


}