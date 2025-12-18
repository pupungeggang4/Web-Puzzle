class Player extends Entity {
    constructor() {
        super()
    }

    render(game) {
        let ctx = game.ctx
        let camera = game.level.camera

        game.ctx.save()
        game.ctx.translate(camera.x, camera.y)
        game.ctx.fillRect(this.rect.pos.x, this.rect.pos.y, this.rect.size.x, this.rect.size.y)
        game.ctx.restore()
    }
}