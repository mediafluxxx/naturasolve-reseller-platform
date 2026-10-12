"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plane, Camera, Thermometer, Wind, Droplets, CheckCircle2 } from "lucide-react"

const USE_CASES = [
  {
    id: "wildlife",
    name: "Wildlife Monitoring",
    description: "Track animal populations and behavior",
    icon: Camera,
    requirements: {
      camera: "High-resolution thermal + RGB",
      range: "5-10 km",
      flightTime: "45-60 min",
      sensors: ["Thermal camera", "4K RGB camera", "GPS tracker"],
    },
  },
  {
    id: "climate",
    name: "Climate Research",
    description: "Atmospheric data collection",
    icon: Thermometer,
    requirements: {
      sensors: ["Temperature sensor", "Humidity sensor", "Barometric pressure", "CO2 monitor"],
      range: "3-5 km",
      flightTime: "30-45 min",
      altitude: "Up to 500m",
    },
  },
  {
    id: "water-quality",
    name: "Water Quality Analysis",
    description: "Monitor lakes, rivers, and coastal areas",
    icon: Droplets,
    requirements: {
      sensors: ["Multispectral camera", "Water sampling module", "GPS"],
      range: "5-8 km",
      flightTime: "40-50 min",
      weatherResistance: "IP67",
    },
  },
  {
    id: "air-quality",
    name: "Air Quality Monitoring",
    description: "Measure pollutants and particulates",
    icon: Wind,
    requirements: {
      sensors: ["PM2.5/PM10 sensor", "NO2/SO2 sensor", "Ozone monitor", "VOC detector"],
      range: "3-7 km",
      flightTime: "35-45 min",
      dataLogging: "Real-time + onboard storage",
    },
  },
]

export default function FleetServicesPage() {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    budget: "",
    additionalNotes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to save configuration
    console.log("Configuration submitted:", { ...formData, useCase: selectedUseCase })
    setSubmitted(true)
  }

  const selectedCase = USE_CASES.find((uc) => uc.id === selectedUseCase)

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Configuration Saved!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your interest. Our team will review your requirements and contact you within
            24-48 hours with a customized drone fleet proposal.
          </p>
          <Button onClick={() => window.location.reload()}>
            Configure Another Fleet
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Fleet Configuration Service</h1>
        <p className="text-gray-600 mb-8">
          Let us help you select the perfect drone configuration for your scientific research needs.
          Choose your use case and provide details for a customized recommendation.
        </p>

        {/* Step 1: Select Use Case */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Select Your Research Application</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {USE_CASES.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card
                  key={useCase.id}
                  className={`cursor-pointer transition-all ${
                    selectedUseCase === useCase.id
                      ? "border-blue-600 border-2 bg-blue-50"
                      : "hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedUseCase(useCase.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{useCase.name}</CardTitle>
                        <CardDescription>{useCase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Step 2: Requirements Display */}
        {selectedCase && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Recommended Specifications</h2>
            <Card>
              <CardHeader>
                <CardTitle>{selectedCase.name} Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(selectedCase.requirements).map(([key, value]) => (
                    <div key={key} className="flex items-start">
                      <div className="font-medium w-40 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </div>
                      <div className="text-gray-600">
                        {Array.isArray(value) ? (
                          <ul className="list-disc list-inside">
                            {value.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          value
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Contact Form */}
        {selectedCase && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Your Information</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Name</label>
                    <Input
                      required
                      placeholder="e.g., Amazon Rainforest Biodiversity Study"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Organization</label>
                    <Input
                      required
                      placeholder="e.g., University of California"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="your.email@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Budget (USD)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 50000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Notes</label>
                    <textarea
                      className="w-full min-h-24 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      placeholder="Any specific requirements or questions..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Configuration Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
