import { ref } from 'vue'

const STORAGE_KEY = 'registros'

export function useRegister() {

  const list = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])

  if (list.value && list.value.length){

    list.value

  } else {

      list.value = {
        search: {
          reporterRole: 'Tutor',
          disappearanceDate: Date.now(),
          location: 'são paulo',
          additionalNotes: '',
          specialNeed: {
            description: '',
          }
        },
        person: {
          personName: 'Maurício',
          phone: '',
          email: ''
        },
        pet: {
          petName: '',
          breed: '',
          color: '',
          age: '',
          photo: ''
        }

      };
  }


}
