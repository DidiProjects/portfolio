# 🚀 Portfólio Moderno - React + TypeScript

Um portfólio moderno e responsivo desenvolvido com as tecnologias mais atuais do ecossistema React.

## ✨ Tecnologias Utilizadas

- **React 19** - A biblioteca JavaScript mais popular para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool super rápida para desenvolvimento
- **Tailwind CSS** - Framework CSS utility-first moderno
- **Framer Motion** - Biblioteca para animações fluidas
- **React Router** - Roteamento para Single Page Applications
- **Lucide React** - Ícones modernos e consistentes
- **ESLint + Prettier** - Formatação e qualidade de código

## 🎨 Características

- ✅ Design moderno e responsivo
- ✅ Tema escuro/claro automático
- ✅ Animações suaves com Framer Motion
- ✅ Navegação fluida entre páginas
- ✅ Formulário de contato funcional
- ✅ Seção de projetos em destaque
- ✅ Timeline de experiências profissionais
- ✅ Otimizado para performance
- ✅ TypeScript para maior segurança

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação e Execução

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx      # Barra de navegação responsiva
│   └── Footer.tsx      # Rodapé do site
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial com hero section
│   ├── About.tsx       # Sobre mim com skills e experiência
│   ├── Projects.tsx    # Portfólio de projetos
│   └── Contact.tsx     # Formulário de contato
├── hooks/              # Hooks personalizados
│   └── useTheme.ts     # Hook para gerenciar tema
├── types/              # Tipos TypeScript
│   └── index.ts        # Definições de tipos
├── App.tsx             # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais com Tailwind
```

## 🎯 Funcionalidades

### 🏠 Página Home
- Hero section com apresentação pessoal
- Estatísticas de experiência
- Call-to-actions para projetos e CV
- Animações de entrada suaves

### 👤 Página Sobre
- História profissional detalhada
- Timeline de experiências
- Habilidades organizadas por categoria
- Cards interativos com tecnologias

### 💼 Página Projetos
- Projetos em destaque com layout especial
- Grid de outros projetos
- Links para GitHub e demos ao vivo
- Tags de tecnologias utilizadas

### 📞 Página Contato
- Formulário funcional de contato
- Informações pessoais de contato
- Links para redes sociais
- FAQ com perguntas frequentes

## 🎨 Personalização

### Cores e Temas
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Azul principal
      secondary: '#8B5CF6',  // Roxo secundário
    }
  }
}
```

### Conteúdo
Edite os arquivos em `src/pages/` para personalizar:
- Textos e descrições pessoais
- Lista de projetos e experiências
- Informações de contato
- Links das redes sociais

### Animações
As animações são configuradas com Framer Motion. Você pode ajustar:
- Durações no `transition`
- Efeitos de entrada no `initial` e `animate`
- Animações de hover no `whileHover`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Faça build do projeto: `npm run build`
2. Faça upload da pasta `dist` para o Netlify
3. Configure redirecionamentos para SPA

### Outros Provedores
O projeto gera uma pasta `dist` após o build que pode ser hospedada em qualquer servidor estático.

## 📝 Scripts Disponíveis

```bash
npm start        # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build de produção
npm run lint     # Verificar código com ESLint
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por **Diego**

- GitHub: [@DidiProjects](https://github.com/DidiProjects)
- LinkedIn: [Diego](https://linkedin.com/in/diego)

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!

## 🌟 Features em Desenvolvimento

- [ ] Sistema de blog integrado
- [ ] Modo de apresentação
- [ ] Integração com CMS
- [ ] PWA (Progressive Web App)
- [ ] Análise de performance


- ✅ Otimizado para SEO

- ✅ TypeScript para maior segurança      // Remove tseslint.configs.recommended and replace with this

      tseslint.configs.recommendedTypeChecked,

## 🚀 Como Executar      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

### Pré-requisitos      // Optionally, add this for stylistic rules

- Node.js 18+ instalado      tseslint.configs.stylisticTypeChecked,

- npm ou yarn

      // Other configs...

### Instalação    ],

    languageOptions: {

1. Instale as dependências:      parserOptions: {

```bash        project: ['./tsconfig.node.json', './tsconfig.app.json'],

npm install        tsconfigRootDir: import.meta.dirname,

```      },

      // other options...

2. Execute o projeto:    },

```bash  },

npm run dev])

``````



3. Abra [http://localhost:5173](http://localhost:5173) no seu navegadorYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



### Solução de Problemas```js

// eslint.config.js

Se você encontrar problemas com patch-package, execute:import reactX from 'eslint-plugin-react-x'

```bashimport reactDom from 'eslint-plugin-react-dom'

npm cache clean --force

npm install --forceexport default defineConfig([

```  globalIgnores(['dist']),

  {

## 📁 Estrutura do Projeto    files: ['**/*.{ts,tsx}'],

    extends: [

```      // Other configs...

src/      // Enable lint rules for React

├── components/          # Componentes reutilizáveis      reactX.configs['recommended-typescript'],

│   ├── Navbar.tsx      # Barra de navegação      // Enable lint rules for React DOM

│   └── Footer.tsx      # Rodapé      reactDom.configs.recommended,

├── pages/              # Páginas da aplicação    ],

│   ├── Home.tsx        # Página inicial    languageOptions: {

│   ├── About.tsx       # Sobre mim      parserOptions: {

│   ├── Projects.tsx    # Projetos        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   └── Contact.tsx     # Contato        tsconfigRootDir: import.meta.dirname,

├── hooks/              # Hooks personalizados      },

│   └── useTheme.ts     # Hook para tema      // other options...

├── types/              # Tipos TypeScript    },

│   └── index.ts        # Definições de tipos  },

├── App.tsx             # Componente principal])

├── main.tsx           # Ponto de entrada```

└── index.css          # Estilos globais
```

## 🎯 Funcionalidades

### 🏠 Página Home
- Hero section com apresentação pessoal
- Estatísticas e tecnologias
- Call-to-actions para projetos e CV

### 👤 Página Sobre
- História profissional
- Timeline de experiências
- Habilidades organizadas por categoria

### 💼 Página Projetos
- Projetos em destaque
- Grid de outros projetos
- Links para GitHub e demos

### 📞 Página Contato
- Formulário de contato
- Informações pessoais
- Links para redes sociais

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Verificar código com ESLint
```

## 👨‍💻 Autor

Desenvolvido com ❤️ por Diego