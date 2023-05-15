<script setup lang="ts">
    import { btnStyle } from '@/hooks/componentColor.ts'
    import { watch } from 'vue';

    const props = defineProps({
        btnStyle: { type: String, default: 'blue',value:['darkBlue','terraYellow','blue','blank']},
        btnSize: { type: String, default: 'normal',value:['small','normal','large']},
        onClick: { type: Function, default:() => {}},
        isDisabled: { type: Boolean, default: false },
        isLoading: { type: Boolean, default: false },
        className: { type: String, default: null }
    })
    let btnPaddingSize = {}
    switch(props.btnSize){
      case 'small':
        btnPaddingSize = {"padding":"5px 18px"}
        break
      case 'large':
        btnPaddingSize = {"padding":"15px 54px"}
        break
      default:
        btnPaddingSize = {"padding":"10px 36px"}
    }
    let defStyle = {...btnStyle((props.isDisabled || props.isLoading),props.btnStyle),...btnPaddingSize}
    watch(() => props.isLoading, () => {
        defStyle = {...btnStyle((props.isDisabled || props.isLoading),props.btnStyle),...btnPaddingSize}
    });
    watch(() => props.isDisabled, () => {
        defStyle = {...btnStyle((props.isDisabled || props.isLoading),props.btnStyle),...btnPaddingSize}
    })    
    
</script>

<template>
    <button
        :disabled="props.isDisabled || props.isLoading"
        v-bind:style="defStyle"
        :class="props.className"
        @click="props.onClick">
        <div v-show="props.isLoading" class="loader"></div>
        <slot>Default</slot>
    </button>
</template>
  
<style lang="scss" scoped>
    @import '@/assets/scss/button.scss';
</style>

