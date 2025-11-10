<!-- ActivateSearchForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="form-container">
    <h2>🎯 Ative uma Jornada de Busca</h2>
    <p>Seguimos no encalço! - <strong>AgenteAchaPet!</strong></p>

    <h3>👤 Etapa 1: Quem está convocando a travessia!?</h3>
    <input v-model.trim="person.name" placeholder="Como prefere que te chame" required />

    <select v-model.trim="search.reporterRole" required>
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
        v-model.trim="search.specialNeed"
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

<<<<<<< HEAD
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
import { useRouter } from 'vue-router'
import { apiUrl } from '@/utils/api'

const router = useRouter()

const submitting = ref(false)
const image = ref(null)
const preview = ref(null)
=======
      </div>

      <input type="file" @change="loadImage" accept="image/*" />

      <div class="image-wrapper">
        <img
          v-if="preview"
          :src="preview"
          alt="Prévia da imagem"
        />
        <p v-else>Nenhuma foto selecionada</p>
      </div>

      <button type="button" @click="exampleRegistration">Preencher com Exemplo</button>
      <button type="button" @click="resetForm">Limpar Formulário</button>
      <button type="submit">Convocar Busca</button>
    </form>
  </div>
</template>

<script setup>


import { useRouter } from 'vue-router'
import { useRegister } from '@/composables/useRegister'
import {
  personName,
  phone,
  email,
  reporterRole,
  disappearanceDate,
  location,
  additionalNotes,
  specialNeedDescription,
  petName,
  breed,
  color,
  age,
  image,
  preview
} from '@/composables/formState'

import { exampleRegistration } from '@/composables/exampleRegistration'
import { useFormReset } from '@/composables/useFormReset'

const { resetForm } = useFormReset({
  personName,
  phone,
  email,
  reporterRole,
  disappearanceDate,
  location,
  additionalNotes,
  specialNeedDescription,
  petName,
  breed,
  color,
  age,
  image,
  preview
})
>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2

const person = reactive({
  name: '',
  phone: '',
  email: '',
  // role: 'REPORTER'
})

const pet = reactive({
  name: '',
  color: '',
  breed: '',
  age: null
})

<<<<<<< HEAD
// manter a estrutura esperada pelo backend
const search = reactive({
  reporterRole: '',
  disappearanceDate: '',
  location: '',
  additionalNotes: '',
  specialNeed: ''
})
=======
  let file = event.target.files[0]
>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2

function previewImage(e) {
  const file = e.target.files?.[0]

  if (!file) return

  image.value = file
  preview.value = URL.createObjectURL(file)
}

<<<<<<< HEAD
async function openCartaz(result) {

  const slug = result?.slug ?? result?.id

  if (!slug) throw new Error('Resposta sem slug/id. Arrume o backend.')

  await router.push({ name: 'cartaz', params: { slug } })
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
        specialNeed: search.specialNeed ,
        additionalNotes: search.additionalNotes
      }
    }

    const formData = new FormData()
=======

// exampleRegistration()

function register() {

  const saveRegister = (photoData) => {

    const newRegister = {
      search: {
      reporterRole: reporterRole.value,
      disappearanceDate: disappearanceDate.value,
      location: location.value,
      additionalNotes: additionalNotes.value,
      specialNeed: {
        description: specialNeedDescription.value
        }
      },
      person: {
        personName: personName.value,
        phone: phone.value,
        email: email.value
      },
      pet: {
        petName: petName.value,
        breed: breed.value,
        color: color.value,
        age: age.value,
        photo: photoData
      }
    }

    const id = save(newRegister)
    const route = router.resolve({name: 'cartaz', params: { id }});

    window.open(route.href, '_blank');
  }
>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2

    const endPonitPetSearches = apiUrl('pet-searches');

<<<<<<< HEAD
    formData.append('data', new Blob([JSON.stringify(payload)], { type: 'application/json' }))

    if (image.value) formData.append('photo', image.value)

    const resp = await fetch(endPonitPetSearches, {
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
=======
    const reader = new FileReader()

    reader.onload =() =>{

      saveRegister(reader.result)
    }

    reader.readAsDataURL(image.value)
>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.form-container { display: grid; gap: 0.75rem; max-width: 720px; }
.image-preview img { max-width: 280px; border-radius: 8px; display: block; }
button[disabled] { opacity: 0.7; cursor: not-allowed; }
=======
/* Centraliza o formulário na página */
.form-container {
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

h3{
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Estilização dos blocos de entrada */
.form-container div {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
}

/* Label com destaque */
label {
  margin-bottom: 0.5rem;
  font-size: 15px;
  font-weight: bold;
  color: #2f4f2f;
}

/* Estilo unificado para inputs e selects */
input,
select,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #709775; /* tom de folha */
  border-radius: 6px;
  background-color: #f8fff8;
  box-sizing: border-box;
}

/* Textarea com altura aumentada */
textarea {
  height: 150px;
  resize: vertical;
}

/* Botão de envio */
button {
  align-self: flex-start;
  padding: 10px 20px;
  background-color: #49795c; /* verde profundo Oxóssi */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Hover no botão */
button:hover {
  background-color: #35684c;
}

/* Pré-visualização da imagem */
.image-wrapper {
  width: 200px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2
</style>
