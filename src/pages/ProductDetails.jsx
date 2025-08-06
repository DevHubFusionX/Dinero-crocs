import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MessageCircle, ArrowLeft } from 'lucide-react'
import { products } from '../data/products'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="text-blue-600 hover:underline">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const whatsappMessage = `Hi! I'm interested in ordering:
Product: ${product.name}
Price: ₦${product.price.toLocaleString()}
${selectedColor ? `Color: ${selectedColor}` : ''}
${selectedSize ? `Size: ${selectedSize}` : ''}

Please let me know about availability and delivery.`

  const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link 
        to="/shop" 
        className="flex items-center gap-2 text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded border-2 overflow-hidden ${
                  selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">₦{product.price.toLocaleString()}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Color Selection */}
          {product.colors.length > 1 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded transition ${
                      selectedColor === color 
                        ? 'border-blue-600 bg-blue-50 text-blue-600' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded transition ${
                    selectedSize === size 
                      ? 'border-blue-600 bg-blue-50 text-blue-600' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Order Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2 text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Order via WhatsApp
          </a>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              💡 <strong>Quick Order:</strong> Click the WhatsApp button above with your preferred color and size selected for faster service!
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">₦{relatedProduct.price.toLocaleString()}</p>
                  <Link 
                    to={`/product/${relatedProduct.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetails