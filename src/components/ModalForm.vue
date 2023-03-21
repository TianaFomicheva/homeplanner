<template>
  <el-card class="box-card modal" v-if="props.modalOpen">
    <el-form>
      <el-form-item label="modalData">
        <el-input v-model="titleData" name="title" />
      </el-form-item>
      <el-form-item v-if="route.path == '/recipes'" label="modalData">
        <el-input type="textarea" v-model="textData" name="text" />
      </el-form-item>
      <el-form-item label="submit">
        <el-button type="submit" @click="handlerSubmit($event)"
          >Сохранить</el-button
        >
      </el-form-item>
      <button type="button" @click="modalOpen = false">Закрыть</button>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { addData } from '../store.js'
const route = useRoute()
const props = defineProps(['modalOpen'])
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
}
</script>
