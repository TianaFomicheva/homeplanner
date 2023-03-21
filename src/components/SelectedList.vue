<template>
  <el-space
    wrap
    role="listitem"
    tabindex="0"
    @focus="selectedDealsHandler(el.id)"
  >
    <el-card>
      {{ el.title }}
    </el-card>
  </el-space>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps(['element', 'index'])
const el = computed(() => props.element || {})

const emit = defineEmits(['selected-deals-handler'])

function selectedDealsHandler(id) {
  console.log('dragend')
  emit('selected-deals-handler', id)
}
</script>