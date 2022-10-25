import Enemy from './enemy.js';

export default class RangedEnemy extends Enemy {
    /**
     * Constructor de Goblin
     * @param {Scene} scene Escena en la que aparece la estrella
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
    
      constructor(scene, x, y, imgKey, player,tiempoBala) {
      //constructor que invoca a la clase enemy con scene con tamaño posicion , con una velocidad determinada y con la foto star
      //falta poner el sprite que queramos
          super(scene, x, y, 200, imgKey, player);
          //instancia para poder modificar clase player desde aqui
          this.setScale(0.5);
          this.playerX = this.player.x;
          this.playerY = this.player.y;
          this.tiempoBala = 4;
        //aplicar escala en X e Y en BasicEnemy 
        //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
        //sino pones nada mete el tamaño por defecto
      }

      //crear metodo aquí que cada 4 segundos pongan 1 flecha en posicion player x y player y

      //permite llamar a la clase padre para la herencia
      preUpdate(t, dt) {
        super.preUpdate(t, dt);
        // if(t>this.tiempoBala)
        // { //disparas cada 4 segundos
        //   this.enemyShoot;
        //   this.tiempoBala+=t;
        // }
        
      }

      //disparar enemigo en x e y a la pos del player
      enemyShoot()
      {
        this.scene.physics.moveTo(this,this.playerX,this.playerY,100);
      }


  }