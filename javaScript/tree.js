class Tree{
    constructor(position, trunkWidth, trunkHeight, crownRadius) {
        this.position = position;
        this.trunkHeight = trunkHeight;
        this.trunkWidth = trunkWidth;
        this.crownRadius = crownRadius;

        // Calculate width and height based on the passed parameters

        this.w = this.calculateWidth();
        this.h = this.calculateHeight();
    }


    // A method that returns the width based on the width of the trunk and diameter of the crown
    calculateWidth(){
        return (this.trunkWidth > this.crownRadius ? this.trunkWidth : this.crownRadius * 2);
    }


    // A method that returns the height based on trunk height and crown diameter
    calculateHeight(){
        return (this.trunkHeight + this.crownRadius * 2);
    }

    // This will draw the tree

    draw(ctx){
        this.drawTrunk(ctx);
        this.drawCrown(ctx);
    }
    // This will draw trunk of the tree
    drawTrunk(ctx){
        const x = this.position.x + (this.w/2) - (this.trunkWidth / 2);
        const y = this.position.y + (this.crownRadius * 2) -1;

        ctx.beginPath();
        ctx.rect(x,y, this.trunkWidth, this.trunkHeight);
        ctx.fill();
        ctx.closePath();
    }

    // This method will draw crown of the tree
    drawCrown(ctx){
        const x = this.position.x + this.w / 2;
        const y = this.position.y + this.crownRadius;

        ctx.beginPath();
        ctx.arc(x, y, this.crownRadius,0,2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    // A method that can be used to create a tree without passing a point2D
    static create(x, y, trunkWidth, trunkHeight, crownRadius){
        const position = new Point2d(x, y);
        return new Tree(position, trunkWidth, trunkHeight, crownRadius);
    }
}