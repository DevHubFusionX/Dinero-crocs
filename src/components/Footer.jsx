import { MessageCircle, Phone, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dinero Crocs</h3>
            <p className="text-gray-300 mb-4">
              Premium Crocs and Slides delivered nationwide. Based in Kaduna, Nigeria.
            </p>
            <div className="text-sm text-gray-400">
              🇳🇬 Nationwide Delivery | ✅ Quality Guarantee | 📦 Pay on Delivery (Kaduna Only)
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/shop" className="block text-gray-300 hover:text-white transition">Shop</a>
              <a href="/about" className="block text-gray-300 hover:text-white transition">About Us</a>
              <a href="/testimonials" className="block text-gray-300 hover:text-white transition">Reviews</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/2348123456789" 
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:+2348123456789" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <Phone className="h-5 w-5" />
                <span>+234 812 345 6789</span>
              </a>
              <div className="flex space-x-4 mt-4">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-pink-400 cursor-pointer transition" />
                <Twitter className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dinero Crocs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer