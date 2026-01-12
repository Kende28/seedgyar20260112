import 'dotenv/config'
import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

console.log(' Seeding...')

async function main() {
  for (let i = 0; i < 15; i++) {
    await prisma.dolgozok.create({
      data: {
        csaladnev: faker.person.lastName(),
        utonev: faker.person.firstName(),
        kor: faker.number.int({ min: 18, max: 65 }),
        nem: faker.person.gender(),
        munkaterulet: faker.person.jobArea(),
        otthon_dolgozik: faker.datatype.boolean()
      }
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

