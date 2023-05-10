<script setup lang="ts">
    import promptWindow from "@/components/PromptWindow/index.vue"
    import { ref, watch } from "vue";
    import { useStore } from 'vuex'

    const store = useStore()    
    const promptShow = ref(false)
    const setPromptShow = function(e:boolean){
      promptShow.value = e
      if(!e){
        store.commit('updateMsg','')
      }
    }
    watch(store.state.errorPromptMsg, ( newValue ) => {            
      if(newValue.msg !== ''){
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
        <div class="error-msg-content">{{ store.state.errorPromptMsg.msg }}</div>
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