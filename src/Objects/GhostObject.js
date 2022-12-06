
//Clase que acompaña al movingObject para que el jugador no pueda mover a este último
 export default class GhostObject extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, player) {
    super(scene, x, y, 'transparente');

    this.setScale(0.3);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);

    this.scene.physics.add.collider(this, player);
    
    this.player = player;

  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);

  }


}
