class ForeverRunnerGame{
    constructor(id,frameRate,groundOffset,playerOptions,spawnerOptions,difficulty) {

        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.frameRate = frameRate;
        this.groundY = this.canvas.height - groundOffset;
        this.playerOptions = playerOptions;
        this.spawnerOptions = spawnerOptions;
        this.difficulty = difficulty;
        this.initialize();

    }

    // This will initialize the game
    initialize() {

        this.background = new Background( 255, this.canvas.width , this.canvas.height);
        this.player = Player.create(playerOptions, this.groundY);
        this.spawner = Spawner.create(spawnerOptions, this.canvas.width, this.groundY);
        this.speed = 0;
        this.score = 0;
        this.gameOver = false;

    }

    // This will start the game
    start(){
        document.addEventListener('keydown', this.keydown.bind(this));
        setInterval(this.loop.bind(this), this.frameRate);
    }

    // This will execute the game's keydown events
    keydown(event){
        if (event.code == 'Space'){
            // If the game is ended , will restart the game
            if (this.gameOver){
                this.initialize();
            }else{
                // If not game ended , execute make the player jump
                this.player.jump();
            }
        }
    }

    // This will loop the game continuously
    loop(){

        // Clear the canvas for each loop
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        // Draw game objects
        this.background.draw(this.ctx);
        this.drawGround();
        this.drawScore();
        this.player.draw(this.ctx);
        this.spawner.draw(this.ctx);

        // If the game is ended

        if (this.gameOver){
            // Draw gameOver elements
            this.drawGameOver();
        }
        else{
            // If game is not over , execute game behaviour

            // Increase Game Difficulty

            this.increaseDifficulty();


            // Execute Update
            this.background.update();
            this.player.update();

            // Check the overlaps
            this.gameOver = this.player.overlapsWithOthers(this.spawner.activeObstacles);

            // Increase score
            this.score++;

        }
    }

    // This will increase game difficulty

    increaseDifficulty(){

        if (this.speed < this.difficulty.maxIncrease){
            this.speed += this.difficulty.speedIncrease;
            this.player.movement.jumpPower += this.difficulty.speedIncrease;
            this.player.movement.gravity += this.difficulty.speedIncrease;
            this.spawner.speed += this.difficulty.speedIncrease;
        }

    }

    // This will draw the gameOver message

    drawGameOver(){

        this.ctx.beginPath();
        this.ctx.fillText("GAMEOVER", this.canvas.width/2 , this.canvas.height/2);
        this.ctx.closePath();

    }

    // This will draw game score

    drawScore(){

        this.ctx.beginPath();
        this.ctx.fillText("Score :"+ this.score,10,20);
        this.ctx.closePath();

    }

    // This will draw Game ground

    drawGround(){

        this.ctx.beginPath();
        this.ctx.rect(0, this.groundY, this.canvas.width, 3);
        this.ctx.fill();
        this.ctx.closePath();

    }
}