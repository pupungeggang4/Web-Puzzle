window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game

function main() {
    AssetLoader.loadAssets(() => {
        console.log('Assets Loaded!')
        game = new Game()
        game.run()
    })
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        if (game.gameLoop != null) {
            cancelAnimationFrame(game.gameLoop)
        }
    }
}

function rightClick() {
    return false
}