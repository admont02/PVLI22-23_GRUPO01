import Bullet from "./bullet.js";

//Llanto ataque del jugador
 export default class cry extends Bullet {

    constructor(scene, x, y) {
      super(scene, x, y, 'cry');
  
      this.damage = 0.1;
      this.setScale(0.1);

      this.timer = this.scene.time.addEvent({
        delay: 1000,              
        callback: () =>
        {
          this.destroyCry();
        }
        
    });
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
    
      if(this.scene.physics.overlap(this.scene.enemy, this, (o1, o2) => { o1.takeDamage(this.damage);}));
    }


    destroyCry()
    {
      this.destroy();
    }
}
  