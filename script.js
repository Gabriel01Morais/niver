const fotos = [
    "01.jpg",
    "02.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg"
  ];
  
  setInterval(() => {
    const aleatoria = fotos[Math.floor(Math.random() * fotos.length)];
    document.getElementById("foto").src = aleatoria;
  }, 5000);
  
  const dataInicio = new Date(2005, 3, 33); // 28 de abril de 2005 (mês 3 = abril)
  
  function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;
  
    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    // Calculando anos e dias restantes de forma simplificada
    const anos = Math.floor(dias / 365); // Calculando anos inteiros
    const diasRestantes = dias % 365; // Calculando os dias restantes após calcular os anos
  
    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;
  
    document.getElementById("contador").textContent =
      `${anos} anos, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
  }
  
  setInterval(atualizarContador, 1000);
  atualizarContador();
  
  // Restante do código para animação, botões e outros efeitos...
  
  
  // Animação de corações e rosas
  const canvas = document.getElementById('efeitosCanvas');
  const ctx = canvas.getContext('2d');
  
  const largura = canvas.width = window.innerWidth;
  const altura = canvas.height = window.innerHeight;
  
  const emojis = ['💖', '🌹', '❤️'];
  const particulas = [];
  
  for (let i = 0; i < 50; i++) {
    particulas.push({
      x: Math.random() * largura,
      y: Math.random() * -altura,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      tamanho: Math.random() * 24 + 20,
      velocidade: Math.random() * 1.5 + 0.5
    });
  }
  
  function desenhar() {
    ctx.clearRect(0, 0, largura, altura);
  
    particulas.forEach(p => {
      ctx.font = `${p.tamanho}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
      p.y += p.velocidade;
  
      if (p.y > altura) {
        p.y = -50;
        p.x = Math.random() * largura;
      }
    });
  
    requestAnimationFrame(desenhar);
  }
  
  desenhar();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  let tes = document.getElementById('tes');
  function Clicar() {
    tes.innerHTML = 'Feliz aniversário, meu amor! Que hoje seja o início de uma nova e linda jornada, e que os próximos anos sejam os mais incríveis da sua vida. Desejo que sejam anos repletos de felicidade, conquistas e realizações, onde você possa alcançar tudo o que sonha e ser plenamente feliz.';
  }
  
  const botao = document.getElementById('botao1');
  
  function moverBotao() {
    const larguraJanela = window.innerWidth - botao.offsetWidth;
    const alturaJanela = window.innerHeight - botao.offsetHeight;
  
    const novoX = Math.random() * larguraJanela;
    const novoY = Math.random() * alturaJanela;
  
    botao.style.left = novoX + 'px';
    botao.style.top = novoY + 'px';
  }
  
  // Move o botão a cada 1 segundo
  // setInterval(moverBotao, 1000);
  
  const botao2 = document.getElementById('botao2');
  function moverBotao02() {
    const larguraJanela = window.innerWidth - botao2.offsetWidth;
    const alturaJanela = window.innerHeight - botao2.offsetHeight;
  
    const novoX = Math.random() * larguraJanela;
    const novoY = Math.random() * alturaJanela;
  
    botao2.style.left = novoX + 'px';
    botao2.style.top = novoY + 'px';
  }
  
  const botao3 = document.getElementById('botao3');
  function moverBotao03() {
    const larguraJanela = window.innerWidth - botao2.offsetWidth;
    const alturaJanela = window.innerHeight - botao2.offsetHeight;
  
    const novoX = Math.random() * larguraJanela;
    const novoY = Math.random() * alturaJanela;
  
    botao3.style.left = novoX + 'px';
    botao3.style.top = novoY + 'px';
  }
  
  const botao4 = document.getElementById('botao4');
  function moverBotao04() {
    const larguraJanela = window.innerWidth - botao2.offsetWidth;
    const alturaJanela = window.innerHeight - botao2.offsetHeight;
  
    const novoX = Math.random() * larguraJanela;
    const novoY = Math.random() * alturaJanela;
  
    botao4.style.left = novoX + 'px';
    botao4.style.top = novoY + 'px';
  }
  
  setInterval(moverBotao, 1000);
  setInterval(moverBotao02, 1000);
  setInterval(moverBotao03, 1000);
  setInterval(moverBotao04, 1000);
  
  var but = document.getElementById('buttontx');
  var tt1x = document.getElementById('tt1');
  function love() {
    tt1x.innerText = 'Feliz vida, meu amor! Você é uma mulher incrível, com uma inteligência única, uma beleza deslumbrante e uma elegância sem igual. Assim como o vinho, a cada dia que passa, você se torna ainda mais maravilhosa. Você é simplesmente esplêndida';
  }
  