class Movement{
    constructor(position,groundY,height,jumpPower,jumpHeight,gravity) {
        this.position = position;
        this.groundY = groundY;
        this.height = height;
        this.jumpPower = jumpPower;
        this.jumpHeight = jumpHeight;
        this.gravity = gravity;
    }
    // This method will update player movement
    update(){

        // If the player jumping move the player object up

        if(this.isJumping){
            this.position.add(0,-this.jumpPower);
        }

        // If the player has reached the maximum jump height set isJumping attributes to false

        if(this.position.y <= this.groundY - this.jumpHeight){
            this.isJumping = false;
        }

        // This will make sure player will move to down

        if (!this.isJumping && !this.isGrounded()){
            this.position.add(0,this.gravity);
        }

        // This will make sure player will stay the ground level

        if (this.position.y >= this.groundY - this.height){
            this.position.y = this.groundY - this.height;
        }
    }
    jump(){
        if(this.isGrounded()){
            this.isJumping = true;
        }
    }

    // This will make sure to returns the player isGrounded true

    isGrounded(){
        return this.position.y == this.groundY - this.height;
    }
}