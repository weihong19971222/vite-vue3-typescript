<script setup lang="ts">
    import { btnStyle } from '@/hooks/componentColor.ts'
    import { watch } from 'vue';

    const props = defineProps({
        btnStyle: { type: String, default: 'blue',value:['darkBlue','terraYellow','blue']},
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
    button{
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 20px;
        border-radius: 5px;
        border: 0;
        opacity: 1;
        &:hover{
            opacity: 0.9;
        }
    }
    .loader {
        top:-50;
        margin-right: 5px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #9c1111;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: inline-block;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

