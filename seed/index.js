const faker = require('faker')

const PointOfSale = require('../src/entities/pointOfSale')
const Catalog = require('../src/entities/catalog')
const Items = require('../src/entities/items')
const Order = require('../src/entities/orders')
const User = require('../src/entities/user')
const { fake } = require('faker')
const { join } = require('path')
const { writeFile } = require('fs/promises')
const senderDatabaseFolder = join(__dirname, '../', 'database')

const AMOUNT_ITENS = 5;

const pointOfSale = new PointOfSale({
    id: faker.datatype.uuid(),
    name: faker.name.jobTitle(),
    image: faker.image.imageUrl(),
    linkQrCode: faker.internet.url(),
    isOpen: faker.datatype.boolean(),
    idCatalog: []
})

const catalog = new Catalog({
    id: faker.datatype.uuid(),
    name: faker.name.jobTitle(),
    image: faker.image.imageUrl(),
    linkQrCode: faker.internet.url(),
    idItems: []
})
pointOfSale.idCatalog.push(catalog.id)

const items = []
for (let itens = 0; itens < AMOUNT_ITENS; itens++){
    const item = new Items({
        id: faker.datatype.uuid(),
        name: faker.name.jobTitle(),
        image: faker.image.imageUrl(),
        linkQrCode: faker.internet.url(),
        price: faker.datatype.float(),
        isActive: faker.datatype.boolean()
    })

    items.push(item)
    catalog.idItems.push(item.id)

}

const order = new Order({
    id: faker.datatype.uuid(),
    name: faker.name.jobTitle(),
    image: null,
    linkQrCode: faker.internet.url(),
    numberOfOrder: faker.datatype.number({max: 3000}),
    isIntegrated: faker.datatype.boolean(),
})

order.itemsOrder = {
    idItem: items[2].id,
    qtdItem: faker.datatype.number({max: 5})
}
order.totalAmount = (order.itemsOrder.qtdItem * items[2].price)

const user = new User({
    id: faker.datatype.uuid(),
    name: faker.name.jobTitle(),
    image: faker.image.imageUrl(),
    linkQrCode: faker.internet.url(),
    password: faker.datatype.hexaDecimal(),
    isActive: faker.datatype.boolean(),
});


const write = (filename, data) => writeFile(join(senderDatabaseFolder, filename), JSON.stringify(data))

;(async () => {
    await write('pointsOfSale.json', [pointOfSale])
    await write('catalog.json', [catalog])
    await write('items.json', items)
    await write('order.json', [order])
    await write('user.json', [user])
})()
