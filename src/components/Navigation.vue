<template>
  <el-row class="tac">
    <el-col>
      <el-menu background-color="#7d868f">
        <el-menu-item v-for="(i, index) in chapters" :key="index">
          <router-link :to="i.link">
            <el-link style="--el-link-text-color: white">
              {{ i.title }}
            </el-link>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import chapters from '../data/chapters.json'
</script>
