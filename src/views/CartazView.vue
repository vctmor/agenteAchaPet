<!-- src/views/CartazView.vue -->
<template>
  <div class="cartaz">
    <h2>Cartaz de Busca Ativa</h2>

    <p v-if="loading">Carregando…</p>
    <p v-else-if="error">Erro: {{ error }}</p>

    <div v-else-if="data" class="card">
      <h3 class="pet-name">{{ data.pet?.petName || 'Sem nome' }}</h3>

      <img v-if="imageSrc" :src="imageSrc" alt="Foto do pet" class="preview-img" />
      <div v-else class="no-photo">Sem foto cadastrada</div>

      <ul class="details">
        <li><strong>Cor:</strong> {{ data.pet?.color || '—' }}</li>
        <li><strong>Raça:</strong> {{ data.pet?.breed || '—' }}</li>
        <li><strong>Idade:</strong> {{ data.pet?.age ?? '—' }}</li>
        <li><strong>Contato:</strong> {{ data.reporter?.phone || data.reporter?.email || '—' }}</li>
        <li><strong>Slug:</strong> {{ data.slug }}</li>
      </ul>
    </div>

    <div v-else>
      <p>Cadastro não encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const API_BASE = import.meta.env.VITE_API_BASE + '/api/v1'; // ex.: https://agenteachapet.onrender.com/api/v1
const route = useRoute()

const loading = ref(true)
const error = ref(null)
const data = ref(null)

const imageSrc = computed(() => {
  const pet = data.value?.pet
  if (!pet) return null
  // 1) Preferir URL direta se o backend já montar
  if (pet.photoUrl) return pet.photoUrl
  // 2) Caso só exista o id da foto, usar o endpoint padronizado /api/v1/pet-searches/{id}/photo
  if (pet.photoId) return `${API_BASE}/pet-searches/${pet.photoId}/photo`
  return null
})

onMounted(async () => {
  try {
    const slug = route.params.slug
    const resp = await fetch(`${API_BASE}/pet-searches/${slug}`, {
      headers: { Accept: 'application/json' }
    })
    if (!resp.ok) throw new Error(`Falha ao carregar cartaz (${resp.status})`)
    data.value = await resp.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.cartaz { max-width: 720px; margin: 0 auto; padding: 16px; }
.card { background: #111; border: 1px solid #333; border-radius: 12px; padding: 16px; }
.pet-name { margin: 0 0 12px; font-size: 1.5rem; }
.preview-img { display: block; width: 100%; max-width: 420px; border-radius: 8px; }
.no-photo { padding: 24px; border: 1px dashed #555; border-radius: 8px; text-align: center; }
.details { list-style: none; padding: 0; margin-top: 12px; display: grid; gap: 6px; }
.details li { font-size: 0.95rem; }
</style>
