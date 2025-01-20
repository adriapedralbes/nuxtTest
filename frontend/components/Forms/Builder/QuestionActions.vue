<script setup>
import { ArrowPathIcon, PencilIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  isLoading: Boolean
})

const emit = defineEmits(['edit', 'regenerate'])

const handleEdit = () => {
  emit('edit', props.question)
}

const handleRegenerate = () => {
  emit('regenerate', props.question)
}
</script>

<template>
  <div class="flex space-x-2">
    <button
      @click="handleEdit"
      class="text-gray-500 hover:text-primary flex items-center space-x-1 text-sm"
      :disabled="isLoading"
    >
      <PencilIcon class="w-4 h-4" />
      <span>Editar</span>
    </button>
    <button
      @click="handleRegenerate"
      class="text-gray-500 hover:text-primary flex items-center space-x-1 text-sm"
      :disabled="isLoading"
    >
      <ArrowPathIcon class="w-4 h-4" :class="{ 'animate-spin': isLoading }" />
      <span>Regenerar</span>
    </button>
  </div>
</template>