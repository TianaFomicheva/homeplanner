<template>
<el-button @click="modalOpen = true">
      Добавить
    </el-button>

    <teleport to="body">
      <ModalForm :modal-open="modalOpen" :count="count"/>
    </teleport>
   <div  role="list" >  
            <draggable            
              :list="itemsList"
              name="slide"
              item-key="id"
              group="all-users"
              aria-live="polite"
              :data="itemsList"
              class="draggable-list"
              :class="{'draggable-card': itemComponent !== ArticleItem}"
              style="min-height: 800px"
              @end="onEnd($event)"
            >
              <template #item="{ element }">
                <div >
                  <component :is="itemComponent"
                    :element="element"
                    :index="index"
                    :current-id="currentId"
                    tabindex="0"
                    @edit-data="editData"
                    @focusin="onFocus(element.id)"
                  />
                </div>
              </template>
            </draggable>
          </div>
</template>

<script setup>
import { computed, ref, defineEmits } from 'vue'
import draggable from "vuedraggable";
import CardItem from './CardItem.vue'
import ArticleItem from './ArticleItem.vue'
import ModalForm from './ModalForm.vue'
import { useGlobalState } from "../store.js";
import router from '../router'
import { useRoute } from 'vue-router'

const emit = defineEmits(['on-focus', 'on-end', 'edit-data'])
const state = await useGlobalState();
const modalOpen = ref(false)
const route = useRoute()
const itemComponent = computed(()=> route.path == '/recipes' ? ArticleItem : CardItem)
const itemsList = computed(() => state?.[route.path.slice(1)] ? Object.values(state?.[route?.path.slice(1)]) :  [])
const count = itemsList.value.length
const currentId = ref(null);
const targetEl = ref(null);
const toEl = ref(null);

function onFocus(id) {
  emit('on-focus', id)
}

function onEnd($event) {
  emit('on-end', $event)
}

</script>


