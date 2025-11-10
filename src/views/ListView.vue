<template>
  <div class="listagem">
    <h2>Buscas Ativas</h2>

    <!-- estados -->
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error" class="erro">Falha na requisição: {{ error }}</div>
    <div v-else-if="list.length === 0">Nenhum cadastro ainda.</div>

    <!-- lista -->
    <div
      v-else
      v-for="item in list"
      :key="item.id || item.search?.id"
      class="registro"
    >
      <img
        :src="item.pet?.photoUrl || placeholderImg"
        class="preview-img"
        alt="Foto do pet"
      />

      <div class="info">
<<<<<<< HEAD
        <p><strong>Nome do pet:</strong> {{ item.pet?.petName || '—' }}</p>
        <p><strong>Nome do tutor/relator:</strong> {{ item.reporter?.name || '—' }}</p>
        <p><strong>Papel do relator:</strong> {{ item.reporter?.role || '—' }}</p>
        <p>
          <strong>Data do último avistamento:</strong>
          {{ formatDate(item.sighting?.lastSeenAt) }}
        </p>
        <p><strong>Local do último avistamento:</strong> {{ item.sighting?.lastSeenPlace || '—' }}</p>
      </div>

      <div class="acoes">
        <router-link :to="`/cartaz/${item.slug}`">📄 Visualizar Cartaz de Busca</router-link>
=======
        <p><strong>Nome do pet:</strong> {{ data.pet.petName }}</p>
        <p><strong>Quem convoca a busca:</strong> {{ data.person.personName }}</p>
        <p><strong>Papel do relator:</strong> {{ data.search.reporterRole }}</p>
        <p><strong>Data do último avistamento:</strong> {{ formatDate(data.search.disappearanceDate) }}</p>
        <p><strong>Local do último avistamento:</strong> {{ data.search.location }}</p>
      </div>

      <div class="acoes">
        <router-link :to="`/cartaz/${data.id}`">📄 Visusalizar Cartaz</router-link>
        <button @click="remove(data.id, data.pet.petName)">❌ Apagar</button>
>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiUrl } from '@/utils/api'

<<<<<<< HEAD
let list = ref([])
const loading = ref(false)
const error = ref(null)

// use uma imagem neutra se não vier photoUrl
const placeholderImg =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160"><rect width="100%25" height="100%25" fill="%23ddd"/><text x="50%25" y="50%25" font-size="16" text-anchor="middle" fill="%23666" dy=".3em">Sem foto</text></svg>'


async function loadPets(){

  loading.value = true
  error.value = null

  try {

      const endPointListPets = apiUrl('pet-searches');

    const resp = await fetch(endPointListPets, { method:'GET'});

    if (!resp.ok) throw new Error(`HTTP: ${resp.status}`);

    const  json = await resp.json();

    // garanta que é um array
    list.value = Array.isArray(json) ? json : (json?.content ?? [])

    console.log(list);
    console.log(list.value);
    console.log(list.value.pet?.name);

  } catch (e) {

   error.value = e.message || String(e)
   list.value = []

  } finally {
    loading.value = false
  }
}
// window.addEventListener('load', loadPets)
onMounted(loadPets)
=======
const { listing, remove} = useRegister()
const list = computed(() => listing())
>>>>>>> 90567f280c80e025e637b10dbfb7be7a1d029bc2

function formatDate(dateString) {
  if (!dateString) return '—'
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return '—'
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}


</script>

<style scoped>
.listagem {
  max-width: 800px;
  margin: auto;
  font-family: sans-serif;
  padding: 1rem;
  color: #2f4f2f;
}

h2 {
  text-align: center;
  color: #35684c;
  margin-bottom: 1.5rem;
}

.registro {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background-color: #f4fbf4;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 64, 0, 0.1);
  align-items: center;
}

.preview-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #709775;
}

.info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.acoes {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

button {
  background-color: #49795c;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #355e46;
}

a {
  color: #2e6c49;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
