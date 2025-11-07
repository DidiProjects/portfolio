import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-max">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-gray-300">
            Feito com <Heart size={16} className="text-red-500" /> por Diego
          </p>
          <p className="text-gray-400 mt-2">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}