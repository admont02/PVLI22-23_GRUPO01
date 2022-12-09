import PowerUp from "./powerUp.js";

/**
 * El jugador recuperará una vida al coger este objeto
 * (si no supera las vidas máximas)
 */
export default class speedPowerUp extends PowerUp {

    constructor(scene, x, y, player) {
        super(scene, x, y, 'boots', player);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }
    effectToPlayer() {
        this.player.modifySpeed(0.5);
    }
}
