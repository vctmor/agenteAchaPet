<template>
  <div class="content-container">
     <div id="top"></div>
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
        Quando desaparece um <strong>ser de afetividade</strong> [também chamado de animal de estimação], não se trata somente de um corpo que não está mais ali, mas também um vínculo afetivo que modifica drásticamente.
        Entendemos profundamente essa dor e ansiedade, por isso desenvolvemos o <strong>AgenteAchaPet</strong>, uma plataforma que visa incentivar/facilitar pessoas criarem um risoma de apoio mútuo na busca daquele ente de afetividade [por enquanto cachorros].
      </p>
      <p>
        Inspirado nas relações simbióticas do líquen e do lobo-guará, o projeto adota os conceitos de mutualismo e protocooperação.
        O líquen representa a harmonia entre espécies diferentes que se beneficiam mutuamente.
        Já o lobo-guará e a lobeira exemplificam uma parceria em que ambos ganham: o lobo se alimenta e protege sua saúde com a lobeira, enquanto dispersa as sementes da planta,
        ajudando-a a proliferar.
      </p>
    </section>


    <div class="back-to-top">
          <a href="#navbar">↑ Voltar ao topo</a>
    </div>

  <section id="protótipo" class="section alternate">
    <h2>O Protótipo</h2>
    <p>
      A versão atual do <strong>AgenteAchaPet</strong>, esta que você está acessanddo, é um protótipo.
      Ou seja, o que você digitar não vai sair do seu computador é <a href="busca"  target="_blank">para você testar</a>, sentir e <a href="contato"  target="_blank">nos contar a sua experiêcia</a>.
      Ele possui três funcionalidades principais:
    </p>
    <ul>
      <li>
        <a href="busca"  target="_blank">Formulário para iniciar uma busca.</a>
      </li>

      <li>
        <router-link :to="cartazLink"  target="_blank">
          Cartaz de busca ativa
        </router-link>
      </li>

      <li><a href="listar"  target="_blank">Listagem de buscas ativas.</a></li>
    </ul>
    <p>
      Uma nova funcionalidade está em desenvolvimento: no cartaz haverá uma opção para entrar em contato diretamente com quem iniciou a busca,
      permitindo oferecer apoio ou informar possíveis avistamentos.
    </p>
  </section>

<div class="back-to-top">
      <a href="#top">↑ Voltar ao topo</a>
</div>

  <section id="financiamento" class="section">
    <h2>Financiamento Coletivo</h2>

    <p>
      Estamos preparando um <strong>Projeto de Financiamento Coletivo</strong> no <a href="https://www.catarse.me/" target="_blank">Catarse.me</a>
    </p>
    <p>
      "Mas quanto custa!?" você deve estar se perguntando.
      Bom... para implementar as funcionalidades é grátis - só custa o nosso tempo de vida!😅
      No entanto, há ferramentas ou serviços que é preciso primeiro pagar antes de implementar.
      Daí a importância da comunidade! Quanto mais pessoas financiando, menos custo para cada pessoa.
    </p>
    <p>
      Por exemplo, <strong>para o Projeto sair do casulo</strong> e funcionar de verdade, será preciso de <strong>R$ 300 por mês</strong> durante o tempo que a comunidadede quiser mantê-lo voando.
    </p>
     <p>
      Isto significa que se 30 pessoas contribuírem, fica R$10 pra cada uma e <strong>TODAS, eu disse TODAS</strong> as pessoas poderão utilizar.😌
    </p>

    <p> Mas se <strong>TODAS</strong> as pessoas contribuírem, por exemplo, 350 pessoas, fica R$ 0.86 centavos para cada uma!😱
    </p>

    <p><strong>Nossa! R$ 0.86 centavos, é ou não é uma verdadeira pechincha!?🤣</strong></p>

    <p>
      Neste sentido, o AgenteAchaPet é um projeto comunitário inspirado no líquen
      e na relação do lobo-guará com a planta lobeira.

    </p>

    <ul>
      <li>
        Para que o liquen exista, é preciso de cooperação: o fungo proporciona a estrutra enquanto a alga fornece energia ao sistema.
      Em relação ao <strong>AgenteAchaPete</strong> não é diferente: a <strong>Equipe de Desenvolvimento</strong> fornece a estrutura, enquanto a <strong>Comunidade</strong> financia, aplica energia, para que o sistema possa funcionar e ganhar vida.

      </li>
    </ul>
   <ul>
    <li>
      E assim como o lobo-guará espalha as sementes da lobeira ao se alimetar dela, nossa <strong>Comunidade</strong> compartilha o <strong>Projeto</strong>.
      Ambos os grupos são essenciais—sem um deles, o projeto não se sustenta.

    </li>
  </ul>
    <p>
      O financiamento coletivo vai contribuir de imediato para que o <strong>AgenteAchaPet</strong> possa funcionar de fato para todas as pessoas que precisarem.
      A partir daí, ao passo que mais pessoas forem aderindo, outras funcionalidades serão adicionadas.
      Algumas funcionalidades, como envio de mensagens via celular (necessárias para "botão do pânico" ou "notificação de avistamento"),
      exigem investimentos financeiros específicos. Portanto, contribuição comunitária será essencial para implementá-las.
    </p>
  </section>

  <div class="back-to-top">
        <a href="#navbar">↑ Voltar ao topo</a>
  </div>

  <footer class="footer">
    <p>© 2025 AgenteAchaPet - Todos os direitos reservados</p>
  </footer>


  </div>
</template>

<script setup>
import { computed } from 'vue'

const STORAGE_KEY = 'registros'



const cartazLink = computed(() => {

  const regs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

  if (regs.length > 0) {

    return { name: 'cartaz', params: {id: regs[0].id} }

  } else {

    // fallback: leva ao início ou a uma página “nenhum registro”
    return {name: 'inicial'}
  }
})

</script>

<style scoped>
/* Centraliza o formulário na página */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #e6f0e6; /* Verde claro (Oxóssi) */
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 64, 0, 0.2);
  font-family: sans-serif;
}


/* Ajustes para que a navbar ocupe 100% da largura da .content-container */
.navbar {
  width: 100%;
  position: relative;
  top: 0;
  /* background-color: inherit; ou defina outra cor de fundo */
  z-index: 10;
   left: 0;
  margin-bottom: 2rem;             /* Espaço abaixo da navbar */
}

.navbar ul {
  display: flex;
  justify-content: space-around;   /* Distribui igualmente os itens */
  padding: 0;
  margin: 0;
  list-style: none;
}

.navbar a {
  text-decoration: none;
  color: inherit;                  /* Usa a cor definida em .content-container */
  font-weight: bold;
  padding: 0.5rem 1rem;
}

/* Títulos centralizados */
.content-container h2,
.content-container h3 {
  text-align: center;
  margin-bottom: 1rem;
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
.content-container ul {
  width: 90%;
  margin-bottom: 1rem;
  text-align: justify;
  list-style: disc inside;
}

/* Estilo para lista com marcadores internos */
.content-container ul {
  list-style: disc inside;
}

</style>

