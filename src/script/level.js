class Level {
    constructor() {
        this.name = 'main'
        this.camera = new Vec2(0, 0)
        this.player = new Player()
    }

    render(game) {
        this.player.render(game)
    }
}