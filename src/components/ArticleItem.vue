<template >
  <div v-if="!editMode" class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="element.title" name="1">
        <div>
          {{ element.text }}
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="card-footer">
      <div class="icon-wrapper" @click="editMode = true">
        <font-awesome-icon icon="pen" />
      </div>
      <div class="icon-wrapper" @click="removeCard">
        <font-awesome-icon icon="trash" />
      </div>
    </div>
  </div>
  <el-card v-else>
    <el-form>
      <el-form-item label="modalData">
        <el-input v-model="titleData" name="title" />
      </el-form-item>
      <el-form-item v-if="route.path == '/recipes'" label="modalData">
        <el-input type="textarea" v-model="textData" name="text" />
      </el-form-item>
      <div class="card-footer">
        <div class="icon-wrapper" @click="editMode = false">
          <font-awesome-icon icon="xmark" />
        </div>
        <div class="icon-wrapper" @click="editCardData">
          <font-awesome-icon icon="check" />
        </div>
      </div>
    </el-form>
  </el-card>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'
import { editData, removeData } from '../store.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps(['element', 'currentId'])
const element = computed(() => props.element || [])
const editMode = ref(false)
const titleData = ref(props.element.title)
const textData = ref(props.element.text)
function editCardData() {
  editData(route.path.slice(1) + '/' + props.element.id, {
    title: titleData.value,
    text: textData.value,
    id: props.element.id
  })
}
function removeCard() {
  removeData(route.path.slice(1) + '/' + props.element.id)
}
</script>