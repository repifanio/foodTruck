const Base = require('./base/base')

class Orders extends Base{
    constructor({id, name, image, linkQrCode, numberOfOrder, totalAmount, isIntegrated, itemsOrder}){
        super({id, name, image, linkQrCode})

        this.numberOfOrder = numberOfOrder
        this.totalAmount = totalAmount
        this.isIntegrated = isIntegrated 
        this.itemsOrder = itemsOrder 
    }
}

module.exports = Orders