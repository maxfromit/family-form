<script setup lang="ts">
import FamilyPreview from '@/components/FamilyPreview.vue'
import { useFamilyStore } from '@/stores/family'

const { family } = useFamilyStore()
</script>

<template>
  <FamilyPreview :family="family" />
</template>
