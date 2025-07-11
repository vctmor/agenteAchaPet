<template>
  <div class="content-container">

    <h1>Nos ache!</h1>
    <div class="paragraph">
          <p>
      Se você está aqui é porque sentiu curiosidade em relação ao Projeto. E isto é muito bacana!☺️🥹
    </p>
    <p>Atualmente, a <strong>Equipe de Desenvolvimento</strong> conta com duas pessoas: o <strong>Victor Moreira e a Águida</strong>!
    </p>
    <p>Esta equipe, ou melhor, dupla, está mega empolgada com o Projeto e trabalha nele todos os dias, inclusive agora no feriado [09/07/2025, 19h29]</p>
    <p>Neste sentido, não da pra mensurar a importância da sua devolutiva.</p>
    <p>Porque a partir das suas considerações a Primeira Versão do <strong>AgenteAchaPet</strong> vai ficar do jeito que a comunidade precisa.🥰</p>
    <p>Portanto, tira o dedo daí, credo,🤭 e esprema o botão <strong>"Enviar" </strong> convicção e contribua com a sua riquíssima opinião/proposta</p>
    </div>

    <form target="_blank" action="https://formsubmit.co/victormoreira@vivaldi.net" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Seu nome" required>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Seu email" required>
        </div>
        <div class="col">
          <input type="phone" name="phone" class="form-control" placeholder="Seu telefone" required>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Mensagem" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Enviar!!!</button>
  </form>

  </div>
</template>


<style scoped>
/* Container principal */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #E8F5E9;      /* Verde suave Oxóssi */
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(27, 94, 32, 0.2);
  font-family: Arial, sans-serif;
  color: #1B5E20;                 /* Texto em verde escuro */
}

/* Estilização dos campos de input, textarea e selects */
.content-container input,
.content-container textarea {
  width: 100%;
  width: 20rem;
  padding: 0.75rem 7rem;
  margin-bottom: 1.25rem;
  border: 1px solid #81C784;     /* Verde médio */
  border-radius: 6px;
  background-color: #FFFFFF;
  font-size: 1rem;
  color: #263238;
  box-sizing: border-box;
}

/* Textarea com altura padrão */
.content-container textarea {
  height: 150px;
  resize: vertical;
}

/* Botão principal */
.content-container button {
  padding: 0.75rem 1.5rem;
  background-color: #2E7D32;     /* Verde escuro Oxóssi */
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self:flex-start
}

/* Hover do botão */
.content-container button:hover {
  background-color: #1B5E20;     /* Verde mais profundo */
}

/* Parágrafos e listas justificados, ocupando 100% da largura */
.content-container p,
.content-container ul {
  width: 100%;
  margin-bottom: 0rem;
  text-align: justify;
}

.paragraph {
  margin-bottom: 2rem;
}

</style>


