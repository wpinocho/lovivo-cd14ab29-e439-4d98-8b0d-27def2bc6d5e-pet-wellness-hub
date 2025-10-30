import { Card, CardContent } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

interface Category {
  id: string
  name: string
  description: string
  image: string
  collectionId?: string
}

const categories: Category[] = [
  {
    id: 'dog-food',
    name: 'Premium Dog Food',
    description: 'Whole ingredient nutrition for canine vitality',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop'
  },
  {
    id: 'cat-food',
    name: 'Premium Cat Food',
    description: 'Species-appropriate feline nutrition',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop'
  },
  {
    id: 'supplements',
    name: 'Health Supplements',
    description: 'Science-backed wellness support',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop'
  }
]

export const CategoryCards = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
            Our Collections
          </span>
          <h2 className="text-4xl font-light mt-4 mb-4">Curated for Wellness</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each product is carefully selected to support your pet's health journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => {
                const productsSection = document.getElementById('products-section')
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}