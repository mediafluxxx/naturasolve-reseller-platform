import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-4">NaturaSolve</h3>
            <p className="text-sm text-gray-600">
              Advanced drone solutions for scientific research and environmental monitoring.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/products?category=drone" className="hover:text-blue-600">Drones</Link></li>
              <li><Link href="/products?category=sensor" className="hover:text-blue-600">Sensors</Link></li>
              <li><Link href="/products?category=accessory" className="hover:text-blue-600">Accessories</Link></li>
              <li><Link href="/products?category=software" className="hover:text-blue-600">Software</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/reseller-program" className="hover:text-blue-600">Reseller Program</Link></li>
              <li><Link href="/fleet-services" className="hover:text-blue-600">Fleet Configuration</Link></li>
              <li><Link href="/support" className="hover:text-blue-600">Technical Support</Link></li>
              <li><Link href="/training" className="hover:text-blue-600">Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} NaturaSolve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
