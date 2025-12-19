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

        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 15; j++) {
                Render.strokeRectUI(ctx, [48 * j, 48 * i, 48, 48])
            }
        }
        ctx.restore()
    }
}
