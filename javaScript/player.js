class Player{
    constructor(position, animator, movement, collider ) {
        this.position = position;
        this.animator = animator;
        this.movement = movement;
        this.collider = collider;
    }

    // this method is  used to update player movements and animations
    update(){
        this.movement.update();
        if (this.movement.isGrounded()){
            this.animator.update();
        }
    }

    //this method will draw player
    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(
            this.animator.getImage(),
            this.position.x,
            this.position.y,
            this.collider.w,
            this.collider.h
        );
        ctx.closePath();
    }
    // this will start jumping behaviour
    jump(){
        if (this.movement.isGrounded()){
            this.movement.jump();
            this.animator.reset();
        }
    }

    // This will return true if the collider overlaps with one in the list of colliders

    overlapWithOthers(others){
        return this.collider.overlapsWithOthers(others);
    }

    static create(options,groundY){
        const position = new Point2d(options.startX, groundY);
        const collider = new Collider(position, options.width, options.height);
        const animator = Animator.create(options.playerSpeed,options.showTime,options.imageSources);
        const movement = new Movement(position, groundY, options.height, options.jumpPower,options.jumpHeight);
        return new Player(position, animator, movement, collider);
    }
}