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
          super(scene, x, y, 200, imgKey, player);
          //instancia para poder modificar clase player desde aqui
        
        //aplicar escala en X e Y en BasicEnemy 
        //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
        //sino pones nada mete el tamaño por defecto
      }

      //permite llamar a la clase padre para la herencia
      preUpdate(t, dt) {
        super.preUpdate(t, dt);
      }


  }