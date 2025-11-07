import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: '1',
      title: 'E-commerce Modern',
      description: 'Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/project1.jpg',
      githubUrl: 'https://github.com/usuario/projeto1',
      liveUrl: 'https://projeto1.com',
      featured: true
    },
    {
      id: '2',
      title: 'App de Gestão de Tarefas',
      description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em tempo real.',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      image: '/project2.jpg',
      githubUrl: 'https://github.com/usuario/projeto2',
      liveUrl: 'https://projeto2.com',
      featured: true
    },
    {
      id: '3',
      title: 'Dashboard Analytics',
      description: 'Dashboard para visualização de dados com gráficos interativos e relatórios.',
      technologies: ['Vue.js', 'Chart.js', 'Python', 'FastAPI', 'MongoDB'],
      image: '/project3.jpg',
      githubUrl: 'https://github.com/usuario/projeto3',
      liveUrl: 'https://projeto3.com',
      featured: false
    },
    {
      id: '4',
      title: 'API RESTful',
      description: 'API robusta para sistema de autenticação e gerenciamento de usuários.',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Docker'],
      image: '/project4.jpg',
      githubUrl: 'https://github.com/usuario/projeto4',
      featured: false
    },
    {
      id: '5',
      title: 'Blog Pessoal',
      description: 'Blog com CMS personalizado e otimização para SEO.',
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
      image: '/project5.jpg',
      githubUrl: 'https://github.com/usuario/projeto5',
      liveUrl: 'https://projeto5.com',
      featured: false
    },
    {
      id: '6',
      title: 'Sistema de Chat',
      description: 'Sistema de chat em tempo real com salas privadas e públicas.',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      image: '/project6.jpg',
      githubUrl: 'https://github.com/usuario/projeto6',
      liveUrl: 'https://projeto6.com',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meus <span className="text-blue-600">Projetos</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos meus trabalhos mais recentes e projetos pessoais 
              que demonstram minhas habilidades e paixão por desenvolvimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Projetos em <span className="text-blue-600">Destaque</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meus projetos mais importantes e complexos
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <Star className="text-yellow-500" size={24} />
                    <span className="text-blue-600 font-medium">Projeto em Destaque</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github size={20} />
                      Código
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={20} />
                        Ver Projeto
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Outros <span className="text-blue-600">Projetos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mais projetos que demonstram minha versatilidade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    {project.title}
                  </span>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 3} mais
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}