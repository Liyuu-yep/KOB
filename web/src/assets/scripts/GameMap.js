import { AcGameObject } from "./AcgameObject";

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
    }

    start() {

    }

    updata() {
        this.render();
    }

    render() {

    }
}