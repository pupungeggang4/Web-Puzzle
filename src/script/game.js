class Game {
    constructor() {
        this.state = ''
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.keyPressed = {'left': false, 'right': false, 'up': false, 'down': false}
        this.keyMapping = {'left': 'a', 'right': 'd', 'up': 'w', 'down': 's'}

        this.level = new Level()

        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
    }

    run() {
        this.scene = new SceneTitle(this)
        this.framePrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePrevious = this.frameCurrent

        this.scene.loop(this)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.mouseUp(this, pos, button)
    }

    keyDown(event) {
        let key = event.key
        for (const k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = true
            }
        }
        this.scene.keyDown(this, key)
    }

    keyUp(event) {
        let key = event.key
        for (const k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = false
            }
        }
        this.scene.keyUp(this, key)
    }
}
