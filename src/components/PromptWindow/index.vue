<script setup lang="ts">

    const props = defineProps({
        promptShow:{type: Boolean,default:false},
        promptAreaWidth:{type: String,default:""},
        promptAreaHeight:{type: String,default:""},
        crossBtn:{type: Boolean,default:true},
        promptTitle:{type: String,default:""}
    })

    let promptAreaStyle = {
        width: props.promptAreaWidth,
        height: props.promptAreaHeight,
    }
    const emit = defineEmits(['disableprompt'])

    const disablePrompt = () => {        
        emit('disableprompt', false)
    };

</script>

<template>
  <div @click.self="disablePrompt" v-show="props.promptShow" class="prompt-window">
    <div class="prompt-area" v-bind:style="promptAreaStyle">
        <div class="prompt-title">
            <slot name="prompt-title">{{ promptTitle }}</slot>
            <img @click.prevent="disablePrompt" v-show="props.crossBtn" src="@/assets/cross.svg">
        </div>
        <slot name="prompt-content"></slot>
        <slot name="prompt-btn-wrap"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/scss/promptEindow.scss';
</style>