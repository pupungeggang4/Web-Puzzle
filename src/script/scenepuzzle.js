class ScenePuzzle {
    constructor(game) {
        game.menu = false
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

        game.level.render(game)

        if (game.menu === true) {
            Render.renderMenu(game)
        }

        Render.strokeRectUI(ctx, UI.puzzle.buttonMenu)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.puzzle.buttonMenu)) {
                    game.menu = true
                }
            } else {
                if (Util.pointInsideRectUI(pos, UI.puzzle.buttonMenu)) {
                    game.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonSave)) {

                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.scene = new SceneTitle(game)
                }
            }
        }
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}
