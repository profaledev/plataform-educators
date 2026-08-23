# PWI - Programação Web I

> Plataforma de revisão para a disciplina de Programação Web I - ETEC | Prof. Alessandro Vitório

## 📋 Sobre

Site estático hospedado no **GitHub Pages** com:
- Aulas gravadas (YouTube + repositórios GitHub)
- Cards dos alunos com links para perfis e repositórios
- Ementa completa da disciplina
- Formulário de cadastro de novos alunos (envia por email)
- Design responsivo, dark mode, animações suaves

## 🚀 Deploy no GitHub Pages

1. **Push para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages:**
   - Settings → Pages → Source: "Deploy from a branch"
   - Branch: `main` / `/ (root)`
   - Save

3. **Acessar:** `https://SEU_USUARIO.github.io/SEU_REPO/`

## 📧 Configurar Formulário de Cadastro

O formulário usa **Formsubmit.co** (sem backend, gratuito).

### Primeira vez (obrigatório):
1. Acesse o site publicado no GitHub Pages
2. Preencha e envie o formulário de "Cadastrar Aluno"
3. Verifique `profaledev@gmail.com` (incluindo **Spam/Lixo eletrônico**)
4. Clique no link **"Verify your email"** do Formsubmit
5. Pronto! Próximos envios chegam direto na inbox

### Personalizar email:
Edite no `index.html` (linha ~376):
```html
<form action="https://formsubmit.co/SEU_EMAIL@DOMINIO.COM" method="POST">
```

### Redirecionar após envio:
```html
<input type="hidden" name="_next" value="/#alunos">
```
(Usa URL relativa - funciona em qualquer domínio)

## 🎨 Tecnologias

| Tech | Uso |
|------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Variáveis, Grid, Flexbox, Animações |
| **Tailwind CSS** | Utilitários (via CDN) |
| **JavaScript Vanilla** | Renderização dinâmica, Modais, IntersectionObserver |
| **Formsubmit** | Backend de formulário (email) |
| **GitHub Pages** | Hospedagem estática gratuita |

## 📁 Estrutura

```
├── index.html          # Página principal
├── script.js           # Lógica: renderização, modais, observers
├── styles.css          # Animações e estilos customizados
└── README.md           # Este arquivo
```

## ⚙️ Personalização

### Adicionar/Remover Alunos
Edite o array `alunos` em `script.js:14`:
```js
const alunos = [
  {
    nome: "Nome Completo",
    github: "username-github",
    repo: "https://github.com/username/exercicios-pw"
  },
  // ...
];
```
> **Ordem:** Renderização é alfabética automática (A-Z)

### Adicionar/Remover Aulas
Edite o array `aulas` em `script.js:53`:
```js
const aulas = [
  {
    numero: "01",
    titulo: "Título da Aula",
    descricao: "Descrição breve",
    youtube: "https://youtu.be/VIDEO_ID",
    repo: "https://github.com/usuario/repo-aula"
  },
  // ...
];
```

### Cores/Tema
Principais variáveis em `styles.css` e classes Tailwind:
- Primária: `cyan-500` / `blue-600`
- Background: `slate-950` / `slate-900`
- Cards: `slate-800/30` com borda `slate-700/50`

## ✨ Funcionalidades JS

| Função | Descrição |
|--------|-----------|
| `renderizarAlunos()` | Cria cards ordenados A-Z |
| `renderizarAulas()` | Cria cards com thumbnail YouTube |
| `initVideoModal()` | Modal player YouTube com fallback |
| `initAlunoModal()` | Modal formulário + preview repo |
| `initMenuMobile()` | Sidebar hamburger |
| `IntersectionObserver` | Animações scroll-reveal + nav ativa |

## 🎯 Checklist Pós-Deploy

- [ ] Site carrega no GitHub Pages
- [ ] Formulário abre modal (+)
- [ ] Envio de teste chega no email
- [ ] Link de verificação Formsubmit clicado
- [ ] Segunda tentativa chega na inbox
- [ ] `_next` redireciona para `#alunos`
- [ ] Videos YouTube abrem no modal
- [ ] Menu mobile funciona
- [ ] Scroll suave nas âncoras nav

## 📄 Licença

Uso educacional - ETEC Programação Web I

---

**Desenvolvido por Prof. Alessandro Vitório** 👨‍🏫