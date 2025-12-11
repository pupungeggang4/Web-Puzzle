window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    AssetLoader.loadAssets(() => {
        console.log('Assets Loaded!')
    })
}

function errorHandle() {

}

function rightClick() {
    return false
}