class Player extends Entity {
    constructor() {
        super()
        this.moving = false
        this.facing = 'right'
        this.direction = 'right'
        this.movedDistance = 0
        this.destination = new Vec2(0, 0)
        this.speed = 320
    }

    render(game) {
        let ctx = game.ctx
        let camera = game.level.camera

        game.ctx.save()
        game.ctx.translate(camera.x, camera.y)
        game.ctx.fillRect(this.rect.pos.x, this.rect.pos.y, this.rect.size.x, this.rect.size.y)
        game.ctx.restore()
    }

    move(game) {
        if (this.moving === false) {
            let keyPressed = false
            if (game.keyPressed['left'] == true) {
                this.direction = 'left'
                this.destination = new Vec2(this.rect.pos.x - 48, this.rect.pos.y)
                keyPressed = true
            } else if (game.keyPressed['right'] === true) {
                this.direction = 'right'
                this.destination = new Vec2(this.rect.pos.x + 48, this.rect.pos.y)
                keyPressed = true
            } else if (game.keyPressed['up'] === true) {
                this.direction = 'up'
                this.destination = new Vec2(this.rect.pos.x, this.rect.pos.y - 48)
                keyPressed = true
            } else if (game.keyPressed['down'] === true) {
                this.direction = 'down'
                this.destination = new Vec2(this.rect.pos.x, this.rect.pos.y + 48)
                keyPressed = true
            }
            if (keyPressed === true) {
                this.moving = true
                this.movedDistance = 0
            }
        } else {
            if (this.direction === 'left') {
                this.rect.pos.x -= this.speed * game.delta / 1000
                this.movedDistance += this.speed * game.delta / 1000
            } else if (this.direction === 'right') {
                this.rect.pos.x += this.speed * game.delta / 1000
                this.movedDistance += this.speed * game.delta / 1000
            } else if (this.direction === 'up') {
                this.rect.pos.y -= this.speed * game.delta / 1000
                this.movedDistance += this.speed * game.delta / 1000
            } else if (this.direction === 'down') {
                this.rect.pos.y += this.speed * game.delta / 1000
                this.movedDistance += this.speed * game.delta / 1000
            }

            if (this.movedDistance > 48) {
                this.moving = false
                this.rect.pos.x = this.destination.x
                this.rect.pos.y = this.destination.y
            }
        }
    }
}
