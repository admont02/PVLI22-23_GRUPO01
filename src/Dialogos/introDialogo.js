import EventDispatcher from '../eventos/eventDispatcher.js'

// Esta clase se encarga de escribir texto de forma progresiva o instantaneamente, teniendo encuenta además la fuente, el ancho
// hasta el salto a la siguiente línea y la emisión de eventos
export default class IntroDialogo extends Phaser.GameObjects.Text {

	constructor(scene, x, y, width) {
		super(scene, x, y);
		//añades a la clase a la escena
		this.scene.add.existing(this);

		this.textToDisplay = ''; 		// El texto que va a escribir
		this.timePerLetter = 25; 		// Tiempo entre letras en milisegundos
		this.isWritting = false; 		// Indica si actualmente esta escribiendo
		this.letterPos = 0; 			// Indica la posicion actual de la letra que va a escribir

		this.setWordWrapWidth(width + width / 2); 	// Indica cuando hace el salto de linea
		this.setLineSpacing(2); 		// Indica el espaciado entre lineas

		// Cambia la fuente del texto
		//this.setFontFamily('pixelFont');

		/* Si quiereis cambiar el tamaño de la letra usar esta instruccion,
		volver a contar los caracteres por linea y actualizar el comentario de setTextToDisplay */
		this.setFontSize(20);
		this.setScale(.6);
		//asociamos evento a variable
		// this.emitter = EventDispatcher.getInstance();

		//ejecutamos evento y lo escuchamos cuando se emita
		this.scene.emitter.on("introPergamino", () => {
			this.clearText();	// Borrar texto previo
			//pasamos texto que se pondrá en pantalla y dará permiso a update para hacer metodo write
			this.myText = 'Bienvenido al mundo del sueño...lo siento Otis , pero todo depende de tí. \n Debes acabar con las pesadillas y con el terrible Agnan, que se ha hecho con el control total del mundo. \n Solo tú puedes liberarlo!';
			this.setFontFamily('pixelFont');
			//this.setShadow(1, 1, "#999999", 1, false, true);
			//cambiar de color el texto latexColor
			this.setTint(0x000000);
			this.setTextToDisplay(this.myText);
			console.log("es");
		});
	}

	//para la intro
	preUpdate(t, dt) {
		// super.preUpdate(t, dt);
		//para acceder a la variable =0 de level1
		this.scene.previousLetterTime += dt;//contador del tiempo transcurrido desde la ultima letra
		//si ha pasado el tiempo necesario y no ha terminado de escribir , escribe la siguiente letra
		if (this.isWritting && this.timePerLetter <= this.scene.previousLetterTime) {
			this.write();
			//quitamos permiso de escritura

			this.scene.previousLetterTime = 0;
		}
	}

	// Este metodo sirve para pasarle el texto que se quiere escribir, el maximo de caracteres es de 160
	setTextToDisplay(text) {
		// En caso de que se este escribiendo algo sale un error e impide que se pise el texto actual
		if (this.isWritting === false) {
			this.textToDisplay = text;
			this.isWritting = true;
		}
		else console.log('Ya se esta escribiendo un texto');
	}

	// Permite cambiar la velocidad de escritura
	setTimePerLetter(time) {
		this.timePerLetter = time;
	}

	// Se llama en un update y escribe letra por letra el texto
	write() {
		// Si llega al final del texto devuelve la posicion a 0 y cambia el estado de escribiendo a false
		//si ha llegado al final del texto impedimos que siga escribiendo
		if (this.textToDisplay.length <= this.letterPos) {
			console.log("acabaste");
			this.isWritting = false;
			this.letterPos = 0;
			return;
		}
		//devuelve la letra de la posicion que le pases
		let letter = this.textToDisplay.charAt(this.letterPos);
		//esa letra se la sumamos al texto actual para que lo escriba letra por letra
		this.text += letter;

		this.updateText();
		this.letterPos++;
		//si queremos ejecutar el evento otra vez
		// if (this.textToDisplay.length <= this.letterPos) {
		// 	this.scene.time.delayedCall(700, () => {this.scene.emitter.emit('introPergamino')});
		// }
	}

	// Este metodo imprime directamente todo el texto en pantalla
	printText() {
		this.text = this.textToDisplay;
		this.updateText();
		this.isWritting = false;
	}

	// Limpia el texto escrito y el texto a escribir ¡¡IMPORTANTE LLAMAR A LA FUNCION CADA VEZ QUE SE QUIERA ESCRIBIR UN NUEVO TEXTO!!
	clearText() {
		this.text = '';
		this.textToDisplay = '';
		this.letterPos = 0;
		this.isWritting = false;
		this.timePerLetter = 25;
		this.updateText();
	}






}