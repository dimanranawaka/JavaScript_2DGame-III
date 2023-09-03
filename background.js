class Background{
    constructor(max , w, h) {
        this.max = max;
        this.w = w;
        this.h = h;
        this.current = max;
        this.decrease = true;
    }
/** A method used to draw the background color, and it also sets an inverse fill and stroke
 *   color used by the other objects than background */

    draw(ctx){

        // Draw Background Colors

        ctx.beginPath();
        ctx.fillStyle = `rgb($(this.current),$(this.current),$(this.current))`;
        ctx.rect(0,0, this.w, this.h);
        ctx.fill();
        ctx.closePath();

        // Set inverse colors for other objects

        const inverse = this.max - this.current;
        ctx.fillStyle = `rgb(${inverse},${inverse},${inverse})`;
        ctx.strokeStyle = ` rgb(${inverse},${inverse},${inverse})`;

    }

    // This will update the background color

    update(){

        this.current += (this.decrease ? -1:1);

        if(this.current == this.max){

            this.decrease = true;

        }else if (this.current == 0){

            this.decrease = false;

        }

    }

}