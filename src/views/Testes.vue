<template>
  <div id="app">
    <header class="hero">
      <h1>Projeto AgenteAchaPet</h1>
    </header>


<div class="prototype-warning" role="alert">
  ⚠️ <strong>Atenção:</strong> Você está acessando uma versão protótipo do AgenteAchaPet. Funcionalidades podem estar instáveis e sujeitas a alterações sem aviso prévio.
</div>

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
    Bom... para implementar as funcionalidades é grátis – só custa o meu tempo de vida! No entanto, há ferramentas ou serviços que precisam primeiro ser pagos antes de implementar. Quanto mais pessoas financiando, menos custo para cada um.
  </p>
  <p>
    O AgenteAchaPet é um projeto comunitário inspirado na cooperação do líquen e do lobo-guará. Assim como o fungo fornece estrutura e a alga fornece energia ao líquen, no projeto, os desenvolvedores constroem o sistema e a comunidade oferece o financiamento. E assim como o lobo-guará espalha as sementes da lobeira, nossa comunidade compartilha o projeto. Ambos os grupos são essenciais—sem um deles, o projeto não se sustenta.
  </p>
  <p>
    O financiamento coletivo permitirá que o AgenteAchaPet funcione plenamente para todas as pessoas que precisarem. À medida que mais pessoas aderirem, outras funcionalidades serão adicionadas. Algumas, como envio de mensagens via celular (para "botão do pânico" ou "notificação de avistamento"), exigem investimentos financeiros específicos. Portanto, a contribuição comunitária será essencial para implementá-las.
  </p>
</section>

<footer class="footer">
  <p>© 2025 AgenteAchaPet - Todos os direitos reservados</p>
</footer>


  </div>
</template>

<script>
export default {
  name: 'OnePageAgenteAchaPet',
};
</script>

<style scoped>
/* Paleta de cores Oxóssi */
#app {
  font-family: Arial, sans-serif;
  color: #1B5E20; /* verde floresta escuro */
  line-height: 1.6;
  background-color: #E8F5E9; /* verde suave */
}

.hero {
  background: #2E7D32; /* verde oxóssi médio */
  color: #FFFFFF;
  padding: 2rem;
  text-align: center;
}

.prototype-warning {
  width: 100%;
  background-color: #FFF8E1; /* amarelo suave para alerta */
  color: #856404; /* texto escuro */
  border: 1px solid #FFE082;
  padding: 1rem;
  text-align: center;
  margin: 1rem 0;
  border-radius: 6px;
  font-weight: bold;
}

.navbar {
  background: #1B5E20; /* verde floresta escuro */
}

.navbar ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
}

.navbar li {
  margin: 0 1rem;
}

.navbar a {
  color: #C5E1A5; /* verde claro vibrante */
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  color: #AED581; /* verde médio claro */
}

.section {
  padding: 2rem 1rem;
  background: #FFFFFF;
}

.alternate {
  background: #F1F8E9; /* verde muito claro */
}

.footer {
  text-align: center;
  padding: 1rem;
  background: #4CAF50; /* verde oxóssi claro */
  color: #FFFFFF;
  margin-top: 2rem;
}
</style>
