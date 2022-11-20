import Enemy from './enemy.js';


//Clase para el enemigo rapido
export default class SpeedEnemy extends Enemy {

  constructor(scene, x, y, imgKey, player) {
    super(scene, x, y, 300, imgKey, player, 20, 100);
    
   
    
    this.setScale(1);
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.animSpeedEnemy()
    
  }

  animSpeedEnemy()
  {
    //si se mueve der y no en ejeY
    if (this.body.velocity.x >= 0 && this.body.velocity.y==0 )
    { 
      this.play('MovimientoGeneralSpeedEnemy', true);
    }
    //si se mueve en izq y no en ejeY
    else if(this.body.velocity.x < 0 && this.body.velocity.y==0)
    {
      this.setFlipX(1);
    }
    //si se mueve arriba y no en ejeX
    else if(this.body.velocity.x == 0 && this.body.velocity.y>=0)
    {
      this.play('turboAbajoSpeedEnemy', true);
      
    }
    //si se mueve abajo y no en ejeX
    else if(this.body.velocity.x == 0 && this.body.velocity.y<0)
    {
      this.play('turboAbajoSpeedEnemy', true);
      
    }
    //si se mueve arriba e izq
    else if(this.body.velocity.x < 0 && this.body.velocity.y>=0)
    {
      this.play('turboAbajoSpeedEnemy', true);
     
    }
    //si se mueve arriba y derecha
    else if(this.body.velocity.x >= 0 && this.body.velocity.y>=0)
    {
      this.play('MovimientoGeneralSpeedEnemy', true);
    
    }
    //si se mueve abajo y derecha
    else if(this.body.velocity.x >= 0 && this.body.velocity.y<0)
    {
      this.play('turboAbajoSpeedEnemy', true);
      
    }
    //si se mueve abajo e izq
    else if(this.body.velocity.x < 0 && this.body.velocity.y<0)
    {
      this.play('MovimientoGeneralSpeedEnemy', true);
     
    }
  }

}