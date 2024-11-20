import { faker } from "@faker-js/faker"

const get = _ => ({
    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    mail: faker.internet.email(),
    celular: faker.number.int({ min: 1000000000, max: 9999999999 })

})

export default {
    get
}