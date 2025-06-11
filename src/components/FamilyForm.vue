<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from '@/components/ui/CustomInput.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import type { Family, NameAndAge } from '@/types/familly'

const props = defineProps<{
  family: Family | null
}>()

function createDefaultFamily(): Family {
  return { ...({} as Family), children: [] as NameAndAge[] }
}

const formData = ref<Family>(props.family ?? createDefaultFamily())

function removeChild(index: number) {
  formData.value.children.splice(index, 1)
}

const showBanner = ref(false)

const emit = defineEmits<{
  (e: 'submit', val: Family): void
}>()

function handleSubmit() {
  emit('submit', formData.value)
  showBanner.value = true
  setTimeout(() => {
    showBanner.value = false
  }, 2000)
}
</script>

<template>
  <div class="flex flex-col gap-[30px] md:min-w-[40rem]">
    <div class="flex flex-col gap-[20px]">
      <div class="text-lg font-medium">Персональные данные</div>

      <div class="flex flex-col gap-[10px]">
        <CustomInput v-model:model="formData.name" type="text" placeholder="Имя" />

        <CustomInput v-model:model="formData.age" type="number" placeholder="Возраст" />
      </div>
    </div>

    <div class="flex flex-col gap-[10px]">
      <div class="flex flex-row justify-between items-center gap-3">
        <div class="text-lg font-medium">Дети (макс. 5)</div>

        <button
          v-if="!formData.children || formData.children?.length < 5"
          class="py-2 px-4 border-2 rounded-full border-primary text-primary hover:bg-gray-100 hover:text-primary/80 transition-colors active:bg-gray-50"
          @click="formData.children?.push({} as NameAndAge)"
        >
          <div class="flex flex-row justify-center items-center gap-1 md:gap-2">
            <PlusIcon :width="18" :height="18" />
            <div>Добавить ребенка</div>
          </div>
        </button>
      </div>

      <div
        v-for="(child, index) in formData.children"
        :key="index"
        class="flex flex-row gap-[20px] justify-between"
      >
        <CustomInput v-model:model="child.name" type="text" placeholder="Имя" class="flex-1" />

        <CustomInput v-model:model="child.age" type="number" placeholder="Возраст" class="flex-1" />

        <button
          class="text-primary hover:text-primary/80 transition-colors"
          @click="removeChild(index)"
        >
          Удалить
        </button>
      </div>
    </div>

    <div>
      <button
        class="py-2 px-5 bg-primary rounded-full border-2 border-primary text-white hover:bg-primary/80 transition-colors active:bg-primary/90"
        @click="handleSubmit()"
      >
        Сохранить
      </button>
    </div>
  </div>

  <transition name="slide-fade">
    <div v-show="showBanner" class="fixed bottom-20 py-2 px-4 bg-green-700 text-white rounded-full">
      <div>Изменения сохранены</div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
