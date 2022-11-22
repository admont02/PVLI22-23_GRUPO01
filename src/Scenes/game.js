import Boot from './boot.js';
import Level1 from './level1.js';
import Level3 from './level3.js';
import Menu from './menu.js';
import Configuracion from './Configuracion.js'


/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 500,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu, Level1, Level3, Configuracion],
    physics: { 
        default: 'arcade', 
        arcade: {  
            debug: true 
        } 
    }
};

new Phaser.Game(config);