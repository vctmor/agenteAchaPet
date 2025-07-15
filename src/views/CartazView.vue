<template>
  <div class="cartaz">
    <div v-if="data" class="cartaz-box">
      <h1>🧭 Uma Jornada Começa!</h1>
      <h2>🐾 <strong>{{ data.pet.petName }} </strong> foi avistado pela última vez em {{ data.search.location }}</h2>
      <p>Convocamos toda a comunidade para apoiar <strong>{{ data.person.personName }}</strong> neste momento delicado.</p>
      <p>Caso você tenha qualquer pista, sugestão, ou palavras de afirmação, não deixe de entrar em contato: </p>

      <ul>
        <li><strong>Email:</strong> {{ data.person.email }}</li>
        <li><strong>Telefone:</strong> {{ data.person.phone }}</li>
      </ul>

      <img :src="data.pet.photo" alt="Pet que está sendo procurado" v-if="data" class="pet-image" />

      <p>
        <strong>{{ data.pet.petName }} está fora do seu lar desde:</strong>
        {{ formatDate(data.search.disappearanceDate) }}
      </p>

      <p>Detalhes que fazem a diferença: {{ data.search.additionalNotes }}</p>

      <div class="share-row">
        <p class="share-link">
          📣 Compartilhe o cartaz em todas as suas redes: <a :href="link" target="_blank">{{ link }}</a>
        </p>
        <button @click="linkCopy">{{ copied ? 'Copiado!' : 'Copiar Link' }}</button>
      </div>
    </div>

    <div v-else class="not-found">
      <p>Cadastro não encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRegister } from '@/composables/useRegister'
import { ref, onMounted } from 'vue'

const route = useRoute()
const { findById } = useRegister()
const data = findById(route.params.id)

const link = ref('')
const copied = ref(false)

onMounted(() => {
  link.value = window.location.href
})

function linkCopy() {
  navigator.clipboard.writeText(link.value).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  }).catch(err => {
    console.error('Erro ao copiar link: ', err)
  })
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())
  return `${day}/${month}/${year}`
}
</script>

<style scoped>
.cartaz {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #e6f0e6; /* verde-claro Oxóssi */
  font-family: sans-serif;
}

.cartaz-box {
  background-color: #f8fff8;
  border: 1px solid #709775;
  border-radius: 12px;
  padding: 2rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 0 10px rgba(73, 121, 92, 0.2);
  text-align: center;
}

.cartaz-box h1,
.cartaz-box h2 {
  color: #49795c;
}

.pet-image {
  width: 100%; /* ✅ garante responsividade */
  height: auto; /* ✅ mantém proporção */
  max-width: 700px;
  margin: 1rem auto;
  display: block;
  border-radius: 10px;
  border: 2px solid #709775;
  object-fit: cover;
}

.share-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dfe6df;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  flex-wrap: wrap; /* ✅ permite quebra em telas pequenas */
}

.share-link {
  word-break: break-all;
  flex: 1; /* ✅ ocupa espaço disponível */
}

.share-link a {
  color: #35684c;
  text-decoration: none;
}

.share-row button {
  background-color: #49795c;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem; /* ajuste mobile */
}

.share-row button:hover {
  background-color: #35684c;
}

.not-found {
  text-align: center;
  font-style: italic;
  color: #6b4e3d;
}

/* ✅ MOBILE: ajustes para telas pequenas */
@media (max-width: 600px) {
  .cartaz {
    padding: 1rem;
  }

  .cartaz-box {
    padding: 1rem;
  }

  .share-row {
    flex-direction: column;
    align-items: stretch;
  }

  .share-row button {
    width: 100%;
    margin-top: 0.5rem;
  }

  .share-link {
    width: 100%;
  }

  .pet-image {
    width: 100%;
    height: auto;
  }
}
</style>
