const BaseReposity = require('../repository/base/baseRepository')

class PointOfSalesService {
    constructor({pointOfSales}){
        this.pointOfSales = new BaseReposity({file: pointOfSales})
    }

    // async loadCatalogByQrCode(){
    //     return null
    // }
}

module.exports = PointOfSalesService