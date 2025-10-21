import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"
import { Flame, ShoppingCart } from "lucide-react"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-2 border-gray-200 hover:border-chile-400 transition-all duration-300 overflow-hidden group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gradient-to-br from-corn-100 via-white to-chile-100 overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Flame className="w-16 h-16 text-chile-300" />
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-chile-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      -{logic.discountPercentage}% OFF
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-corn-500 text-carbon-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      HOT
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-carbon-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            </Link>

            <div className="p-4 space-y-3">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="font-carnales font-bold text-lg text-carbon-900 line-clamp-2 group-hover:text-chile-600 transition-colors">
                  {logic.product.title}
                </h3>
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-bold text-carbon-700 mb-1 uppercase tracking-wide">
                        {opt.name}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-8 w-8 rounded-full border-2 transition-all ${
                                  isSelected ? 'border-chile-600 scale-110' : 'border-gray-300'
                                }`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border-2 rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                                isSelected 
                                  ? 'border-chile-600 bg-chile-600 text-white' 
                                  : 'border-gray-300 bg-white text-carbon-700 hover:border-chile-400'
                              }`}
                              aria-pressed={isSelected}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-col">
                  <span className="font-carnales font-black text-2xl text-chile-600">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-carbon-400 text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="bg-chile-600 hover:bg-chile-700 text-white font-bold rounded-full px-6 disabled:opacity-50 disabled:cursor-not-allowed hover-fire group"
                >
                  {logic.inStock ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-fire" />
                      Add
                    </>
                  ) : (
                    'Sold Out'
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}