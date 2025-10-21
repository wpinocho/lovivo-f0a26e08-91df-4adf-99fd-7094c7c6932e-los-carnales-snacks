import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Package } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    inquiryType: 'general'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      inquiryType: 'general'
    })
  }

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
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-corn-100">
            Questions? Wholesale inquiries? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
            <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-chile-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <Mail className="w-6 h-6 text-chile-600" />
              </div>
              <h3 className="font-carnales font-bold text-lg text-carbon-900 mb-2">Email Us</h3>
              <p className="text-carbon-600">info@loscarnales.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-chile-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <Phone className="w-6 h-6 text-chile-600" />
              </div>
              <h3 className="font-carnales font-bold text-lg text-carbon-900 mb-2">Call Us</h3>
              <p className="text-carbon-600">1-800-CARNALES</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-chile-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-chile-100 to-corn-100 mb-4">
                <MapPin className="w-6 h-6 text-chile-600" />
              </div>
              <h3 className="font-carnales font-bold text-lg text-carbon-900 mb-2">Visit Us</h3>
              <p className="text-carbon-600">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-corn-50 via-white to-chile-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-chile-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-carnales font-black text-carbon-900 mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-carbon-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-chile-500 focus:outline-none"
                    >
                      <option value="general">General Question</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-carbon-700 mb-2">
                      Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      className="border-2 border-gray-300 focus:border-chile-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-carbon-700 mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="border-2 border-gray-300 focus:border-chile-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-carbon-700 mb-2">
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 123-4567"
                      className="border-2 border-gray-300 focus:border-chile-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-carbon-700 mb-2">
                      Company (for wholesale)
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company name"
                      className="border-2 border-gray-300 focus:border-chile-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-carbon-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="border-2 border-gray-300 focus:border-chile-500"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-chile-600 hover:bg-chile-700 text-white font-bold py-6 rounded-full hover-fire"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Wholesale Info */}
              <div className="bg-gradient-to-br from-chile-600 to-corn-500 p-8 lg:p-12 text-white">
                <div className="flex items-center mb-6">
                  <Package className="w-12 h-12 mr-4" />
                  <h3 className="text-3xl font-carnales font-black">
                    Wholesale Program
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-lg">
                    Interested in carrying Los Carnales products in your store? We'd love to partner with you!
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-corn-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p>Competitive wholesale pricing</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-corn-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p>Marketing support and materials</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-corn-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p>Flexible order quantities</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-corn-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p>Fast shipping across the USA</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-corn-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p>Dedicated account manager</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/30">
                    <p className="font-bold mb-2">Minimum Order:</p>
                    <p className="text-corn-100">$500 for first order</p>
                  </div>

                  <div className="pt-6">
                    <p className="text-sm text-corn-100">
                      Fill out the form and select "Wholesale Inquiry" to get started. We'll respond within 24 hours!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default Contact