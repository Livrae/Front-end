// ==================== VARIÁVEIS GLOBAIS ====================
const cabecalho = document.getElementById('cabecalho');
const navegacao = document.getElementById('navegacao');
const botaoMenu = document.getElementById('botaoMenu');
const linksNavegacao = document.querySelectorAll('.link-navegacao');
const formularioNewsletter = document.getElementById('formularioNewsletter');
const formularioBusca = document.querySelector('.formulario-busca');

// ==================== MENU MOBILE ====================
/**
 * Abre e fecha o menu mobile ao clicar no botão
 * Atualiza o ícone e os atributos ARIA para acessibilidade
 */
botaoMenu.addEventListener('click', function() {
    const estaAtivo = navegacao.classList.toggle('ativo');
    
    // Atualiza o ícone do botão
    if (estaAtivo) {
        botaoMenu.textContent = '✕';
        botaoMenu.setAttribute('aria-expanded', 'true');
        botaoMenu.setAttribute('aria-label', 'Fechar menu de navegação');
        
        // Trava o scroll do body quando o menu está aberto
        document.body.style.overflow = 'hidden';
    } else {
        botaoMenu.textContent = '☰';
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu de navegação');
        
        // Libera o scroll do body
        document.body.style.overflow = '';
    }
});

/**
 * Fecha o menu ao clicar em um link de navegação
 */
linksNavegacao.forEach(function(link) {
    link.addEventListener('click', function() {
        navegacao.classList.remove('ativo');
        botaoMenu.textContent = '☰';
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu de navegação');
        document.body.style.overflow = '';
    });
});

/**
 * Fecha o menu ao pressionar a tecla ESC
 * Melhora a acessibilidade e experiência do usuário
 */
document.addEventListener('keydown', function(evento) {
    if (evento.key === 'Escape' && navegacao.classList.contains('ativo')) {
        navegacao.classList.remove('ativo');
        botaoMenu.textContent = '☰';
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu de navegação');
        document.body.style.overflow = '';
        botaoMenu.focus(); // Retorna o foco para o botão
    }
});

/**
 * Fecha o menu ao clicar fora dele
 */
document.addEventListener('click', function(evento) {
    const dentroDoMenu = navegacao.contains(evento.target);
    const clicouNoBotao = botaoMenu.contains(evento.target);
    
    if (!dentroDoMenu && !clicouNoBotao && navegacao.classList.contains('ativo')) {
        navegacao.classList.remove('ativo');
        botaoMenu.textContent = '☰';
        botaoMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// ==================== SCROLL SUAVE ====================
/**
 * Adiciona scroll suave ao clicar nos links de navegação
 * Melhora a experiência do usuário ao navegar entre seções
 */
linksNavegacao.forEach(function(link) {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();
        
        const idSecao = this.getAttribute('href');
        const secao = document.querySelector(idSecao);
        
        if (secao) {
            // Calcula a posição considerando a altura do header fixo
            const alturaHeader = cabecalho.offsetHeight;
            const posicaoSecao = secao.getBoundingClientRect().top + window.pageYOffset;
            const posicaoFinal = posicaoSecao - alturaHeader;
            
            window.scrollTo({
                top: posicaoFinal,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ANIMAÇÃO DE ENTRADA ====================
/**
 * Observa elementos para adicionar animação quando aparecem na tela
 * Usa Intersection Observer API para performance otimizada
 */
const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

/**
 * Aplica animação inicial aos cards de recursos
 */
const cardsRecurso = document.querySelectorAll('.card-recurso');
cardsRecurso.forEach(function(card, indice) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${indice * 0.1}s`;
    observador.observe(card);
});

/**
 * Aplica animação aos cards de planos
 */
const cardsPlano = document.querySelectorAll('.card-plano');
cardsPlano.forEach(function(card, indice) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${indice * 0.15}s`;
    observador.observe(card);
});

/**
 * Aplica animação aos passos do "Como Funciona"
 */
const passos = document.querySelectorAll('.passo');
passos.forEach(function(passo, indice) {
    passo.style.opacity = '0';
    passo.style.transform = 'translateY(30px)';
    passo.style.transition = `all 0.6s ease ${indice * 0.2}s`;
    observador.observe(passo);
});

/**
 * Aplica animação aos itens de valor
 */
const itensValor = document.querySelectorAll('.item-valor');
itensValor.forEach(function(item, indice) {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.5s ease ${indice * 0.1}s`;
    observador.observe(item);
});

// ==================== FORMULÁRIO DE BUSCA ====================
/**
 * Processa o envio do formulário de busca
 * Valida os campos e simula uma busca
 */
if (formularioBusca) {
    formularioBusca.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const localizacao = document.getElementById('localizacao').value;
        const curso = document.getElementById('curso').value;
        const tempo = document.getElementById('tempo').value;
        
        // Validação básica
        if (!localizacao || !curso) {
            alert('⚠️ Por favor, preencha a localização e o curso para realizar a busca.');
            
            // Foca no primeiro campo vazio
            if (!localizacao) {
                document.getElementById('localizacao').focus();
            } else {
                document.getElementById('curso').focus();
            }
            return;
        }
        
        // Log para debug (pode ser removido em produção)
        console.log('Busca realizada:', { localizacao, curso, tempo });
        
        // Feedback visual para o usuário
        const botaoBuscar = formularioBusca.querySelector('.botao-buscar');
        const textoOriginal = botaoBuscar.innerHTML;
        
        botaoBuscar.innerHTML = '<span aria-hidden="true">⏳</span> <span>Buscando...</span>';
        botaoBuscar.disabled = true;
        
        // Simula uma busca (em produção, aqui seria feita a requisição ao servidor)
        setTimeout(function() {
            alert('🎉 Encontramos livros para você! Redirecionando para os resultados...');
            botaoBuscar.innerHTML = textoOriginal;
            botaoBuscar.disabled = false;
            
            // Aqui você redirecionaria para a página de resultados
            // window.location.href = '/resultados?loc=' + localizacao + '&curso=' + curso;
        }, 1500);
    });
}

// ==================== FORMULÁRIO DE NEWSLETTER ====================
/**
 * Processa o envio do formulário de newsletter
 * Valida o email e fornece feedback ao usuário
 */
formularioNewsletter.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const campoEmail = document.getElementById('email-newsletter');
    const emailDigitado = campoEmail.value.trim();
    
    // Validação de e-mail usando regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailDigitado) {
        alert('⚠️ Por favor, digite seu e-mail.');
        campoEmail.focus();
        return;
    }
    
    if (!regexEmail.test(emailDigitado)) {
        alert('⚠️ Por favor, digite um e-mail válido.');
        campoEmail.focus();
        return;
    }
    
    // Feedback visual
    const botaoNewsletter = formularioNewsletter.querySelector('.botao-newsletter');
    const textoOriginal = botaoNewsletter.textContent;
    
    botaoNewsletter.textContent = 'Inscrevendo...';
    botaoNewsletter.disabled = true;
    
    // Simula envio ao servidor
    setTimeout(function() {
        // Sucesso na inscrição
        alert('🎉 Obrigado por se inscrever!\n\nVocê receberá nossas novidades em: ' + emailDigitado);
        campoEmail.value = ''; // Limpa o campo
        
        botaoNewsletter.textContent = textoOriginal;
        botaoNewsletter.disabled = false;
        
        // Anúncio para leitores de tela
        anunciarParaLeitoresDetela('Inscrição realizada com sucesso!');
        
        // Log para analytics (em produção)
        console.log('Newsletter inscrito:', emailDigitado);
        
    }, 1000);
});

// ==================== BOTÕES DE PLANOS ====================
/**
 * Adiciona funcionalidade aos botões de planos
 */
const botoesPlano = document.querySelectorAll('.botao-plano');
botoesPlano.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const cardPlano = this.closest('.card-plano');
        const nomePlano = cardPlano.querySelector('.nome-plano').textContent;
        
        alert('🎯 Você selecionou o plano: ' + nomePlano + '\n\nRedirecionando para finalizar a assinatura...');
        
        // Aqui você redirecionaria para a página de checkout
        // window.location.href = '/checkout?plano=' + nomePlano;
        
        console.log('Plano selecionado:', nomePlano);
    });
});

// ==================== BOTÕES HERO ====================
/**
 * Adiciona funcionalidade aos botões da seção hero
 */
const botoesPrimarios = document.querySelectorAll('.botao-primario');
const botoesSecundarios = document.querySelectorAll('.botao-secundario');

botoesPrimarios.forEach(function(botao) {
    if (!botao.closest('.card-plano')) { // Ignora botões de planos
        botao.addEventListener('click', function() {
            // Rola para a seção de planos
            const secaoPlanos = document.getElementById('planos');
            if (secaoPlanos) {
                const alturaHeader = cabecalho.offsetHeight;
                const posicaoSecao = secaoPlanos.getBoundingClientRect().top + window.pageYOffset;
                const posicaoFinal = posicaoSecao - alturaHeader;
                
                window.scrollTo({
                    top: posicaoFinal,
                    behavior: 'smooth'
                });
            }
        });
    }
});

botoesSecundarios.forEach(function(botao) {
    botao.addEventListener('click', function() {
        alert('🔍 Redirecionando para o catálogo de livros...');
        // window.location.href = '/catalogo';
    });
});

// ==================== FUNÇÕES AUXILIARES ====================
/**
 * Função para anunciar mensagens para leitores de tela
 * Melhora a acessibilidade fornecendo feedback auditivo
 */
function anunciarParaLeitoresDetela(mensagem) {
    const anunciador = document.createElement('div');
    anunciador.setAttribute('role', 'status');
    anunciador.setAttribute('aria-live', 'polite');
    anunciador.setAttribute('aria-atomic', 'true');
    anunciador.className = 'sr-only';
    anunciador.textContent = mensagem;
    
    document.body.appendChild(anunciador);
    
    // Remove o elemento após 1 segundo
    setTimeout(function() {
        document.body.removeChild(anunciador);
    }, 1000);
}

/**
 * Detecta a preferência de movimento reduzido do usuário
 * Respeita as configurações de acessibilidade do sistema
 */
const prefereMovimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefereMovimentoReduzido) {
    // Desabilita animações para usuários que preferem movimento reduzido
    document.documentElement.style.setProperty('--duracao-animacao', '0s');
    console.log('Animações reduzidas por preferência do usuário');
}

// ==================== ANALYTICS E TRACKING ====================
/**
 * Rastreia cliques em links importantes (apenas console.log para exemplo)
 * Em produção, integre com Google Analytics, Mixpanel, etc.
 */
function rastrearEvento(categoria, acao, rotulo) {
    console.log('Evento rastreado:', {
        categoria: categoria,
        acao: acao,
        rotulo: rotulo,
        timestamp: new Date().toISOString()
    });
    
    // Exemplo de integração com Google Analytics (descomente em produção):
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', acao, {
    //         'event_category': categoria,
    //         'event_label': rotulo
    //     });
    // }
}

// Rastreia cliques nos links de navegação
linksNavegacao.forEach(function(link) {
    link.addEventListener('click', function() {
        const textoLink = this.textContent.trim();
        rastrearEvento('Navegação', 'Clique no menu', textoLink);
    });
});

// Rastreia cliques no botão do WhatsApp
const botaoWhatsapp = document.querySelector('.botao-whatsapp-flutuante');
if (botaoWhatsapp) {
    botaoWhatsapp.addEventListener('click', function() {
        rastrearEvento('Conversão', 'Clique WhatsApp', 'Botão flutuante');
    });
}

// ==================== PERFORMANCE E OTIMIZAÇÕES ====================
/**
 * Lazy loading para imagens (caso adicione imagens reais)
 */
if ('IntersectionObserver' in window) {
    const imagensLazy = document.querySelectorAll('img[data-src]');
    
    const observadorImagens = new IntersectionObserver(function(entradas) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                const imagem = entrada.target;
                imagem.src = imagem.dataset.src;
                imagem.removeAttribute('data-src');
                observadorImagens.unobserve(imagem);
            }
        });
    });
    
    imagensLazy.forEach(function(imagem) {
        observadorImagens.observe(imagem);
    });
}

// ==================== CONSOLE LOG DE BOAS-VINDAS ====================
console.log('%c🚀 Livraê - Landing Page Carregada com Sucesso!', 'color: #ff7015; font-size: 20px; font-weight: bold;');
console.log('%c📚 Tornando a leitura acessível para todos', 'color: #1a1a1a; font-size: 14px;');
console.log('%cDesenvolvido com ❤️ e acessibilidade em mente', 'color: #ff7015; font-size: 12px;');

// ==================== MODO DEBUG (DESENVOLVIMENTO) ====================
/**
 * Ativa recursos de debug em ambiente de desenvolvimento
 * Remova ou comente em produção
 */
const MODO_DEBUG = false; // Altere para true durante desenvolvimento

if (MODO_DEBUG) {
    console.log('🔧 Modo Debug Ativado');
    
    // Mostra informações sobre elementos interativos
    const elementosInterativos = document.querySelectorAll('button, a, input, select');
    console.log('Total de elementos interativos:', elementosInterativos.length);
    
    // Monitora cliques em qualquer lugar da página
    document.addEventListener('click', function(evento) {
        console.log('Clique detectado em:', evento.target);
    });
}