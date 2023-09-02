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
        if (this.timer >= this.showTime){
            this.timer = 0;
            this.index = (this.index+1) % this.images.length;
        }
    }
    getImage(){
        return this.images[this.index];
    }
    // method that can reset the animation to the first image
    reset(){
        this.index = 0;
    }
    /** A method that can be used to create instance of an animator by
     specifying images' locations instead of instances of HTMLImageElements.
     */
    static create(playerSpeed, showTime , imageSources){
        const images = [] ;
        for (let i = 0; i < imageSources.length; i++) {
            // In-built image Array
            let image = new Image();
            image.src = imageSources[i];
            images.push(image);
        }

        return new Animator(playerSpeed,showTime,images)
    }
}