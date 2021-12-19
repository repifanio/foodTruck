const Base = require('./base/base')

class Item extends Base{
    constructor({id, name, image, linkQrCode, price, isActive}){
        super({id, name, image, linkQrCode})

        this.price = price
        this.isActive = isActive
    }
}

module.exports = Item