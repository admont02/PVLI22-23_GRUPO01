import Bullet from "./bullet.js";

/**
* Llanto ataque del jugador
*/
 export default class Cry extends Bullet {

    constructor(scene, x, y) {
      super(scene, x, y, 'cry');
  
      this.damage = 0.1;
      this.setScale(0.07);

      this.timer = this.scene.time.addEvent({
        delay: 1000,              
        callback: () =>
        {
          this.destroy();
        }
        
    });
    }

    preUpdate(t, dt) {
      super.preUpdate(t, dt);
    
      if(this.scene.physics.overlap(this.scene.enemy, this, (o1, o2) => { o1.takeDamage(this.damage);}));
    }


}
  