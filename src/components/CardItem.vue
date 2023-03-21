<template >
  <el-space wrap role="listitem" style="margin-right: 0">
    <el-card v-if="!editMode"
      ><div>{{ element.title }}</div>
      <div class="card-footer">
        <div class="icon-wrapper" @click="editMode = true">
          <font-awesome-icon icon="pen" />
        </div>
        <div class="icon-wrapper" @click="removeCard">
          <font-awesome-icon icon="trash" />
        </div>
      </div>
    </el-card>
    <el-card v-else>
      <el-input v-model="titleData" />
      <div class="card-footer">
        <div class="icon-wrapper" @click="editMode = false">
          <font-awesome-icon icon="xmark" />
        </div>
        <div class="icon-wrapper" @click="editCardData">
          <font-awesome-icon icon="check" />
        </div>
      </div>
    </el-card>
  </el-space>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'
import { editData, removeData } from '../store.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps(['element', 'currentId'])
const emit = defineEmits(['edit-data'])
const element = computed(() => props.element || [])
const editMode = ref(false)
const titleData = ref(props.element.title)
function editCardData() {
  editData(route.path.slice(1) + '/' + props.element.id, {
    title: titleData.value,
    id: props.element.id
  })
}
function removeCard() {
  removeData(route.path.slice(1) + '/' + props.element.id)
}
</script>

