import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Heart } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 opacity-40">
        <Image src="/floral-accent.webp" alt="" width={384} height={384} className="object-contain" />
      </div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-30 rotate-180">
        <Image src="/floral-accent.webp" alt="" width={500} height={500} className="object-contain" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20 animate-pulse">
        <Image src="/floral-accent.webp" alt="" width={128} height={128} className="object-contain rotate-45" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 rounded-full blur-xl opacity-30"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-rose-200/50">
                <p className="text-rose-600 font-medium text-sm tracking-[0.2em] uppercase mb-1">Mme</p>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent text-balance">
                  Rajaa Khouimi
                </h1>
              </div>
            </div>
          </div>

          <Card className="bg-white/70 backdrop-blur-md border-0 shadow-2xl shadow-rose-200/20 rounded-3xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-purple-50/50"></div>

              <div className="relative p-12 md:p-16">
                <div className="text-center mb-12">
                  
                  <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                    Welcome to my portfolio. Let's connect and create something beautiful together.
                  </p>
                </div>

                <div className="grid gap-6 max-w-2xl mx-auto mb-12">
                  <a
                    href="mailto:example@gmail.com"
                    className="group flex items-center gap-4 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <p className="text-gray-800 font-semibold text-lg">example@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+212661427723"
                    className="group flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <p className="text-gray-800 font-semibold text-lg">+2126 61 42 77 23</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/rajaakhouimi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                      <p className="text-gray-800 font-semibold text-lg">rajaakhouimi</p>
                    </div>
                  </a>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="mailto:example@gmail.com">Let's Work Together</a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Crafted with <Heart className="w-4 h-4 inline text-rose-500 fill-rose-500" /> for beautiful connections
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/20 via-transparent to-purple-100/20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-radial from-pink-200/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </div>
  )
}
