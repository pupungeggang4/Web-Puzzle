class ScenePuzzle {
    constructor(game) {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        let canvas = game.canvas
        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        Render.fillCanvas(canvas, ctx)
    }

    mouseUp(game, pos, button) {

    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}
