import Link from "next/link"
import { ArrowRight, Microscope, Wind, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Advanced Drone Solutions for Scientific Research
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional-grade drones and fleet services designed for environmental monitoring,
              ecological research, and specialized scientific applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/fleet-services">
                <Button size="lg" variant="secondary">
                  Configure Fleet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tailored for Scientific Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Microscope className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Ecological Research</CardTitle>
                <CardDescription>
                  High-precision sensors and imaging systems for wildlife monitoring and habitat analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Wind className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Environmental Monitoring</CardTitle>
                <CardDescription>
                  Real-time air quality, temperature, and atmospheric data collection capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Agricultural Science</CardTitle>
                <CardDescription>
                  Advanced multispectral imaging for crop health assessment and precision agriculture
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Reseller Program CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-600 text-white rounded-2xl p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Reseller Program</h2>
              <p className="text-xl mb-8 text-blue-100">
                Partner with NaturaSolve to bring advanced drone technology to research institutions
                and environmental organizations. Enjoy exclusive pricing and dedicated support.
              </p>
              <Link href="/reseller-program">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  Learn More About the Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NaturaSolve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Research Projects Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Technical Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Drone Configurations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
