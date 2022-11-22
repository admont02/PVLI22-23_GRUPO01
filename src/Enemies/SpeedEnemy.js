import Enemy from './enemy.js';


//Clase para el enemigo rapido
export default class SpeedEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player) {
    super(scene, x, y, 300, imgKey, player, 20, 100);
    
   
    this.speed = 300;
    this.setScale(1);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

    this.animSpeedEnemy();

  }

//Animaciones del speed Enemy
  andarNormal()
  {
    this.play('MovimientoGeneralSpeedEnemy', true);
  }

  andardeLado()
  {
    this.speed=300;
    this.play('turboLateralSpeedEnemy', true);
  }
  
  animacionesCorrer()
  {
    if(this.body.velocity.x == 0 && this.body.velocity.y>0 || this.body.velocity.x > 0 && this.body.velocity.y==0 || this.body.velocity.x < 0 && this.body.velocity.y==0)
    {
      this.speed=300;
        this.play('turboAbajoSpeedEnemy', true);
    }
      //si se mueve arriba e izq
      if(this.body.velocity.x < 0 && this.body.velocity.y>=0)
      {
        this.speed=300;
        this.play('turboAbajoSpeedEnemy', true);
      }
      //si se mueve arriba y derecha
      else if(this.body.velocity.x >= 0 && this.body.velocity.y>=0)
      {
        this.speed=150;
        //bajamos velocidad
        this.andarNormal();
        
      }
      //si se mueve abajo y derecha
      else if(this.body.velocity.x >= 0 && this.body.velocity.y<0)
      {
        this.andardeLado();
      }
      //si se mueve abajo e izq
      else if(this.body.velocity.x < 0 && this.body.velocity.y<0)
      {
        this.speed=150;
        //bajamos velocidad
        this.andarNormal();
       
      }
      else
      {
        this.speed=300;
        this.play('turboAbajoSpeedEnemy', true);
      }

      
  }

  animSpeedEnemy()
  {     
     this.animacionesCorrer();
  }

}