import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Family } from '@/types/familly'

export const useFamilyStore = defineStore('family', () => {
  const formData = ref<Family | null>(null)
  function setFormData(data: Family) {
    formData.value = data
  }

  return {
    formData,
    setFormData,
  }
})
