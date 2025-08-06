import { useState } from 'react'
import { MessageCircle, Phone, MapPin, Clock, Instagram, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hi! Contact form submission:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Get in touch with us for any questions, orders, or support
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-gray-600 mb-2">
                  Our preferred method of communication for quick responses
                </p>
                <a 
                  href="https://wa.me/2348123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 font-semibold"
                >
                  +234 812 345 6789
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600 mb-2">
                  Call us for immediate assistance
                </p>
                <a 
                  href="tel:+2348123456789"
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  +234 812 345 6789
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">
                  Based in Kaduna, Nigeria<br />
                  Nationwide delivery available
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday: 9:00 AM - 8:00 PM<br />
                  Sunday: 12:00 PM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message via WhatsApp
            </button>
          </form>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              💡 <strong>Quick Tip:</strong> For faster response, contact us directly on WhatsApp using the button above!
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Do you deliver nationwide?</h3>
            <p className="text-gray-600">
              Yes! We deliver to all states in Nigeria. Pay on delivery is available for Kaduna customers only.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">How can I place an order?</h3>
            <p className="text-gray-600">
              You can order directly via WhatsApp by clicking the order buttons on product pages or contacting us directly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Are your products authentic?</h3>
            <p className="text-gray-600">
              Absolutely! We guarantee 100% authentic Crocs and slides sourced from authorized distributors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg mb-2">What's your return policy?</h3>
            <p className="text-gray-600">
              We offer hassle-free returns and exchanges within 7 days of delivery for defective or wrong items.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact