import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

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

  const header = (
    <div className={`py-4 bg-background/95 backdrop-blur-sm ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link 
                to="/" 
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-light"
              >
                Home
              </Link>
              <a 
                href="#products-section"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-light"
              >
                Products
              </a>
              <Link 
                to="/blog" 
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-light"
              >
                Blog
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
                className="relative"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-light text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-primary text-primary-foreground py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <BrandLogoLeft />
            </div>
            <p className="text-primary-foreground/70 text-sm font-light">
              Premium pet wellness and nutrition
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-4 text-primary-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-light"
              >
                Home
              </Link>
              <a 
                href="#products-section"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-light"
              >
                Products
              </a>
              <Link 
                to="/blog" 
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-light"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4 text-primary-foreground">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70 text-sm font-light">
          <p>&copy; 2024 Pet Wellness Store. All rights reserved.</p>
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