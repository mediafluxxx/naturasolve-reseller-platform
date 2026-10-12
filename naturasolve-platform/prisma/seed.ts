import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@naturasolve.com' },
    update: {},
    create: {
      email: 'admin@naturasolve.com',
      name: 'Admin User',
      passwordHash: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('✅ Created admin user:', admin.email)

  // Create sample products
  const products = [
    // Drones
    {
      name: 'SkyScout Pro X1',
      slug: 'skyscout-pro-x1',
      description: 'Professional-grade quadcopter designed for wildlife monitoring and ecological research. Features advanced thermal imaging and 60-minute flight time.',
      category: 'DRONE',
      price: 8999.99,
      compareAtPrice: 10999.99,
      stockQuantity: 15,
      sku: 'DRONE-SSX1-001',
      images: [],
      specifications: {
        flightTime: '60 minutes',
        maxRange: '10 km',
        camera: '4K RGB + Thermal',
        weight: '2.5 kg',
        maxSpeed: '65 km/h',
        windResistance: '45 km/h',
      },
      isFeatured: true,
    },
    {
      name: 'EcoMapper 5000',
      slug: 'ecomapper-5000',
      description: 'Specialized mapping drone for environmental surveys and agricultural research. Equipped with multispectral imaging capabilities.',
      category: 'DRONE',
      price: 12499.99,
      stockQuantity: 8,
      sku: 'DRONE-EM5000-001',
      images: [],
      specifications: {
        flightTime: '45 minutes',
        maxRange: '8 km',
        camera: 'Multispectral 5-band',
        weight: '3.2 kg',
        maxSpeed: '55 km/h',
        accuracy: '2 cm GSD',
      },
      isFeatured: true,
    },
    {
      name: 'AquaSurvey Mini',
      slug: 'aquasurvey-mini',
      description: 'Compact waterproof drone for coastal and freshwater research. IP67 rated with specialized water sampling capabilities.',
      category: 'DRONE',
      price: 6799.99,
      stockQuantity: 12,
      sku: 'DRONE-ASM-001',
      images: [],
      specifications: {
        flightTime: '40 minutes',
        maxRange: '6 km',
        camera: '4K RGB',
        weight: '1.8 kg',
        waterproofing: 'IP67',
        sampling: 'Integrated water sampler',
      },
    },
    // Sensors
    {
      name: 'ThermalView Pro',
      slug: 'thermalview-pro',
      description: 'High-resolution thermal imaging camera module for wildlife tracking and heat mapping applications.',
      category: 'SENSOR',
      price: 3499.99,
      stockQuantity: 25,
      sku: 'SENSOR-TVP-001',
      images: [],
      specifications: {
        resolution: '640x512',
        thermalSensitivity: '0.04°C',
        frameRate: '30 Hz',
        spectralRange: '7.5-13.5 μm',
        weight: '320g',
      },
      isFeatured: true,
    },
    {
      name: 'MultiSpec Sensor Array',
      slug: 'multispec-sensor-array',
      description: '5-band multispectral sensor for vegetation analysis and crop health monitoring.',
      category: 'SENSOR',
      price: 4299.99,
      stockQuantity: 18,
      sku: 'SENSOR-MSA-001',
      images: [],
      specifications: {
        bands: '5 (Blue, Green, Red, Red Edge, NIR)',
        resolution: '3.2 MP per band',
        accuracy: '± 3%',
        weight: '285g',
      },
    },
    {
      name: 'AirQuality Monitor Plus',
      slug: 'airquality-monitor-plus',
      description: 'Comprehensive air quality sensor package measuring PM2.5, PM10, NO2, O3, and VOCs.',
      category: 'SENSOR',
      price: 2799.99,
      stockQuantity: 30,
      sku: 'SENSOR-AQM-001',
      images: [],
      specifications: {
        measurements: 'PM2.5, PM10, NO2, O3, CO2, VOC',
        accuracy: '± 5%',
        sampling: 'Real-time logging',
        weight: '195g',
      },
    },
    // Accessories
    {
      name: 'Extended Battery Pack',
      slug: 'extended-battery-pack',
      description: 'High-capacity lithium polymer battery extending flight time by 50%.',
      category: 'ACCESSORY',
      price: 599.99,
      stockQuantity: 45,
      sku: 'ACC-EBP-001',
      images: [],
      specifications: {
        capacity: '8000 mAh',
        voltage: '22.8V',
        weight: '680g',
        chargingTime: '90 minutes',
      },
    },
    {
      name: 'Professional Landing Pad',
      slug: 'professional-landing-pad',
      description: 'Weatherproof landing pad with integrated GPS positioning and LED markers.',
      category: 'ACCESSORY',
      price: 249.99,
      stockQuantity: 60,
      sku: 'ACC-PLP-001',
      images: [],
      specifications: {
        size: '1.2m diameter',
        material: 'Reinforced nylon',
        weight: '1.2 kg',
        features: 'GPS, LED markers, reflective surface',
      },
    },
    // Software
    {
      name: 'DataFlow Analysis Suite',
      slug: 'dataflow-analysis-suite',
      description: 'Professional data processing and analysis software for drone-collected scientific data.',
      category: 'SOFTWARE',
      price: 1999.99,
      stockQuantity: 999,
      sku: 'SOFT-DAS-001',
      images: [],
      specifications: {
        license: 'Annual subscription',
        users: 'Up to 5 concurrent',
        features: 'AI processing, 3D mapping, Report generation',
        support: 'Priority technical support',
      },
    },
    // Services
    {
      name: 'Fleet Setup & Training',
      slug: 'fleet-setup-training',
      description: 'Comprehensive onsite setup and training service for research teams.',
      category: 'SERVICE',
      price: 2499.99,
      stockQuantity: 999,
      sku: 'SRV-FST-001',
      images: [],
      specifications: {
        duration: '3 days onsite',
        includes: 'Setup, pilot training, data processing workshop',
        team: 'Up to 10 participants',
        materials: 'Training manuals included',
      },
    },
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
    console.log(`✅ Created product: ${product.name}`)
  }

  console.log('🎉 Seeding complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
