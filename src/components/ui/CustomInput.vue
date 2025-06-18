<script setup lang="ts">
import { ref, computed } from 'vue'
import { checkStingOrNumberisNotEmpty } from '@/utils/checkStingOrNumberisNotEmpty'

defineProps<{
  type: string
  placeholder: string
}>()

const [model, modifiers] = defineModel('model')

console.log(modifiers) // { capitalize: true }

const isFocused = ref(false)
const hasValue = computed(() => checkStingOrNumberisNotEmpty(model.value))
const floatLabel = computed(() => isFocused.value || hasValue.value)
</script>

<template>
  <!-- <input :type="type" :placeholder="placeholder" v-model="model" /> -->

  <div class="relative">
    <input
      :type="type"
      v-model="model"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :id="placeholder"
      class="w-full block px-2 pt-5 pb-2 border peer-focus-visible:rounded border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary peer"
    />
    <label
      :for="placeholder"
      class="absolute left-2 transition-all duration-200 pointer-events-none"
      :class="{
        'top-2 z-10 text-xs  text-gray-500   peer-focus:text-primary': floatLabel,
        'top-4 text-gray-500': !floatLabel,
      }"
    >
      {{ placeholder }}
    </label>
  </div>
</template>
