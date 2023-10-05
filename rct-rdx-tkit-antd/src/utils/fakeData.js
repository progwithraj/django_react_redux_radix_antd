import { faker } from '@faker-js/faker'

//creates random user
export function createRandomUser() {
    return {
        userId: faker.random.alphaNumeric(6),
        username: faker.name.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}