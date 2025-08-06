import { Link } from 'react-router-dom'
import { MessageCircle, Truck, Shield, CreditCard } from 'lucide-react'
import { products } from '../data/products'

const Homepage = () => {
  const featuredProducts = products.slice(0, 4)

  const whatsappMessage = "Hi! I'm interested in your products from Dinero Crocs website."
  const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Premium Crocs & Slides</h1>
          <p className="text-xl mb-8">Authentic, Comfortable, Delivered Nationwide 🇳🇬</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp to Order
            </a>
          </div>
        </div>
      </section>

      {/* Promo Strip */}
      <section className="bg-yellow-400 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-center text-gray-800 font-semibold">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Nationwide Delivery 🇳🇬</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Quality Guarantee ✅</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span>Pay on Delivery (Kaduna Only)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">₦{product.price.toLocaleString()}</p>
                  <Link 
                    to={`/product/${product.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/shop"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dinero Crocs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% genuine Crocs and slides with quality guarantee</p>
            </div>
            <div className="text-center">
              <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Nationwide delivery with express shipping options</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">Order directly via WhatsApp for quick service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage