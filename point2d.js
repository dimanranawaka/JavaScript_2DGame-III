class Point2d{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    // method that can increase or decrease x,y values
    add(dx,dy){
        this.x+=dx;
        this.y+=dy;
    }
}