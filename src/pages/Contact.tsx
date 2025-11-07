import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'diego@exemplo.com',
      link: 'mailto:diego@exemplo.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, Brasil',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/diego',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/diego',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/diego',
      color: 'hover:text-blue-400'
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
              Entre em <span className="text-blue-600">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tem algum projeto em mente? Vamos conversar! Estou sempre aberto 
              a novas oportunidades e colaborações interessantes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Envie uma Mensagem
                </h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <item.icon className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        {item.link === '#' ? (
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.info}
                          </p>
                        ) : (
                          <a
                            href={item.link}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          >
                            {item.info}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Redes Sociais
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200`}
                    >
                      <social.icon size={24} />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Vamos trabalhar juntos!
                </h3>
                <p className="mb-6 opacity-90">
                  Estou sempre em busca de novos desafios e oportunidades para 
                  criar algo incrível. Se você tem uma ideia ou projeto em mente, 
                  adoraria ouvir sobre ele!
                </p>
                <div className="flex items-center gap-2 text-sm opacity-75">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Disponível para novos projetos
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Perguntas <span className="text-blue-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Algumas perguntas que costumo receber
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Qual é o seu processo de trabalho?',
                answer: 'Começo sempre com uma conversa para entender suas necessidades, depois parto para o planejamento, prototipagem, desenvolvimento e testes. Mantenho comunicação constante durante todo o processo.'
              },
              {
                question: 'Quanto tempo leva para desenvolver um projeto?',
                answer: 'Depende da complexidade do projeto. Um site simples pode levar 2-4 semanas, enquanto aplicações mais complexas podem levar 2-6 meses. Sempre forneço estimativas detalhadas no início.'
              },
              {
                question: 'Você trabalha com projetos de longo prazo?',
                answer: 'Sim! Adoro trabalhar em projetos de longo prazo e estabelecer parcerias duradouras. Também ofereço suporte e manutenção contínua para os projetos que desenvolvo.'
              },
              {
                question: 'Quais tecnologias você domina?',
                answer: 'Tenho expertise em React, TypeScript, Node.js, Python, e várias outras tecnologias modernas. Estou sempre aprendendo e me adaptando às necessidades de cada projeto.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}