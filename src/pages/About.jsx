import { Shield, Truck, Heart, MapPin } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Dinero Crocs</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted source for authentic Crocs, slides, and quality footwear in Nigeria. 
          Based in Kaduna, serving customers nationwide with premium products and exceptional service.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Dinero Crocs was founded with a simple mission: to provide Nigerians with access to 
              authentic, comfortable, and stylish Crocs and slides at affordable prices.
            </p>
            <p className="text-gray-600 mb-4">
              Starting from Kaduna, we've grown to serve customers across Nigeria, building a 
              reputation for quality products, fast delivery, and excellent customer service.
            </p>
            <p className="text-gray-600">
              Every pair we sell is carefully selected to ensure authenticity and comfort, 
              because we believe everyone deserves quality footwear that lasts.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Based in Kaduna</h3>
            </div>
            <p className="mb-4">
              Proudly serving from the heart of Nigeria, with nationwide delivery to bring 
              quality footwear to your doorstep.
            </p>
            <div className="text-yellow-300 font-semibold">
              🇳🇬 Nationwide Delivery Available
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Authenticity</h3>
            <p className="text-gray-600">
              We guarantee 100% authentic products. Every item is sourced directly from 
              authorized distributors to ensure quality and authenticity.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery nationwide. Pay on delivery available for 
              Kaduna customers, with secure payment options for other locations.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Heart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We provide excellent customer service 
              and support to ensure you're happy with every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Dinero Crocs?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✅ 100% authentic products</li>
              <li>✅ Quality guarantee on all items</li>
              <li>✅ Careful product inspection before shipping</li>
              <li>✅ Hassle-free returns and exchanges</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-600">
              <li>📱 Easy WhatsApp ordering</li>
              <li>🚚 Nationwide delivery</li>
              <li>💳 Pay on delivery (Kaduna only)</li>
              <li>🕐 Quick response to inquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-blue-600 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Shop?</h2>
        <p className="mb-6">
          Browse our collection or contact us directly for personalized assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/shop" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Products
          </a>
          <a 
            href="https://wa.me/2348123456789?text=Hi! I'd like to know more about your products."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default About