import PowerUp from "./powerUp.js";

/**
 * El jugador recuperará una vida al coger este objeto
 * (si no supera las vidas máximas)
 */
export default class LifePowerUp extends PowerUp {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'heart',player);

       // this.setScale(0.05);
        

        //this.player = player; 
       

       
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        if (this.scene.physics.overlap(this, this.player)) {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
            this.player.modifyValue(25);
        }
    }
}
