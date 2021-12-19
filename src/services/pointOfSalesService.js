import BaseReposity from "../repository/base/baseRepository"

class PointOfSalesService {
    constructor({pointOfSales}){
        this.pointOfSales = new BaseReposity({file: pointOfSales})
    }

    teste() {
        return this.pointOfSales.find()
    }
}

module.exports = PointOfSalesService