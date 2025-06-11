<script setup lang="ts">
import FamilyPreview from '@/components/FamilyPreview.vue'
import { useFamilyStore } from '@/stores/family'

const { formData } = useFamilyStore()
</script>

<template>
  <FamilyPreview :family="formData" />
</template>
