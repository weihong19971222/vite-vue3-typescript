<script setup lang="ts">
    import promptWindow from "@/components/PromptWindow/index.vue"
    import { inject, ref, watch  } from "vue";

    import type { Ref } from 'vue'
    const store = inject("store");
    
    const errorMsg:Ref<string> = ref(store?.errorPromptMsg)
    const promptShow = ref(false)
    const setPromptShow = function(e:boolean){
      promptShow.value = e
      if(!e){
        errorMsg.value = ''
      }
    }
    watch(errorMsg, ( newValue ) => {
      if(newValue !== ''){
        promptShow.value = true
      }
    })

</script>

<template>
  <promptWindow
    @disableprompt="setPromptShow"
    :promptShow=promptShow
    promptTitle="錯誤訊息">
    <template #prompt-content >
        <div class="error-msg-content">{{ errorMsg }}</div>
    </template>  
  </promptWindow>
</template>

<style lang="scss" scoped>
.error-msg-content{
  white-space: pre;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  max-height: 400px;
}
</style>