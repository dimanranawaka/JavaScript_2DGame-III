class  Spawner{
    constructor(obstacles, maxActive, speed, startX, minLength , maxLength) {
        this.obstacles = obstacles;
        this.maxActive = maxActive;
        this.speed = speed;
        this.startX = startX;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.activeObstacles = [];
        this.lastObstacle = null;
    }
    // This method will draw active obstacles
    draw(ctx){
        for (let i = 0; i < this.activeObstacles.length; i++) {
            this.activeObstacles[i].draw(ctx);
        }
    }
    // This will update the spawn behaviour
    update(){
        // Move active obstacles , and remove them from the active list if they are out of the sight
        for (let i = this.activeObstacles.length - 1; i > -1; i--) {
            this.activeObstacles[i].position.add(-this.speed, 0);

            if (this.activeObstacles[i].position.x < 0)
                this.activeObstacles.splice(i,1);

        }
        this.trySpawn();
    }

    trySpawn(){

    // Don't allow any spawns if the number of active obstacles is greater than or equal to the value of maxActive
        if (this.activeObstacles.length >= this.maxActive)
            return;


    // Don't allow any spawns if the last obstacle is not far enough from spawn position
        if (this.lastObstacle !=null && this.lastObstacle.position.x > this.startX - this.nextSpawnLength)
            return;

    // Get the inactive obstacles and continue if any were found
        const inactiveObstacles = this.getInactiveObstacles();
        if (inactiveObstacles.length == 0)
            return;

    // Get a random obstacle and spawn it to the scene
        const randomIndex = Math.floor(Math.random() * inactiveObstacles.length);
        this.spawn(inactiveObstacles[randomIndex]);
    }

    // A method that can be used to spawn an obstacle to the scene
    spawn(obstacle){

        // Set it as the last spawned obstacle
        this.lastObstacle = obstacle;

        // Move it to the start position
        this.lastObstacle.position.x = this.startX;

        // Add it to list of active obstacles
        this.activeObstacles.push(obstacle);

        // Calculate a new spawn length
        this.nextSpawnLength = Math.floor(Math.random() * this.maxLength + this.minLength);

    }

    // A method that can be used to get a list of inactive obstacles.
    getInactiveObstacles(){

        const inactiveObstacles = [];

        for (let i = 0; i < this.obstacles.length; i++) {
            if (this.obstacles[i].position.x < 0 || this.obstacles[i].x > this.startX)
                inactiveObstacles.push(this.obstacles[i]);

        }
        return inactiveObstacles;
    }

    // A method that can be used to create a spawner by a passing an object specifying spawn details
    static create(spawnerOptions, startX, groundY){
        for (let i =0; i < spawnerOptions.obstacles.length; i++){
            spawnerOptions.obstacles[i].position.x = -1;
            spawnerOptions.obstacles[i].position.y = groundY - spawnerOptions.obstacles[i].h;
        }


        return new Spawner(
            spawnerOptions.obstacles,
            spawnerOptions.maxActive,
            spawnerOptions.speed,
            startX,
            spawnerOptions.minLength,
            spawnerOptions.minLength);
    }
}