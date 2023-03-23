<template >
  <el-space v-if="!isDeleted" wrap role="listitem" style="margin-right: 0">
    <el-card v-if="!editMode"
      ><div>{{ curTitileData }}</div>
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
import {
  defineProps,
  defineEmits,
  computed,
  ref,
  getCurrentInstance
} from 'vue'
import { editData, removeData } from '../store.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps(['element', 'currentId'])
const element = computed(() => props.element || [])
const editMode = ref(false)
const titleData = ref(props.element.title)
const curTitileData = computed(() => titleData.value)
const isDeleted = ref(false)
function editCardData() {
  const obj = {
    title: titleData.value,
    id: props.element.id
  }
  editData(route.path.slice(1) + '/' + props.element.id, obj)
  editMode.value = false
}
function removeCard() {
  removeData(route.path.slice(1) + '/' + props.element.id)
  isDeleted.value = true
}
</script>

