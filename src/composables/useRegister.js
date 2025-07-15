import { ref, createApp } from 'vue'
import FormSearch from '@/views/FormSearch.vue'

const app = createApp(FormSearch)

const DEFAULT_PHOTO = new URL('@/assets/pp.png', import.meta.url).href;



const STORAGE_KEY = 'registros'
const instance = app.mount(document.createElement('div'))
instance.$.exposed.register()

export function useRegister() {

  const list = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

  if (!Array.isArray(list.value) || list.value.length === 0){

      list.value = [{
        search: {
          reporterRole: 'Tutor',
          disappearanceDate: Date.now(),
          location: 'Americana',
          additionalNotes: 'Gatinho muito fofinho,tem um coração nas costas',
          specialNeed: {
            description: 'Tem um coração nas costas',
          }
        },
        person: {
          personName: 'Águida Carneiro',
          phone: '123-456',
          email: 'aguida@mega'
        },
        pet: {
          petName: 'Pepê',
          breed: 'Diferenciada',
          color: 'algumas',
          age: '15',
          photo: DEFAULT_PHOTO
        }

      }];
    }


  const listing = () => list.value

  const ensureArray = () => {

    if(!Array.isArray(list.value)){

      if(typeof list.value === 'object' && list.value !== null){

        list.value = [list.value]

      }else {

        list.value = [];
      }
    }
  };

  const save = (item) => {

    ensureArray()

    if (!item || typeof item !== 'object'){

      throw new Error('Item inválido!');
    }

    item.id = Date.now()

    list.value.push(item)

    try {

      localStorage.setItem(STORAGE_KEY, JSON.stringify(list.value))

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



  return { listing, save, findById, remove }
}

