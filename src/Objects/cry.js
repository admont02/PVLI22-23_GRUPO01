
 export default class Bottle extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
      super(scene, x, y, 'cry');
  
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
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
      
      
    }


    destroyCry()
    {
      this.destroy();
    }
}
  