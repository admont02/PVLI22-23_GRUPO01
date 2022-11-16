import Enemy from './enemy.js';

export default class BasicEnemy extends Enemy {
  /**
   * Constructor de Goblin
   * @param {Scene} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */

  constructor(scene, x, y, imgKey, player) {
    //constructor que invoca a la clase enemy con scene con tamaño posicion , con una velocidad determinada y con la foto star
    //falta poner el sprite que queramos

    //el parametro 100 es la velocidad del basicEnemy y 2 es la vida del BasicEnemy
    super(scene, x, y, 100, imgKey, player, 20, 150);
    //instancia para poder modificar clase player desde aqui
    this.play('basicEnemyRojoDerecha', true);
    //aplicar escala en X e Y en BasicEnemy
    //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
    //sino pones nada mete el tamaño por defecto

  }

  //permite llamar a la clase padre para la herencia
  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    if (this !== undefined) {
      this.animsBasicEnemy();
      //velocidad 50
      this.body.velocity.normalize().scale(50);

    }
  }

  animsBasicEnemy() 
  { 
    if (this !== undefined) {
      //segun donde sea la x hacemos flip o no
      if (this.body.velocity.x >= 0) this.setFlipX(0);
      else this.setFlipX(1);
    }
  }


}