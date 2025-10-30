import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { PetSelector } from '@/components/PetSelector'
import { CategoryCards } from '@/components/CategoryCards'
import { ValuesSection } from '@/components/ValuesSection'
import { CTASection } from '@/components/CTASection'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    loading,
    filteredProducts,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Pet Selector Section */}
      <section id="selector" className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <PetSelector />
        </div>
      </section>

      {/* Category Cards */}
      <CategoryCards />

      {/* Values Section */}
      <ValuesSection />

      {/* Products Section */}
      <section id="products-section" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
              Featured Products
            </span>
            <h2 className="text-4xl font-light mt-4 mb-4">Premium Selection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collection of premium pet nutrition and wellness products
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}