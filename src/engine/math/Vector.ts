interface VectorAngleInterface {
    radians: number;
    degrees: number;
}

export class Vector {

    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    len() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    distance(other: Vector) {
        let dist = new Vector(this.x - other.x, this.y - other.y);
        return Math.abs(dist.len());
    }

    angle(): VectorAngleInterface {
        let angleInRadians: number = Math.atan2(this.y, this.x);
        let angleInDegrees: number = (angleInRadians / Math.PI) * 180.0;

        let result: VectorAngleInterface = {
            radians: angleInRadians,
            degrees: angleInDegrees
        };

        return result;
    }
}
