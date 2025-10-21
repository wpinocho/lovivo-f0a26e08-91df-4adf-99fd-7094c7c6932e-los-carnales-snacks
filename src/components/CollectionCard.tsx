import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'
import { ArrowRight, Flame } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-2 border-gray-200 hover:border-chile-400 overflow-hidden group transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-corn-100 via-chile-100 to-corn-200 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Flame className="w-20 h-20 text-chile-400" />
            </div>
          )}
          
          {collection.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-corn-500 text-carbon-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Flame className="w-3 h-3" />
                Featured
              </span>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-carnales font-black text-2xl text-carbon-900 mb-2 group-hover:text-chile-600 transition-colors">
              {collection.name}
            </h3>
            
            {collection.description && (
              <p className="text-carbon-600 text-sm line-clamp-2">
                {collection.description}
              </p>
            )}
          </div>
          
          <Button 
            onClick={() => onViewProducts(collection.id)}
            className="w-full bg-chile-600 hover:bg-chile-700 text-white font-bold rounded-full hover-fire group/btn"
          >
            Ver Productos
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}