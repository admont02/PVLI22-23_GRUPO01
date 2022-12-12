let instance = null;

export default class EventDispatcher extends Phaser.Events.EventEmitter {
    constructor() {
        super();  
        if (instance == null) instance = this;     
    }
    //para asociar evento con clase
    static getInstance() {
        if (instance == null) {
            instance = new EventDispatcher();
        }
        return instance;
    }
}