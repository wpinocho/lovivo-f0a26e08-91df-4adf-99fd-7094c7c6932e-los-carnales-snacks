import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Flame, Heart, Users, Award } from 'lucide-react'

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-chile-600 via-chile-500 to-corn-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-carnales font-black mb-6">
            Our Story
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-corn-100">
            From the streets of Mexico to your home in the USA
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-carbon-700 leading-relaxed mb-6">
              <strong className="text-chile-600">Los Carnales</strong> was born from a simple idea: bring the authentic, bold flavors of Mexican street food to snack lovers across the United States.
            </p>
            
            <p className="text-lg text-carbon-600 leading-relaxed mb-6">
              Growing up in Mexico, we spent our afternoons at the local tiendita, grabbing bags of spicy chicharrones and corn puffs. Those moments weren't just about the snacks—they were about community, flavor, and that unmistakable Mexican spirit.
            </p>

            <p className="text-lg text-carbon-600 leading-relaxed mb-6">
              When we moved to the USA, we noticed something was missing. The snacks here were good, but they lacked that <em>auténtico sabor mexicano</em>—that punch of chile, that perfect crunch, that street food attitude.
            </p>

            <p className="text-lg text-carbon-600 leading-relaxed mb-6">
              So we decided to change that. We partnered with traditional Mexican producers who've been perfecting their craft for generations, and brought their products to American shelves with a modern, bold twist.
            </p>

            <div className="bg-gradient-to-br from-corn-50 to-chile-50 p-8 rounded-2xl my-12 border-2 border-chile-200">
              <p className="text-2xl font-carnales font-bold text-chile-600 text-center mb-4">
                "Authentic Mexican flavor meets badass modern design"
              </p>
              <p className="text-center text-carbon-600">
                That's not just our tagline—it's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-corn-50 via-white to-chile-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-carnales font-black text-carbon-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-carbon-600 max-w-2xl mx-auto">
              Our values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-chile-400 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <Flame className="w-8 h-8 text-chile-600" />
              </div>
              <h3 className="text-xl font-carnales font-bold text-carbon-900 mb-3">
                Authenticity
              </h3>
              <p className="text-carbon-600">
                Real Mexican recipes, real ingredients, real flavor. No compromises.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-chile-400 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <Heart className="w-8 h-8 text-chile-600" />
              </div>
              <h3 className="text-xl font-carnales font-bold text-carbon-900 mb-3">
                Passion
              </h3>
              <p className="text-carbon-600">
                Made with love and Mexican pride in every single bag.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-chile-400 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <Users className="w-8 h-8 text-chile-600" />
              </div>
              <h3 className="text-xl font-carnales font-bold text-carbon-900 mb-3">
                Community
              </h3>
              <p className="text-carbon-600">
                Building a familia of snack lovers who appreciate bold flavors.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-chile-400 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <Award className="w-8 h-8 text-chile-600" />
              </div>
              <h3 className="text-xl font-carnales font-bold text-carbon-900 mb-3">
                Quality
              </h3>
              <p className="text-carbon-600">
                Premium ingredients and traditional methods for the best taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-chile-600 via-chile-500 to-corn-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-carnales font-black mb-6">
            Join the Familia
          </h2>
          <p className="text-xl mb-8">
            Experience authentic Mexican flavors delivered to your door
          </p>
          <a 
            href="/"
            className="inline-block bg-white text-chile-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-corn-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Shop Now 🌶️
          </a>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About