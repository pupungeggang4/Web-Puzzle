class SceneAchievement {
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

        Render.strokeRectUI(ctx, UI.achievement.buttonBack)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.achievement.buttonBack)) {
                game.scene = new SceneTitle(game)
            }
        }
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}