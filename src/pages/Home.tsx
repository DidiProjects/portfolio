import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-blue-600 font-medium text-lg"
                >
                  Olá, eu sou
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
                >
                  Diego
                  <span className="text-blue-600"> Developer</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  Desenvolvedor Full Stack apaixonado por criar experiências digitais 
                  incríveis com as tecnologias mais modernas.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  Ver Projetos
                  <ExternalLink size={20} />
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="btn-secondary"
                >
                  Download CV
                  <Download size={20} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                      D
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-20"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowDown size={32} className="animate-bounce mx-auto" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section id="stats" className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projetos Concluídos' },
              { number: '3+', label: 'Anos de Experiência' },
              { number: '20+', label: 'Tecnologias' },
              { number: '100%', label: 'Satisfação do Cliente' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}