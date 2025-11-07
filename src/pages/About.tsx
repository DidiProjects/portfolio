import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: Database,
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android']
    },
    {
      category: 'DevOps',
      icon: Code,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux']
    }
  ]

  const experiences = [
    {
      period: '2023 - Presente',
      company: 'Tech Company',
      position: 'Desenvolvedor Full Stack Senior',
      description: 'Desenvolvimento de aplicações web modernas usando React, TypeScript e Node.js. Liderança técnica de projetos e mentoria de desenvolvedores júnior.'
    },
    {
      period: '2021 - 2023',
      company: 'Digital Agency',
      position: 'Desenvolvedor Frontend',
      description: 'Criação de interfaces responsivas e performáticas para diversos clientes. Especialização em React e frameworks CSS modernos.'
    },
    {
      period: '2020 - 2021',
      company: 'Startup',
      position: 'Desenvolvedor Junior',
      description: 'Desenvolvimento de features para produto SaaS. Aprendizado e aplicação de boas práticas de desenvolvimento ágil.'
    }
  ]

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
              Sobre <span className="text-blue-600">Mim</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre buscando 
              criar soluções que façam a diferença na vida das pessoas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Minha Jornada
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Comecei minha jornada na programação há mais de 3 anos, e desde então 
                  tenho me dedicado a aprender e dominar as tecnologias mais modernas 
                  do mercado.
                </p>
                <p>
                  Minha paixão está em criar experiências digitais que sejam não apenas 
                  funcionais, mas também intuitivas e agradáveis para os usuários.
                </p>
                <p>
                  Tenho experiência tanto no frontend quanto no backend, o que me permite 
                  ter uma visão completa dos projetos e contribuir em todas as etapas 
                  do desenvolvimento.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Principais Valores</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Código limpo e bem documentado
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Experiência do usuário em primeiro lugar
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Aprendizado contínuo
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Trabalho em equipe
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Minhas <span className="text-blue-600">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  <skill.icon size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              Minha <span className="text-blue-600">Experiência</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Trajetória profissional e principais conquistas
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="text-blue-600 font-semibold mb-2">{exp.period}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                      {exp.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
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