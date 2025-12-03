import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function ProductDetails({ product, onClose }) {
  // ✅ Prevent body scroll when modal is open
  useEffect(() => {
    // Save current overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Disable scroll
    document.body.style.overflow = 'hidden';
    
    // Cleanup: restore scroll when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // ✅ Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!product) {
    return null; // Don't render anything if no product
  }

  // ✅ Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <section 
      className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-11/12 max-w-4xl h-5/6 max-h-screen bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* ✅ Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <CloseIcon className="w-6 h-6 cursor-pointer" />
        </button>

        {/* ✅ Scrollable content */}
        <div className="h-full overflow-y-auto p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="flex-1">
              <img 
                src={product.thumbnail || product.image} 
                alt={product.title || product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {/* Additional images if available */}
              {product.images && (
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {product.images.slice(0, 4).map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${product.title} ${index + 1}`}
                      className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title || product.name}
              </h1>
              
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                    -{Math.round(product.discountPercentage)}% OFF
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Stock status */}
              <p className={`font-semibold ${
                product.stock > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </p>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="text-gray-600">({product.rating}/5)</span>
                </div>
              )}

              {/* Category and Brand */}
              <div className="space-y-2">
                {product.category && (
                  <p><span className="font-semibold">Category:</span> {product.category}</p>
                )}
                {product.brand && (
                  <p><span className="font-semibold">Brand:</span> {product.brand}</p>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                <button 
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  ♡ Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}