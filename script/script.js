// --- 1. LÓGICA DE TROCA DE TEMA (LIGHT/DARK) ---
const btnTema = document.getElementById('trocaTema');
const body = document.body;
const iconeTema = btnTema.querySelector('i');

// Verifica se já existe preferência salva
if (localStorage.getItem('tema') === 'dark') {
    body.classList.add('dark-mode');
    iconeTema.classList.replace('fa-sun', 'fa-moon');
}

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Salva a escolha e troca o ícone
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'dark');
        iconeTema.classList.replace('fa-sun', 'fa-moon');
    } else {
        localStorage.setItem('tema', 'light');
        iconeTema.classList.replace('fa-moon', 'fa-sun');
    }
});

// --- Envio real de e-mail usando Formspree (Comentado para uso futuro) ---
// // --- 2. VALIDAÇÃO E ENVIO DE FORMULÁRIO (FORMSPREE) ---
// const formulario = document.getElementById('formContato');
// const feedback = document.getElementById('feedback');

// formulario.addEventListener('submit', async function(event) {
//     event.preventDefault(); 

//     const nome = document.getElementById('nome').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mensagem = document.getElementById('mensagem').value.trim();

//     if (!nome || !email || !mensagem) {
//         alert("Por favor, preencha todos os campos obrigatórios!");
//         return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert("Insira um e-mail válido.");
//         return;
//     }

//     const data = new FormData(formulario);
//     feedback.innerText = "Enviando...";

//     try {
//         const response = await fetch('https://formspree.io/f/xgopjolo', {
//             method: 'POST',
//             body: data,
//             headers: { 'Accept': 'application/json' }
//         });

//         if (response.ok) {
//             feedback.style.color = "green";
//             feedback.innerText = "Mensagem enviada com sucesso!";
//             alert("Mensagem enviada com sucesso! Logo você receberá um e-mail de resposta.");
//             formulario.reset();
//         } else {
//             throw new Error();
//         }
//     } catch (error) {
//         feedback.style.color = "red";
//         feedback.innerText = "Ops! Ocorreu um erro ao enviar.";
//     }
// });

// --- 2. VALIDAÇÃO E ENVIO DE FORMULÁRIO (SIMULADO) ---
const formulario = document.getElementById('formContato');
const feedback = document.getElementById('feedback');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Insira um e-mail válido.");
        return;
    }

    // --- LÓGICA DO "SIMULADO" ---
    feedback.style.color = "blue";
    feedback.innerText = "Processando envio...";
    
    // Desativa o botão para o usuário não clicar duas vezes
    const btn = document.getElementById('btnEnviar');
    btn.disabled = true;
    btn.innerText = "Enviando...";

    // Simula um atraso de 2 segundos (como se fosse uma requisição real)
    setTimeout(() => {
        // Feedback de Sucesso
        feedback.style.color = "green";
        feedback.innerText = "Mensagem enviada com sucesso!";
        
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
        
        // Limpa o formulário e reseta o botão
        formulario.reset();
        btn.disabled = false;
        btn.innerText = "Enviar";
    }, 2000); 
});


// --- 3. LÓGICA DE CERTIFICADOS (ACORDEÃO) ---
const botoesCertificado = document.querySelectorAll('.btn-certificado');

botoesCertificado.forEach(botao => {
    botao.addEventListener('click', function() {
        const pai = this.closest('li'); 
        const imagem = pai.querySelector('.img-certificado');
        const icone = this.querySelector('i');

        imagem.classList.toggle('mostrar');
        icone.style.transition = "transform 0.3s";
        icone.style.transform = imagem.classList.contains('mostrar') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});


// --- 4. LÓGICA DO MODAL (ZOOM DE IMAGEM) ---
const modal = document.getElementById("meuModal");
const imgModal = document.getElementById("imgModal");
const spanFechar = document.querySelector(".fechar");

const abrirModal = (src) => {
    modal.style.display = "block";
    imgModal.src = src;
};

const imagensValidas = document.querySelectorAll('#portfolio img, img.img-certificado');

imagensValidas.forEach(img => {
    // Garante que o cursor seja a lupa para indicar que é clicável
    img.style.cursor = "zoom-in";
    
    img.addEventListener('click', function() {
        abrirModal(this.src);
    });
});

// Fechar o modal
spanFechar.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// --- 5. LÓGICA DO MENU MOBILE ---
const btnMenu = document.getElementById('menu-mobile');
const navList = document.getElementById('nav-list');

btnMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Trocar o ícone de bars para X quando aberto
    const icone = btnMenu.querySelector('i');
    if (navList.classList.contains('active')) {
        icone.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icone.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Fechar o menu automaticamente ao clicar em um link
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        btnMenu.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
});