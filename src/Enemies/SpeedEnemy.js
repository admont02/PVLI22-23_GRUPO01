import Enemy from './enemy.js';

export default class SpeedEnemy extends Enemy {
  /**
   * Constructor de Goblin
   * @param {Scene} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */

  constructor(scene, x, y, imgKey, player) {
    //constructor que invoca a la clase enemy con scene con tamaño posicion , con una velocidad determinada y con la foto star
    //falta poner el sprite que queramos
    super(scene, x, y, 300, imgKey, player, 20, 100);
    //instancia para poder modificar clase player desde aqui
    //aplicar escala en X e Y en BasicEnemy
    //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
    //sino pones nada mete el tamaño por defecto
    this.play('MovimientoGeneralSpeedEnemy', true);
    // this.livesSpeedEnemy =2;
    this.setScale(1);
  }

  //permite llamar a la clase padre para la herencia
  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    // console.log("speed : "+this.x, this.y);
    //que haga animaciones si no esta destruido , esto es cuando toca al jugador
    if (this !== undefined) {
      this.animsSpeedEnemy();
    }

  }

  animsSpeedEnemy() {

    if (this !== undefined) 
    {
      //segun donde sea la x hacemos flip o no
      if (this.body.velocity.x >= 0) this.setFlipX(0);
      else this.setFlipX(1);
    }

  }


}