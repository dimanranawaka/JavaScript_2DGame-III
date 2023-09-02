class Animator{
    constructor(playSpeed, showTime , images) {
        this.timer = 0;
        this.index = 0;
        this.images = images;
        this.playspeed = playSpeed;
        this.showTime = showTime;
    }
    // A method used to update the animation over time.
    update(){
        this.timer +=this.playspeed;
    }
    getImage(){

    }
    reset(){

    }
}