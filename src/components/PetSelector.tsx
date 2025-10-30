import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dog, Cat } from 'lucide-react'

export const PetSelector = () => {
  const [petType, setPetType] = useState<'dog' | 'cat' | null>(null)
  const [age, setAge] = useState<string>('')
  const [breed, setBreed] = useState<string>('')

  const dogBreeds = ['Labrador', 'Golden Retriever', 'German Shepherd', 'Bulldog', 'Poodle', 'Beagle', 'Other']
  const catBreeds = ['Persian', 'Maine Coon', 'Siamese', 'Ragdoll', 'British Shorthair', 'Bengal', 'Other']

  const handleFindProducts = () => {
    console.log('Finding products for:', { petType, age, breed })
    // Scroll to products section
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-light mb-2">Find Perfect Nutrition</h3>
          <p className="text-muted-foreground text-sm">Personalized recommendations for your companion</p>
        </div>

        {/* Pet Type Selection */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPetType('dog')}
            className={`p-6 rounded-lg border-2 transition-all ${
              petType === 'dog'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <Dog className={`h-12 w-12 mx-auto mb-3 ${petType === 'dog' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className="block text-sm font-medium">Dog</span>
          </button>
          <button
            onClick={() => setPetType('cat')}
            className={`p-6 rounded-lg border-2 transition-all ${
              petType === 'cat'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <Cat className={`h-12 w-12 mx-auto mb-3 ${petType === 'cat' ? 'text-primary' : 'text-muted-foreground'}`} />
            <span className="block text-sm font-medium">Cat</span>
          </button>
        </div>

        {/* Age Selection */}
        {petType && (
          <div className="space-y-2 animate-fade-in">
            <label className="text-sm font-medium">Age Range</label>
            <Select value={age} onValueChange={setAge}>
              <SelectTrigger>
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="puppy-kitten">Puppy / Kitten (0-1 year)</SelectItem>
                <SelectItem value="adult">Adult (1-7 years)</SelectItem>
                <SelectItem value="senior">Senior (7+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Breed Selection */}
        {petType && age && (
          <div className="space-y-2 animate-fade-in">
            <label className="text-sm font-medium">Breed</label>
            <Select value={breed} onValueChange={setBreed}>
              <SelectTrigger>
                <SelectValue placeholder="Select breed" />
              </SelectTrigger>
              <SelectContent>
                {(petType === 'dog' ? dogBreeds : catBreeds).map((breedOption) => (
                  <SelectItem key={breedOption} value={breedOption.toLowerCase()}>
                    {breedOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Submit Button */}
        {petType && age && breed && (
          <Button 
            onClick={handleFindProducts}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in"
            size="lg"
          >
            Find Recommended Products
          </Button>
        )}
      </div>
    </Card>
  )
}