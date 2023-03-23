<template>
  <el-card class="box-card modal" >
    <el-form>
      <el-form-item label="modalData">
        <el-input v-model="titleData" name="title" />
      </el-form-item>
      <el-form-item v-if="route.path == '/recipes'" label="modalData">
        <el-input type="textarea" v-model="textData" name="text" />
      </el-form-item>     
        <el-button type="submit" @click="handlerSubmit($event)"
          >Сохранить</el-button
        >
      <el-button  @click="closeModal">Закрыть</el-button>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { useRoute } from 'vue-router'
import { addData } from '../store.js'
const route = useRoute()
const props = defineProps(['isOpen'])
const emit = defineEmits(['close-modal', 'add-item'])
const titleData = ref('')
const textData = ref(false)

function handlerSubmit() {
  const table = route.path.slice(1)
  const data = {
    title: titleData.value
  }
  if (route.path == '/recipes') {
    data.text = textData.value
  }
  addData(table, data)
  emit('add-item', data)
 closeModal()
}
function closeModal() {
  emit("update:isOpen", false);
  
}
</script>
