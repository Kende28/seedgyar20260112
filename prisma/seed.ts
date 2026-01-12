import 'dotenv/config'
import { defineConfig, env } from "prisma/config";
import {faker} from "@faker-js/faker"
import { PrismaClient } from "generated/prisma/client" 
import dotenv from 'dotenv'
dotenv.config()
console.log('Seeding...')
const prisma = new PrismaClient()
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts"
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});

async function main() {
    for (let i = 0; i < 15; i++) {
      await prisma.$transaction(async tx => {
      await tx.dolgozok.create({
        data: {
          csaladnev: faker.person.lastName(),
          utonev: faker.person.firstName(),
          kor: faker.number.int({
            min: 18,
            max: 65
          }),
          nem: faker.person.gender(),
          munkaterulet: faker.person.jobArea(),
          otthon_dolgozik: faker.datatype.boolean()
        }
    })
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
