import Enemy from './enemy.js';
import balaRangedEnemy from '../Objects/balaRangedEnemy.js';//para poder instanciar balas enemigas

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
          super(scene, x, y, 200, imgKey, player,2);
          //instancia para poder modificar clase player desde aqui
          this.setScale(0.5);
          this.playerX = this.player.x;
          this.playerY = this.player.y;
          this.tiempoBala = 4000;
          this.lastShot =0;
        //aplicar escala en X e Y en BasicEnemy 
        //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
        //sino pones nada mete el tamaño por defecto
        
      }

      //crear metodo aquí que cada 4 segundos pongan 1 flecha en posicion player x y player y

      //permite llamar a la clase padre para la herencia
      preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.delta = t- this.lastShot;// t es tiempo que ha pasado de partida en milisegundos
        if(this.delta>this.tiempoBala)
        { //disparas cada 4 segundos
          this.enemyShoot();
          this.lastShot=t;
        }

        
        
    }
    //disparar enemigo en x e y a la pos del player
    enemyShoot()
    {
      //creas la bala y le pasas el origen de disparo y la direccion que es la resta entre el destino y el origen
      var BalaRangedEnemy = new balaRangedEnemy(this.scene, this.x, this.y, this.player.x-this.x, this.player.y- this.y,this.player);
    }

    

      


  }