


 // Escena principal del juego. 
export default class Levels extends Phaser.Scene {
  
  //Constructor de la escena
  constructor() {
    super({ key: 'level4' });
  }

 
   //Creación de los elementos de la escena principal de juego
  create() 
  {
    // const width = this.scale.width;
    // const height = this.scale.height;
    // const large = width * 10;
    
    //boton de back para volver hacia atrás
    console.log("he");
    this.playbutton5 = this.add.text(this.scale.width/2 - 20, this.scale.height/2 - 20, "BACK").setInteractive();
  
    //lo escalamos
    this.playbutton5.setScale(3);

    //conexion con escena game
    this.playbutton5.on("pointerdown",  () => {
      this.scene.start('menu');
    });

    console.log("hes");

  }
  
 


}