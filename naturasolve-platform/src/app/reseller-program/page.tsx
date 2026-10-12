import Link from "next/link"
import { Check, TrendingUp, Users, Package, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResellerProgramPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Authorized Service Organization Program
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Partner with NaturaSolve to deliver cutting-edge drone technology to research
              institutions, universities, and environmental organizations worldwide.
            </p>
            <Link href="/auth/signup?type=reseller">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                Apply for Reseller Status
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Competitive Margins</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>20-35% discount on all products</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Volume-based tier pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exclusive seasonal promotions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Direct account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority technical support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quarterly business reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Marketing Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Co-branded marketing materials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lead generation support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Demo units available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HeadphonesIcon className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Training & Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Product certification programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular webinars and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sales enablement resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible ordering terms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Drop shipping available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time stock visibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Protected territories available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Referral commission program</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Early access to new products</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Partnership Tiers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our tiered program rewards growth with increasing benefits and discounts
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Silver Partner</CardTitle>
                <CardDescription className="text-lg mt-2">Getting Started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600">20%</div>
                  <p className="text-gray-600">Discount</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>$0 - $50K annual volume</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Basic marketing materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-600 border-2">
              <CardHeader className="text-center bg-green-50">
                <CardTitle className="text-2xl">Gold Partner</CardTitle>
                <CardDescription className="text-lg mt-2">Most Popular</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600">28%</div>
                  <p className="text-gray-600">Discount</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>$50K - $200K annual volume</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Co-branded materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Platinum Partner</CardTitle>
                <CardDescription className="text-lg mt-2">Enterprise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600">35%</div>
                  <p className="text-gray-600">Discount</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>$200K+ annual volume</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Protected territory</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Program Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Business Registration</h3>
                <p className="text-gray-600">Valid business license and tax ID required</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Technical Expertise</h3>
                <p className="text-gray-600">Experience in scientific instrumentation or drone technology preferred</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Market Focus</h3>
                <p className="text-gray-600">Serve research institutions, universities, or environmental organizations</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Training Commitment</h3>
                <p className="text-gray-600">Complete product certification within 30 days of approval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join our network of authorized resellers and start growing your business with NaturaSolve today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup?type=reseller">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
