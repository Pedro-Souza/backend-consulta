import bcrypt from 'bcrypt'
import prisma from '@/config/database'

async function main() {
  console.log('🌱 Starting database seed...')

  // Create sample users
  const hashedPassword = await bcrypt.hash('password123', 10)

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })




