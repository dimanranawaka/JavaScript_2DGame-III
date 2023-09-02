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
            this.movement.getImage(),
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
        return this.collider.overlapWithOthers(others);
    }

    static create(playerOptions,groundY){
        const position = new Point2d(playerOptions.startX, groundY);
        const collider = new Collider(position, playerOptions.width, playerOptions.height);
        const animator = Animator.create(playerOptions.playerSpeed,playerOptions.showTime,playerOptions.imageSources);
        const movement = new Movement(position, groundY, playerOptions.height, playerOptions.jumpPower,playerOptions.jumpHeight);
        return new Player(position, animator, movement, collider);
    }
}