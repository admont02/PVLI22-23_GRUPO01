import Cry from './Objects/cry.js';
import Bottle from './Objects/bottle.js';

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
    this.lives = 3;
    this.maxLives = 5;
    this.dirX = 0;
    this.dirY = 0;
    this.createInput();
    this.label = this.scene.add.text(10, 10, "").setScrollFactor(0);//factor de desplazamiento del gameObject
    this.updateLivesText();

    this.canShoot = true;
    this.timerCry = 0;
    this.timerMaxCry = 30;

    this.timerDash = 0;
    this.timerMaxDash = 1000;

    this.isDash = false;
    this.canDash = true;
    this.speedDash = 750;
    this.aDown = this.sDown = this.wDown = this.dDown = false;

    this.bottleTime = 0;
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
    this.f = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);


    //cursores
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  updateLivesText() {
    this.label.text = 'Lives ' + this.lives;
  }

  loseLive(n) {
    if (this.lives > 0)
      this.lives -= n;
  }

  earnLive(n) {
    if (this.lives < this.maxLives)
      this.lives += n;
      this.updateLivesText();
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt);
    this.timerCry += 1;
    this.timerDash += 1;

    if (!this.isDash) {
      //eje Y
      if (this.cursors.down.isDown || this.s.isDown) {
        if(this.cursors.left.isUp && this.cursors.right.isUp) this.dirX = 0;
        this.body.setVelocityY(this.speed);
        this.sDown = true;
        this.dirY = 1;
      }
      else if (this.cursors.up.isDown || this.w.isDown) {
        if(this.cursors.left.isUp && this.cursors.right.isUp) this.dirX = 0;
        this.body.setVelocityY(-this.speed);
        this.wDown = true;
        this.dirY = -1;
      }
      else {
        this.body.setVelocityY(0);
        this.wDown = false;
        this.sDown = false;
      }
      //eje X
      if (this.cursors.right.isDown || this.d.isDown) {
        if(this.cursors.down.isUp && this.cursors.up.isUp) this.dirY = 0;
        this.body.setVelocityX(this.speed);
        this.dDown = true;
        this.dirX = 1;
      }
      else if (this.cursors.left.isDown || this.a.isDown) {
        if(this.cursors.down.isUp && this.cursors.up.isUp) this.dirY = 0;
        this.body.setVelocityX(-this.speed);
        this.aDown = true;
        this.dirX = -1;
      }
      else {
        this.body.setVelocityX(0);
        this.aDown = false;
        this.dDown = false;
      }

      this.body.velocity.normalize().scale(this.speed);

      if (this.e.isDown && this.canShoot) {
        this.createCry();
        this.canShoot = false;
      }
    }

    // Crea un nuevo bottle cuando se pulsa la tecla espacio
    if(t > this.bottleTime){
      if(this.cursors.space.isDown && (this.dirX != 0 || this.dirY != 0)){
        this.bottle = new Bottle(this.scene, this.x + (this.body.width * this.dirX), this.y + (this.body.height * this.dirY), this.dirX, this.dirY);
        this.bottleTime = t + 1000;
      }
    }

    this.body.velocity.normalize().scale(this.speed);

    if (this.timerCry == this.timerMaxCry) {
      this.canShoot = true;
      this.timerCry = 0;
    }

    if (this.timerDash == this.timerMaxDash) {
      this.canDash = true;
      this.timerDash = 0;
    }

    if (this.f.isDown && this.canDash) {
      this.startDash();
    }
  }


  createCry() {
    new Cry(this.scene, this.x, this.y);
  }


  startDash() {
    this.isDash = true;
    this.canDash = false;

    if (this.aDown) this.body.setVelocityX(-this.speedDash);
    else if (this.wDown) this.body.setVelocityY(-this.speedDash);
    else if (this.sDown) this.body.setVelocityY(this.speedDash);
    else if (this.dDown) this.body.setVelocityX(this.speedDash);
    else this.body.setVelocityX(this.speedDash);

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.stopDash();
      }
    });
  }

  stopDash() {
    this.isDash = false;
    this.body.setVelocityX(0);
  }

}
