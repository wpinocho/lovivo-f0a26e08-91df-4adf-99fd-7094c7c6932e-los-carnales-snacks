import { Flame, Truck, Shield, Heart } from 'lucide-react'

export const FeaturesSection = () => {
  const features = [
    {
      icon: Flame,
      title: "Authentic Heat",
      description: "Real Mexican spices and flavors that pack a punch",
      color: "text-chile-500"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $30 across the USA",
      color: "text-corn-500"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium ingredients, no compromises",
      color: "text-chile-600"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Crafted with passion and Mexican pride",
      color: "text-chile-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-carnales font-black text-carbon-900 mb-4">
            Why Choose Los Carnales?
          </h2>
          <p className="text-xl text-carbon-600 max-w-2xl mx-auto">
            We bring the authentic taste of Mexico straight to your door
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-chile-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-carnales font-bold text-carbon-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-carbon-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}