<script setup lang="ts">
import FamilyForm from '@/components/FamilyForm.vue'
import { useFamilyStore } from '@/stores/family'

const { formData, setFormData } = useFamilyStore()
</script>

<template>
  <FamilyForm :family="formData" @submit="setFormData" />
</template>
