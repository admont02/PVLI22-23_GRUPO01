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
          super(scene, x, y, 50, imgKey, player,4);
          //instancia para poder modificar clase player desde aqui
         // this.hp = new HealthBar(scene, 10, 10, this);
        //aplicar escala en X e Y en BasicEnemy 
        //  this.setScale(50,50);--> multiplicaba el tamaño que ya tiene por defecto x50
        //sino pones nada mete el tamaño por defecto
        this.setScale(1);

      }

      //permite llamar a la clase padre para la herencia
      preUpdate(t, dt) {
        super.preUpdate(t, dt);
        // this.hp.bar.setX(this.x-this.scene.cameras.main._scrollX-this.width)
        // this.hp.bar.setY(this.y-this.height)
        //hacer animaciones
        if(this!==undefined)
        {
          this.animsStrongEnemy();
          //velocidad 50
          this.body.velocity.normalize().scale(50);
          // console.log(this.body.velocity.x+","+this.body.velocity.y);
        }
        
      }


      animsStrongEnemy()
      {
        if(this!==undefined)
        {
             //si esta quieto
        if (this.body.velocity.x === 0 && this.body.velocity.y === 0) 
        {
           this.play('StrongEnemyWalk', true);
        }
        //si va a la derecha (1,0)
        else if (this.body.velocity.x > 0 && this.body.velocity.y === 0) 
        {
          console.log("ha");
          this.play('StrongEnemyWalk', true);
        }
        //si va a la izq (-1,0)
        else if (this.body.velocity.x < 0 && this.body.velocity.y === 0) {
          this.play('StrongEnemyIzq', true);
        }
        //si va a la arriba (0,1)
        else if (this.body.velocity.x === 0 && this.body.velocity.y > 0) {
          this.play('StrongEnemyWalk', true);
        }
        //si va a abajo (0,-1)
        else if (this.body.velocity.x === 0 && this.body.velocity.y < 0) {
          this.play('StrongEnemyWalk', true);
        }
        //si va a la derecha arriba(1,1)
        else if (this.body.velocity.x > 0 && this.body.velocity.y > 0) {
          this.play('StrongEnemyWalk', true);
        }
        //si va a la derecha abajo (1,-1)
        else if (this.body.velocity.x > 0 && this.body.velocity.y > 0) {
          this.play('StrongEnemyWalk', true);
        }
        //si va a la izq abajo (-1,-1)
        else if (this.body.velocity.x < 0 && this.body.velocity.y <0) {
          this.play('StrongEnemyIzq', true);
        }
        //si va a la izq arriba(-1,1)
        else if (this.body.velocity.x < 0 && this.body.velocity.y > 0) {
          this.play('StrongEnemyIzq', true);
        }
        }
       
      }


  }