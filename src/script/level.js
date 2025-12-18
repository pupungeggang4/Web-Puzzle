class Level {
    constructor() {
        this.name = 'main'
        this.camera = new Vec2(0, 0)
        this.player = new Player()
    }

    render(game) {
        let ctx = game.ctx
        Render.strokeRectUI(ctx, UI.puzzle.area)
        ctx.save()
        ctx.translate(UI.puzzle.area[0], UI.puzzle.area[1])
        this.player.render(game)
        ctx.restore()
    }
}