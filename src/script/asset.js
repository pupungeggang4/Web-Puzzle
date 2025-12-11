class Img {
    static loadPair = []
    static loadPairEntity = []
    static entity = {}
}

class Aud {
    static loadPair = []
}

class AssetLoader {
    static numLoaded = 0
    static loadAssets(callback) {
        let numAssets = Img.loadPair.length + Img.loadPairEntity.length + Aud.loadPair.length
        if (AssetLoader.numLoaded >= numAssets) {
            callback()
        }
        for (let i = 0; i < Img.loadPair.length; i++) {
            let pair = Img.loadPair[i]
            let img = new Image()
            img.src = pair[1]
            Img[pair[0]] = img
            img.addEventListener('load', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
            img.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
        }
        for (let i = 0; i < Img.loadPairEntity.length; i++) {
            let pair = Img.loadPair[i]
            let img = new Image()
            img.src = pair[1]
            Img.entity[pair[0]] = img
            img.addEventListener('load', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
            img.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
        }
        for (let i = 0; i < Aud.loadPair.length; i++) {
            let pair = Aud.loadPair[i]
            let aud = new Audio()
            aud.src = pair[1]
            Aud[pair[0]] = aud
            aud.addEventListener('canplaythrough', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
            aud.addEventListener('error', () => {
                AssetLoader.numLoaded += 1
                if (AssetLoader.numLoaded >= numAssets) {
                    callback()
                }
            })
        }
    }
}