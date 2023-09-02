class ForeverRunnerGame{
    constructor(id,frameRate,groundOffset,playerOptions,difficulty) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.frameRate = frameRate;
        this.groundY = this.canvas.height - groundOffset;
        this.difficulty = difficulty;
        this.initialize();
    }

    initialize() {

    }

    update(){

    }
    draw(){

    }


}