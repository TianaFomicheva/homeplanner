<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="left" box-shadow>
        <navigation />
      </el-aside>
      <el-container>
        <el-main>
          <Suspense>
            <router-view @on-focus="onFocus" @on-end="onEnd"></router-view>
          </Suspense>
        </el-main>
      </el-container>
      <el-aside tabindex="-1">
        <el-menu active-text-color="#ffd04b" background-color="#545c64">
          <div style="display: flex">
            <draggable
              id="sd"
              :list="selectedList"
              name="slide1"
              tag="ul"
              item-key="index"
              :animation="200"
              group="all-users"
              style="min-height: 800px; margin: 0 auto; padding: 0"
              aria-live="polite"
              role="list"
              @end="onEnd($event)"
            >
              <template #item="{ element, index }">
                <div>
                  <selected-list
                    :element="element"
                    :index="index"
                    tabindex="0"
                    style="margin-right: -8px"
                    @focusin="onFocus(element.id)"
                  />
                </div>
              </template>
            </draggable>
          </div>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script setup>
import SelectedList from './SelectedList.vue'
import Navigation from './Navigation.vue'
import draggable from 'vuedraggable'
import { useGlobalState } from '../store.js'
import router from '../router'
import { computed, ref, onMounted, onUpdated } from 'vue'

const state = useGlobalState()
const selectedList = ref([])
const currentId = ref(null)
const targetEl = ref(null)
const toEl = ref(null)

function onEnd(e) {
  console.log('onEnd')
  if (e.target.id != e.to.id) {
    targetEl.value = e.target.id
    toEl.value = e.to.id
    setNewLists()
  } else {
    currentId.value = null
  }
}

function onFocus(id) {
  console.log('onFocus')
  currentId.value = id
}

function setNewLists() {
  switch ((targetEl.value, toEl.value)) {
    case ('notes', 'sd'):
      notesHandler()
      break
    case ('sd', 'notes'):
      selectedDealsHandler()
      break
  }
}
function notesHandler() {
  console.log('l-r')
  // custom logic
}

function selectedDealsHandler() {
  console.log('r-l')
  // custom logic
}
</script>


