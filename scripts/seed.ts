import { seedInitialData } from '../src/lib/seed-data'

async function main() {
  try {
    await seedInitialData()
    console.log('🎉 Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('💥 Error seeding database:', error)
    process.exit(1)
  }
}

main()
