<script setup lang="ts">
import type { Family, NameAndAge } from '@/types/familly'
import plural from 'plural-ru'

defineProps<{
  family: Family | null
}>()

function isNotEmpty(value: string | number | null | undefined) {
  if (typeof value === 'string') return value.trim().length > 0
  if (typeof value === 'number') return true
  return false
}

const ageLabel = (age: number) => {
  if (!age || typeof age !== 'number') return ''
  return plural(age, 'год', 'года', 'лет')
}

const showData = (name: NameAndAge['name'], age: NameAndAge['age']) => {
  return !isNotEmpty(name) && !isNotEmpty(age)
    ? 'Имя и возраст не введены'
    : `${isNotEmpty(name) ? name : 'Имя не введено'}, ${isNotEmpty(age) ? `${age} ${ageLabel(age)}` : 'возраст не введен'}`
}
</script>

<template>
  <div v-if="family" class="flex flex-col gap-[60px] md:min-w-[40rem]">
    <div class="flex flex-col gap-[20px]">
      <div class="text-lg font-medium">Персональные данные</div>

      <div class="text-lg font-bold">
        {{ showData(family.name, family.age) }}
      </div>
    </div>

    <div class="flex flex-col gap-[20px]">
      <div class="text-lg font-medium">Дети</div>

      <div
        v-for="(child, index) in family.children"
        :key="index"
        class="p-4 self-start bg-gray-100 rounded text-lg font-bold"
      >
        {{ showData(child.name, child.age) }}
      </div>
    </div>
  </div>

  <div v-else class="text-gray-500">Нет данных для отображения</div>
</template>
