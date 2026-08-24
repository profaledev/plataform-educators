// ============================================
// LISTA DE ALUNOS DA TURMA
// ============================================
// Para adicionar um aluno, copie o bloco abaixo
// e preencha os dados:
//
// {
//   nome: "Nome do Aluno",
//   github: "username-do-github",
//   repo: "https://github.com/username/pwi-exercicios"
// }
// ============================================

const alunos = [
  {
    nome: "Francisco Marcelino",
    github: "Fmarcelino33",
    repo: "https://github.com/Fmarcelino33/exercicios-pw"
  },
  {
    nome: "Guilherme",
    github: "Guilherme583",
    repo: "https://github.com/Guilherme583/exercicios-pw"
  },
  {
    nome: "Gabriel Nóbrega",
    github: "Gabsnobrega",
    repo: "https://github.com/Gabsnobrega/exercicios-pw"
  },
  {
    nome: "Angelo Viana Soares",
    github: "angeloviana",
    repo: "https://github.com/angeloviana/exercicios-pw"
  },
  {
    nome: "Gabriela Martins",
    github: "gabimartins-dev",
    repo: "https://github.com/gabimartins-dev/exercicios-pw"
  },
  {
    nome: "Henri",
    github: "HenriKihara728",
    repo: "https://github.com/HenriKihara728/exercicios-pw"
  },
  
];

// ============================================
// LISTA DE AULAS DA DISCIPLINA
// ============================================
// Para adicionar uma aula, copie o bloco abaixo
// e preencha os dados:
//
// {
//   numero: "01",
//   titulo: "Titulo da Aula",
//   descricao: "Descrição breve do conteúdo",
//   youtube: "https://youtube.com/watch?v=...",
//   repo: "https://github.com/SEU_USUARIO/pwi-aula-01"
// }
// ============================================

const aulas = [
  {
    numero: "01",
    titulo: "Introdução a Web e HTML",
    descricao: "História da web, como funciona a internet, estrutura básica de um documento HTML.",
    youtube: "https://youtu.be/pACre92tTsA",
    repo: "https://github.com/profaledev/doc-html-tags-atrib-conteudo"
  },
  {
    numero: "02",
    titulo: "Tags HTML e Semântica",
    descricao: "Principais tags HTML, atributos, semântica, headings, parágrafos, listas e links.",
    youtube: "https://youtu.be/l-qQhcbvaMo",
    repo: "https://github.com/alessandrovitorio/links-form-img"
  },
  {
    numero: "03",
    titulo: "Introdução ao CSS",
    descricao: "Seletores CSS, cores, fontes, margins, paddings, bordas e modelo de caixa (box model).",
    youtube: "https://youtu.be/nL2F0rQzfZM",
    repo: "https://github.com/profaledev/css-regra-atributo-seletores"
  }
];

// ============================================
// FUNCAO: renderizarAulas()
// Cria os cards das aulas no HTML automaticamente
// ============================================

function extrairVideoId(url) {
  if (!url || url === '#') return null;
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function renderizarAulas() {
  const grid = document.getElementById('aulas-grid');
  if (!grid) return;

  grid.innerHTML = aulas.map((aula, index) => {
    const videoId = extrairVideoId(aula.youtube);
    const videoAttr = videoId ? 'data-video-id="' + videoId + '" data-video-title="Aula ' + aula.numero + ': ' + aula.titulo + '"' : '';
    const thumbStyle = videoId ? 'style="background-image: url(https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg); background-size: cover; background-position: center;"' : '';
    return `
    <div class="group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden
                hover:border-cyan-500/50 transition-all scroll-reveal"
         style="transition-delay: ${index * 100}ms">
      <div class="relative aspect-video bg-slate-700/50 flex items-center justify-center overflow-hidden cursor-pointer ${videoId ? 'open-video' : ''} group"
           ${videoAttr}
           ${thumbStyle}>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        <div class="text-center relative z-10">
          <div class="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-black/30">
            <svg class="w-8 h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p class="text-white/80 text-sm font-medium drop-shadow">Assistir aula</p>
        </div>
      </div>
      <div class="p-6">
        <span class="text-xs text-cyan-400 font-semibold">Aula ${aula.numero}</span>
        <h3 class="text-lg font-bold mt-1 mb-2">${aula.titulo}</h3>
        <p class="text-slate-400 text-sm mb-4">${aula.descricao}</p>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm font-medium hover:bg-red-600/30 transition-colors ${videoId ? 'open-video' : ''}"
                  ${videoAttr}>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            </svg>
            YouTube
          </button>
          <a href="${aula.repo}" target="_blank"
             class="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            Repositório
          </a>
        </div>
      </div>
    </div>
  `}).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  grid.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ============================================
// FUNCAO: renderizarAlunos()
// Cria os cards dos alunos no HTML automaticamente
// ============================================

function renderizarAlunos() {
  // Pega o elemento <div id="alunos-grid"> do HTML
  const grid = document.getElementById('alunos-grid');
  if (!grid) return; // Se nao existir, para aqui

  // Ordena alunos alfabeticamente por nome
  const alunosOrdenados = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));

  // Para cada aluno do array, cria um card
  // O .map() percorre a lista e o .join() junta tudo em uma string
  grid.innerHTML = alunosOrdenados.map(aluno => `
    <div class="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6
                hover:border-cyan-500/50 transition-all scroll-reveal
                flex flex-col items-center text-center">
      <!-- Link para o PERFIL do GitHub (avatar + nome + @) -->
      <a href="https://github.com/${aluno.github}" target="_blank"
         class="group flex items-center flex-col text-center">
        <!-- Avatar: o GitHub gera a foto automaticamente pelo username -->
        <img src="https://github.com/${aluno.github}.png"
             alt="${aluno.nome}"
             class="w-20 h-20 rounded-full border-2 border-slate-700
                    group-hover:border-cyan-500 transition-all mb-4"
             loading="lazy">
        <h3 class="font-bold text-white group-hover:text-cyan-400 transition-colors">${aluno.nome}</h3>
        <span class="text-slate-400 text-sm mt-1 block">@${aluno.github}</span>
      </a>
      <!-- Link para o REPOSITORIO de exercicios -->
      <a href="${aluno.repo}" target="_blank"
         class="mt-3 flex items-center gap-2 text-xs text-slate-500
                hover:text-cyan-400 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
        Ver repositório
      </a>
    </div>
  `).join('');

  // ============================================
  // INTERSECTION OBSERVER (para os alunos)
  // ============================================
  // O que faz: Ativa a animação de "aparecer suavemente"
  // quando o card entra na tela (scroll).
  //
  // Como funciona:
  // 1. O IntersectionObserver "vigia" um elemento
  // 2. Quando ele entra na area visivel da tela (intersecta)
  // 3. Adiciona a classe "visible" no elemento
  // 4. O CSS .scroll-reveal.visible faz ele aparecer com animação
  // ============================================

  const observer = new IntersectionObserver((entries) => {
    // entries = lista de elementos que estao sendo observados
    entries.forEach(entry => {
      // entry.isIntersecting = true quando o elemento esta visivel na tela
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // ativa a animação CSS
      }
    });
  }, {
    // threshold: 0.1 = dispara quando 10% do elemento estiver visivel
    threshold: 0.1,
    // rootMargin: -50px = espera passar 50px do topo antes de disparar
    rootMargin: '0px 0px -50px 0px'
  });

  // Para cada card com classe "scroll-reveal", comeca a vigiar
  grid.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ============================================
// INICIALIZACAO - Roda quando a pagina carrega
// ============================================

// ============================================
// MENU MOBILE (sidebar)
// ============================================

function initMenuMobile() {
  const btn = document.getElementById('menu-btn');
  const close = document.getElementById('menu-close');
  const overlay = document.getElementById('menu-overlay');
  const sidebar = document.getElementById('menu-sidebar');
  if (!btn || !close || !overlay || !sidebar) return;

  function abrir() {
    overlay.classList.remove('invisible', 'opacity-0');
    sidebar.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }

  function fechar() {
    overlay.classList.add('invisible', 'opacity-0');
    sidebar.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', abrir);
  close.addEventListener('click', fechar);
  overlay.addEventListener('click', fechar);

  // Fecha ao clicar num link
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', fechar);
  });
}

// ============================================
// MODAL DE VIDEO DO YOUTUBE
// ============================================

let currentVideoId = null;

function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const overlay = document.getElementById('video-overlay');
  const close = document.getElementById('video-close');
  const player = document.getElementById('video-player');
  const title = document.getElementById('video-title');
  const errorDiv = document.getElementById('video-error');
  const errorLink = document.getElementById('video-error-link');
  if (!modal || !overlay || !close || !player) return;

  function abrir(videoId, videoTitle) {
    currentVideoId = videoId;
    const origin = window.location.origin;
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&origin=${encodeURIComponent(origin)}`;
    if (title && videoTitle) title.textContent = videoTitle;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    player.classList.remove('hidden');
    if (errorDiv) errorDiv.classList.add('hidden');
    if (errorLink) errorLink.href = `https://www.youtube.com/watch?v=${videoId}`;
  }

  window.handleVideoError = function() {
    console.log('Erro 153: Video nao incorporavel - ID:', currentVideoId);
    player.classList.add('hidden');
    if (errorDiv) errorDiv.classList.remove('hidden');
  };

  function fechar() {
    player.src = '';
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  close.addEventListener('click', fechar);
  overlay.addEventListener('click', fechar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fechar();
  });

  // Delegação de eventos para botoes de video
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-video');
    if (!trigger) return;
    const videoId = trigger.dataset.videoId;
    const videoTitle = trigger.dataset.videoTitle;
    if (videoId) abrir(videoId, videoTitle);
  });
}

// ============================================
// MODAL DE CADASTRO DE ALUNO
// ============================================

function initAlunoModal() {
  const modal = document.getElementById('modal-aluno');
  const overlay = document.getElementById('modal-aluno-overlay');
  const close = document.getElementById('modal-aluno-close');
  const btnAbrir = document.getElementById('btn-add-aluno');
  const githubInput = document.getElementById('github-input');
  const repoHidden = document.getElementById('repo-hidden');
  const repoPreview = document.getElementById('repo-preview');
  if (!modal || !overlay || !close || !btnAbrir || !githubInput || !repoHidden || !repoPreview) return;

  function atualizarRepo() {
    const username = githubInput.value.trim();
    repoHidden.value = username ? `https://github.com/${username}/exercicios-pw` : '';
    repoPreview.textContent = username || 'username';
  }

  function abrir() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function fechar() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  btnAbrir.addEventListener('click', abrir);
  close.addEventListener('click', fechar);
  overlay.addEventListener('click', fechar);
  githubInput.addEventListener('input', atualizarRepo);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fechar();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // MESMA LOGICA DO OBSERVER (para o resto da pagina)
  // ============================================
  // Aqui fazemos a mesma coisa para TODOS os elementos
  // da pagina que tem a classe "scroll-reveal"
  // (hero, secoes, cards de aula, etc.)
  // ============================================

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Pega todos os elementos com classe "scroll-reveal" e vigia cada um
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

  // Renderiza os cards das aulas e alunos
  renderizarAulas();
  renderizarAlunos();

  // Atualiza contador de aulas no hero
  document.getElementById('aulas-count').textContent = aulas.length;

  // Ativa o menu mobile
  initMenuMobile();

  // Ativa o modal de video
  initVideoModal();

  // Ativa o modal de cadastro de aluno
  initAlunoModal();

  // ============================================
  // NAV FIXA COM ESTILO AO SCROLLAR
  // ============================================

  const nav = document.getElementById('main-nav');
  if (nav) {
    function updateNav() {
      nav.classList.toggle('nav-scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ============================================
  // LINK ATIVO CONFORME SESSAO VISIVEL
  // ============================================

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = [];
  navLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section) sections.push({ id, link, section });
  });

  if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const match = sections.find(s => s.section === entry.target);
          if (match) match.link.classList.add('active');
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-80px 0px 0px 0px'
    });

    sections.forEach(s => observer.observe(s.section));
  }
});
