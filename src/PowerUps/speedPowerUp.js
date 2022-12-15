import PowerUp from "./powerUp.js";

/**
 * El jugador duplicara su velocidad al coger este powerUp
 * 
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
