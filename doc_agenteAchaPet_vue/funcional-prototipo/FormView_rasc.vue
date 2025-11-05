<!-- ActivateSearchForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="form-container">
    <h2>🎯 Ative uma Jornada de Busca</h2>
    <p>Seguimos no encalço! - <strong>AgenteAchaPet!</strong></p>

    <h3>👤 Etapa 1: Quem está convocando a travessia!?</h3>
    <input v-model.trim="person.name" placeholder="Como prefere que te chame" required />

    <select v-model="search.reporterRole" required>
      <option disabled value="">Qual vai ser seu papel nesta jornada?</option>
      <option value="TUTOR">Tutor</option>
      <!-- <option value="BASTIAN">Bastião</option> -->
      <option value="SENTINEL">Sentinela</option>
      <option value="RESCUER">Guardião</option>
    </select>

    <input v-model.trim="person.phone" placeholder="Seu melhor contato celular" required />
    <input v-model.trim="person.email" type="email" placeholder="O e-mail que você mais acessa" required />

    <h3>🐾 Etapa 2: Quem estamos buscando?</h3>
    <input v-model.trim="pet.name" placeholder="atende por..." required />
    <input v-model.trim="pet.color" placeholder="Cor" required />
    <input v-model.trim="pet.breed" placeholder="Raça" required />
    <input v-model.number="pet.age" placeholder="Idade" type="number" min="0" required />

    <div>
      <label for="necessidades">Tem necessidades especiais?</label>
      <textarea
        id="necessidades"
        v-model.trim="search.specialNeed.description"
        placeholder="Como comorbidades, se toma remédios..."
      />
    </div>

    <h3>📍 Etapa 3: Quando e onde foi visto pela última vez?</h3>
    <input v-model="search.disappearanceDate" type="datetime-local" required />
    <input v-model.trim="search.location" placeholder="Endereço aproximado." required />

    <label for="additionalNotes">Conte-nos mais detalhes que possam ajudar na empreitada</label>
    <textarea
      id="additionalNotes"
      v-model.trim="search.additionalNotes"
      placeholder="Com empatia — nada de assustar a pessoa tutora 😉"
    />

    <div>
      <label for="photo">Foto do Pet:</label>
      <input id="photo" type="file" accept="image/*" @change="previewImage" required />
    </div>

    <div v-if="preview" class="image-preview">
      <img :src="preview" alt="Prévia da imagem" />
    </div>

    <div>
      <label for="button">Respira! Vamos juntos?!!?!?</label>
      <button
        id="button"
        type="submit"
        :disabled="submitting"
        :aria-busy="submitting ? 'true' : 'false'"
      >
        {{ submitting ? 'O caminho se faz caminhando…' : 'JÁ!' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const API_BASE =
  import.meta.env.VITE_API_URL?.replace(/\/+$/, '') || 'http://localhost:8080'

const submitting = ref(false)
const image = ref(null)
const preview = ref(null)

const person = reactive({
  name: '',
  phone: '',
  email: ''
})

const pet = reactive({
  name: '',
  color: '',
  breed: '',
  age: null
})

// manter a estrutura esperada pelo backend
const search = reactive({
  reporterRole: '',
  disappearanceDate: '',
  location: '',
  additionalNotes: '',
  specialNeed: {
    description: ''
  }
})

function previewImage(e) {
  const file = e.target.files?.[0]
  if (!file) return
  image.value = file
  preview.value = URL.createObjectURL(file)
}

async function openCartaz(result) {
  // backend retorna { slug: "..." }
  const url = `/cartaz/${result.slug}`
  window.open(url, '_blank')
}

async function submitForm() {
  if (submitting.value) return
  try {
    submitting.value = true

    const payload = {
      person: { ...person },
      pet: { ...pet },
      search: {
        reporterRole: search.reporterRole,
        disappearanceDate: search.disappearanceDate,
        location: search.location,
        specialNeed: { ...search.specialNeed },
        additionalNotes: search.additionalNotes
      }
    }

    const formData = new FormData()
    formData.append('data', new Blob([JSON.stringify(payload)], { type: 'application/json' }))
    if (image.value) formData.append('photo', image.value)

    const resp = await fetch(`${API_BASE}/pet-searches`, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })

    if (!resp.ok) {
      // tenta extrair mensagem útil
      const text = await resp.text().catch(() => '')
      throw new Error(text || `HTTP ${resp.status}`)
    }

    const result = await resp.json()
    alert('Cadastro realizado com sucesso!')
    await openCartaz(result)
  } catch (err) {
    console.error(err)
    alert('Erro ao cadastrar anúncio.')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.form-container { display: grid; gap: 0.75rem; max-width: 720px; }
.image-preview img { max-width: 280px; border-radius: 8px; display: block; }
button[disabled] { opacity: 0.7; cursor: not-allowed; }
</style>
