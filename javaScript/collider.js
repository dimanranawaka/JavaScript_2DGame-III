class Collider{
    constructor(position, w, h) {
        this.position = position; // This attribute represents the location of colliding object
        this.h = h; // height of the collider
        this.w = w; // width of the collider
    }

    /** this method  can be used to check if the collider overlaps with another collider */

    overlaps(other){
        return this.position.x < other.position.x + other.w
        && this.position.x + this.w > other.position.x
        && this.position.y < other.position.y + other.h
        && this.position.y + this.h > other.position.y;
    }

    /** this method can be used returns true if the collider overlaps with one in the list of colliders */

    overlapsWithOthers(others) {
        for (let i = 0; i < others.length; i++) {
            if (this.overlaps(others[i])) return true;
        }
        return false;
    }

}