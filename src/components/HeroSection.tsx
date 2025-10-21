import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Flame, ShoppingBag } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-chile-600 via-chile-500 to-corn-500">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating snack images */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-24 h-24 bg-white/20 rounded-full blur-xl" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-32 h-32 bg-corn-400/30 rounded-full blur-xl" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-28 h-28 bg-white/20 rounded-full blur-xl" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-36 h-36 bg-chile-700/30 rounded-full blur-xl" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo/Brand name */}
          <div className="space-y-4">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-carnales font-black text-white drop-shadow-2xl tracking-tight">
              Los
            </h1>
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-carnales font-black text-white drop-shadow-2xl tracking-tight -mt-4">
              CARNALES
            </h1>
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              Authentic Mexican Flavor
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-corn-100 drop-shadow-lg">
              Meets Badass Modern Design
            </p>
          </div>

          {/* Fire icon animation */}
          <div className="flex justify-center">
            <Flame className="w-16 h-16 text-corn-300 animate-pulse" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-white text-chile-600 hover:bg-corn-100 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover-fire group"
              >
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:animate-fire" />
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-chile-600 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover-fire"
              >
                Our Story
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <p className="text-white/80 text-sm font-semibold">
              Scroll para ver más 🌶️
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}