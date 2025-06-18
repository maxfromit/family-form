<script setup lang="ts">
import type { Family, NameAndAge } from '@/types/familly'
import { checkStingOrNumberisNotEmpty } from '@/utils/isNotEmpty'
import plural from 'plural-ru'

defineProps<{
  family: Family | null
}>()

const ageLabel = (age: number | null | undefined) => {
  if (typeof age !== 'number' || isNaN(age)) return ''
  return plural(age, 'год', 'года', 'лет')
}

const formatNameAndAge = (name: NameAndAge['name'], age: NameAndAge['age']) => {
  return !checkStingOrNumberisNotEmpty(name) && !checkStingOrNumberisNotEmpty(age)
    ? 'Имя и возраст не введены'
    : `${checkStingOrNumberisNotEmpty(name) ? name : 'Имя не введено'}, ${checkStingOrNumberisNotEmpty(age) ? `${age} ${ageLabel(age)}` : 'возраст не введен'}`
}
</script>

<template>
  <div v-if="family" class="flex flex-col gap-[60px] md:min-w-[40rem]">
    <div class="flex flex-col gap-[20px]">
      <div class="text-lg font-medium">Персональные данные</div>

      <div class="text-lg font-bold">
        {{ formatNameAndAge(family.name, family.age) }}
      </div>
    </div>

    <div class="flex flex-col gap-[20px]">
      <div class="text-lg font-medium">Дети</div>

      <template v-if="family.children && family.children.length > 0">
        <div
          v-for="(child, index) in family.children"
          :key="index"
          class="p-4 self-start bg-gray-100 rounded text-lg font-bold"
        >
          {{ formatNameAndAge(child.name, child.age) }}
        </div>
      </template>

      <div v-else class="text-gray-500 p-4 self-start bg-gray-100 rounded text-lg font-bold">
        Дети не указаны
      </div>
    </div>
  </div>

  <div v-else class="text-gray-500">Нет данных для отображения</div>
</template>
