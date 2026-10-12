import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { formatPrice } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Product, ProductCategory } from "@prisma/client"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
      ...(searchParams.category && { category: searchParams.category.toUpperCase() as ProductCategory }),
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const categories = [
    { value: 'DRONE', label: 'Drones' },
    { value: 'SENSOR', label: 'Sensors' },
    { value: 'ACCESSORY', label: 'Accessories' },
    { value: 'SOFTWARE', label: 'Software' },
    { value: 'SERVICE', label: 'Services' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-600 mb-6">
          Professional drone systems and accessories for scientific research
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Link href="/products">
            <Button variant={!searchParams.category ? "default" : "outline"} size="sm">
              All Products
            </Button>
          </Link>
          {categories.map((cat) => (
            <Link key={cat.value} href={`/products?category=${cat.value}`}>
              <Button
                variant={searchParams.category === cat.value ? "default" : "outline"}
                size="sm"
              >
                {cat.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">No products found in this category.</p>
          <p className="text-gray-500 mt-2">Check back soon for new arrivals!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <div className="aspect-video bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  {product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400">No image</span>
                  )}
                </div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
                  {product.compareAtPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {product.stockQuantity > 0 ? (
                    <span className="text-green-600">In Stock ({product.stockQuantity} available)</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href={`/products/${product.slug}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
                <Button disabled={product.stockQuantity === 0}>
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
