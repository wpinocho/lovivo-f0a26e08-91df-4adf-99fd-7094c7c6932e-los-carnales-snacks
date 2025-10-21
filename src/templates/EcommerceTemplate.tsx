import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useState } from 'react'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const header = (
    <div className={`py-4 bg-white border-b-2 border-chile-200 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="font-carnales font-black text-3xl text-gradient-fire">
                Los CARNALES
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
              >
                Recipes
              </Link>
              <Link 
                to="/contact" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-chile-100 hover:text-chile-600"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-chile-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-chile-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link 
                to="/contact" 
                className="text-carbon-700 hover:text-chile-600 font-bold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-4xl font-carnales font-black text-carbon-900">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-carbon-900 via-chile-900 to-carbon-900 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-carnales font-black text-4xl text-gradient-fire mb-4">
              Los CARNALES
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Authentic Mexican snacks with attitude. Bringing the bold flavors of Mexico straight to your door across the USA.
            </p>
            <div className="flex items-center space-x-4">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-carnales font-bold text-xl mb-4 text-corn-400">Quick Links</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-corn-400 transition-colors font-semibold"
              >
                Shop All
              </Link>
              <Link 
                to="/about" 
                className="block text-white/80 hover:text-corn-400 transition-colors font-semibold"
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/80 hover:text-corn-400 transition-colors font-semibold"
              >
                Recipes & Blog
              </Link>
              <Link 
                to="/contact" 
                className="block text-white/80 hover:text-corn-400 transition-colors font-semibold"
              >
                Contact / Wholesale
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-carnales font-bold text-xl mb-4 text-corn-400">Help</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-corn-400 transition-colors font-semibold">
                Shipping Info
              </a>
              <a href="#" className="block text-white/80 hover:text-corn-400 transition-colors font-semibold">
                Returns
              </a>
              <a href="#" className="block text-white/80 hover:text-corn-400 transition-colors font-semibold">
                FAQ
              </a>
              <a href="#" className="block text-white/80 hover:text-corn-400 transition-colors font-semibold">
                Track Order
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              &copy; 2024 Los Carnales. All rights reserved. Made with 🌶️ in Mexico.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-corn-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-corn-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}