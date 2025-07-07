import { ref } from 'vue'

const STORAGE_KEY = 'registros'

export function useRegister() {

  const list = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

  const listing = () => list.value

  const save = (item) => {

    const items = listing()
    item.id = Date.now()

    items.push(item)

    try {

      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))

    } catch (error) {

      if (error instanceof DOMException && error.name === 'QuotaExceededError') {

        alert('⚠️ Limite de armazenamento atingido! Apague alguns registros para continuar.')

      } else {
        console.error('Erro ao salvar registro:', error)
      }
    }

    return item.id
  }

  const findById = (id) =>
    listing().find((c) => String(c.id) === String(id))

  const remove = (id, name) => {

    const confirmation = confirm(`Deseja remover o registro de "${name}"?`);

    if (!confirmation) return

    list.value = list.value.filter((item) => item.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.value))
  }

  return { list, listing, save, findById, remove }
}
