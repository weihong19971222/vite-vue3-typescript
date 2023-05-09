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
  <div @click.self="disablePrompt" v-show="props.promptShow" id="prompt-window">
    <div id="prompt-area" v-bind:style="promptAreaStyle">
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
    #prompt-window{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999999999;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        #prompt-area{
            padding:37px 20px ;
            min-width: 492px;
            min-height: 200px;
            max-height: 980px;
            background: white;
            border-radius: 5px;
            .prompt-title{
                font-weight: 400;
                font-size: 22px;
                margin-bottom: 37px;
                img{
                    cursor: pointer;
                    float: right;
                }
            }
        }
    }
</style>