const Base = require('./base/base')

class User extends Base {
    constructor({id, name, image, linkQrCode, password, isActive}){
        super({id, name, image, linkQrCode})

        this.password = password
        this.isActive = isActive
    }
}

module.exports = User