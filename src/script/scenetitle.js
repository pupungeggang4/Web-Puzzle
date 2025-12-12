class SceneTitle {
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

        Render.fillTextUI(ctx, "Puzzle Game", UI.title.textTitle)
        Render.strokeRectUI(ctx, UI.title.buttonStart)
        Render.strokeRectUI(ctx, UI.title.buttonAchievement)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = new ScenePuzzle(game)
            } else if (Util.pointInsideRectUI(pos, UI.title.buttonAchievement)) {
                game.scene = new SceneAchievement(game)
            }
        }
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {
        
    }
}