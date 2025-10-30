export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&h=1200&fit=crop"
          alt="Pet wellness"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-light">
                  Premium Pet Wellness
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
                Nourish
                <br />
                <span className="text-muted-foreground">with Purpose</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 font-light">
                Thoughtfully crafted nutrition and supplements for the well-being of your cherished companion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#selector"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md text-sm font-medium"
              >
                Find Your Formula
              </a>
              <a
                href="#products-section"
                className="inline-flex items-center justify-center px-8 py-4 border border-border hover:bg-accent transition-colors rounded-md text-sm font-medium"
              >
                Explore Products
              </a>
            </div>
          </div>

          {/* Right Content - Featured Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=800&fit=crop"
                alt="Happy dog"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}