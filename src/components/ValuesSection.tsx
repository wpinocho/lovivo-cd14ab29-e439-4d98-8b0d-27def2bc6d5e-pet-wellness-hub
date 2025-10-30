import { Heart, Leaf, Award, Shield } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Made with Care',
    description: 'Every ingredient chosen with your pet\'s health in mind'
  },
  {
    icon: Leaf,
    title: 'Natural Ingredients',
    description: 'Sustainably sourced, whole food nutrition'
  },
  {
    icon: Award,
    title: 'Vet Approved',
    description: 'Formulated with veterinary nutritionists'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous testing for safety and purity'
  }
]

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
            Our Promise
          </span>
          <h2 className="text-4xl font-light mt-4">Wellness First</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}