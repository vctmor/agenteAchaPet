<template>
  <div id="app">
    <header class="hero">
      <h1>Projeto AgenteAchaPet</h1>
    </header>

<nav class="navbar">
  <ul>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#protótipo">Protótipo</a></li>
    <li><a href="#financiamento">Financiamento</a></li>
  </ul>
</nav>

<section id="sobre" class="section">
  <h2>Sobre o Projeto</h2>
  <p>
    Quando um animal de estimação desaparece, não se perde apenas um pet, mas também um vínculo afetivo.
    Entendemos profundamente essa dor e ansiedade, por isso desenvolvemos o AgenteAchaPet, uma plataforma criada para unir pessoas que
    precisam de ajuda a quem deseja colaborar.
  </p>
  <p>
    Inspirado nas relações simbióticas do líquen e do lobo-guará, o projeto adota os conceitos de mutualismo e protocooperação.
    O líquen representa a harmonia entre espécies diferentes que se beneficiam mutuamente.
    Já o lobo-guará e a lobeira exemplificam uma parceria em que ambos ganham: o lobo se alimenta e protege sua saúde, enquanto dispersa as sementes da planta,
    ajudando-a a proliferar.
  </p>
</section>

<section id="protótipo" class="section alternate">
  <h2>O Protótipo</h2>
  <p>
    Este sistema é um protótipo, ou seja, seus dados permanecem apenas no navegador. Ele possui três funcionalidades principais:
  </p>
  <ul>
    <li>Formulário para iniciar uma busca.</li>
    <li>Cartaz de divulgação da busca.</li>
    <li>Listagem de buscas ativas.</li>
  </ul>
  <p>
    Uma nova funcionalidade está em desenvolvimento: no cartaz haverá uma opção para entrar em contato diretamente com quem iniciou a busca,
    permitindo oferecer apoio ou informar possíveis avistamentos.
  </p>
</section>

<section id="financiamento" class="section">
  <h2>Financiamento Coletivo</h2>
  <p>
    "Mas quanto custa!?" você deve estar se perguntando.
    Bom... para implementar as funcionalidades é grátis - só custa o meu tempo de vida! No entanto, há ferramentas ou serviços que é preciso primeiro pagar antes de implementar. Daí a importância da comunidade! Quanto mais pessoas financiando, menos custo para cada pessoa.
  </p>
  <p>
    O AgenteAchaPet é um projeto comunitário inspirado na cooperação do líquen e do lobo-guará.
    Assim como o fungo fornece estrutura e a alga fornece energia ao líquen, no projeto, os desenvolvedores constroem o sistema e a comunidade oferece o financiamento.
    E assim como o lobo-guará espalha as sementes da lobeira, nossa comunidade compartilha o projeto.
    Ambos os grupos são essenciais—sem um deles, o projeto não se sustenta.
  </p>
  <p>
    O financiamento coletivo vai contribuir de imediato para que o AgenteAchaPet possa funcionar de fato para todas as pessoas que precisarem.
    A partir daí, ao passo que mais pessoas forem aderindo, outras funcionalidades serão adicionadas.
    Algumas funcionalidades, como envio de mensagens via celular (necessárias para "botão do pânico" ou "notificação de avistamento"),
    exigem investimentos financeiros específicos. Portanto, contribuição comunitária será essencial para implementá-las.
  </p>
</section>

<footer class="footer">
  <p>© 2025 AgenteAchaPet - Todos os direitos reservados</p>
</footer>

  </div>
</template>

<style scoped>
/* Container principal centralizado com paleta de Oxóssi */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #c8e6c9;      /* Verde claro Oxóssi */
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(27, 94, 32, 0.2);
  font-family: sans-serif;
  color: #1b5e20;                 /* Verde escuro Oxóssi */
}

.navbar{

   display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #c8e6c9;
}

/* Títulos centralizados */
.content-container h2,
.content-container h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.content-container h2 {
  font-size: 2rem;
}

.content-container h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
}

/* Parágrafos e listas justificados, ocupando 100% da largura */
.content-container p,
.content-container ul {
  width: 100%;
  margin-bottom: 1rem;
  text-align: justify;
}

/* Estilo para lista com marcadores internos */
.content-container ul {
  list-style: disc inside;
}
</style>



