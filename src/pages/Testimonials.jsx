import { Star, MessageCircle, Twitter } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amina Hassan",
      location: "Lagos",
      rating: 5,
      text: "Amazing quality Crocs! Delivered exactly as promised. The comfort is unmatched and they're definitely authentic. Will order again!",
      product: "Classic Echo Crocs",
      platform: "WhatsApp"
    },
    {
      id: 2,
      name: "David Okafor",
      location: "Abuja",
      rating: 5,
      text: "Fast delivery and excellent customer service. The slides are perfect for my daily use. Highly recommend Dinero Crocs!",
      product: "Premium Slides",
      platform: "Twitter"
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      location: "Kaduna",
      rating: 5,
      text: "Local delivery was super quick! Pay on delivery made it so convenient. The Crocs are exactly what I wanted. Thank you!",
      product: "Splash Crocs",
      platform: "WhatsApp"
    },
    {
      id: 4,
      name: "Emmanuel Eze",
      location: "Port Harcourt",
      rating: 5,
      text: "Skeptical about ordering online but Dinero Crocs exceeded my expectations. Authentic products and professional service.",
      product: "Sport Slides",
      platform: "Twitter"
    },
    {
      id: 5,
      name: "Khadijah Ibrahim",
      location: "Kano",
      rating: 5,
      text: "Love my new Crocs! Perfect fit and the color is exactly as shown. Delivery was faster than expected. 5 stars!",
      product: "Classic Echo Crocs",
      platform: "WhatsApp"
    },
    {
      id: 6,
      name: "Michael Adebayo",
      location: "Ibadan",
      rating: 5,
      text: "Great experience from start to finish. WhatsApp ordering was so easy and the product quality is top-notch!",
      product: "Premium Slides",
      platform: "WhatsApp"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "1000+", label: "Products Sold" },
    { number: "36", label: "States Delivered" },
    { number: "4.9/5", label: "Average Rating" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
        <p className="text-xl text-gray-600">
          See what our customers are saying about their Dinero Crocs experience
        </p>
      </div>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  {testimonial.platform === 'WhatsApp' ? (
                    <MessageCircle className="h-4 w-4 mr-1" />
                  ) : (
                    <Twitter className="h-4 w-4 mr-1" />
                  )}
                  {testimonial.platform}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
                <div className="text-sm text-blue-600 mt-1">
                  Purchased: {testimonial.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Customers Trust Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold text-lg mb-2">100% Authentic</h3>
            <p className="text-gray-600">
              Every product is guaranteed authentic with quality assurance
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick nationwide delivery with tracking and updates
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-semibold text-lg mb-2">Great Support</h3>
            <p className="text-gray-600">
              Responsive customer service via WhatsApp and phone
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Join Our Happy Customers</h2>
        <p className="mb-6">
          Experience the quality and service that our customers love
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/shop" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
          <a 
            href="https://wa.me/2348123456789?text=Hi! I saw the great reviews and I'm interested in your products."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Order via WhatsApp
          </a>
        </div>
      </section>

      {/* Review Submission */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
        <p className="text-gray-600 mb-6">
          Purchased from us? We'd love to hear about your experience!
        </p>
        <a 
          href="https://wa.me/2348123456789?text=Hi! I'd like to share my review of the product I purchased."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Your Review
        </a>
      </section>
    </div>
  )
}

export default Testimonials