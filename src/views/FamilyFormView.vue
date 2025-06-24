<script setup lang="ts">
import FamilyForm from '@/components/FamilyForm.vue'
import { useFamilyStore } from '@/stores/family'

const { family, setFamily } = useFamilyStore()
</script>

<template>
  <FamilyForm :family="family" @submit="setFamily" />
</template>
