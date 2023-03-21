<template >
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="element.title" name="1">
        <div>
          {{ element.text }}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps(['element', 'currentId'])
const element = computed(() => props.element || [])
</script>

