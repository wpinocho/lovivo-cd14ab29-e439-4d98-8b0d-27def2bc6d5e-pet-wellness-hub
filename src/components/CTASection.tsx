import { Button } from '@/components/ui/button'

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent via-secondary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Begin Your Pet's
            <br />
            <span className="text-muted-foreground">Wellness Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of pet parents who trust us with their companion's nutrition and health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => {
                const selector = document.getElementById('selector')
                if (selector) {
                  selector.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get Personalized Recommendations
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              onClick={() => {
                const products = document.getElementById('products-section')
                if (products) {
                  products.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Shop All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}