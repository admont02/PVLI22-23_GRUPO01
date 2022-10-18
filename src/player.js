import Cry from './cry.js';

/**
 * Clase que representa el jugador del juego.
 */
export default class Player extends Phaser.GameObjects.Sprite {

  /**
   * Constructor del jugador
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.lives = 5;
    this.createInput();
    this.label = this.scene.add.text(10, 10, "").setScrollFactor(0);
    this.updateLives();

    this.canShoot = true;
    this.timer = 0;
    this.timerMax = 30;

  }

  /**
 * Método para crear los controles del player.
 */
  createInput() {
    //W,A,S,D
    this.a = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.w = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.s = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.d = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.e = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

    //cursores
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  updateLives() {
    this.label.text = 'Lives ' + this.lives;
  }

  loseLive(n) {
    if (this.lives > 0)
      this.lives -= n;
  }

  earnLive(n) {
    if (this.lives < this.maxLives)
      this.lives += n;
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.timer += 1;
    //eje Y
    if (this.cursors.down.isDown || this.s.isDown)
      this.body.setVelocityY(this.speed);

    else if (this.cursors.up.isDown || this.w.isDown)
      this.body.setVelocityY(-this.speed);
    else
      this.body.setVelocityY(0);
    //eje X
    if (this.cursors.right.isDown || this.d.isDown)
      this.body.setVelocityX(this.speed);

    else if (this.cursors.left.isDown || this.a.isDown)
      this.body.setVelocityX(-this.speed);
    else
      this.body.setVelocityX(0);

    this.body.velocity.normalize().scale(this.speed);


    if(this.timer == this.timerMax)
    {
      this.canShoot = true;
      this.timer = 0;
    } 

    if(this.e.isDown && this.canShoot)
    {
      this.createCry();
      this.canShoot = false;
    }
  }


  createCry()
  {
    new Cry(this.scene, this.x, this.y);
  }

}
