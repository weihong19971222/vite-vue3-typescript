<script setup lang="ts">
    import { v4 as uuidv4 } from "uuid";
    const props = defineProps({
        modelValue:{type: String,default:""},
        marginBottom:{type: String,default:"0px"},
        inputWidth:{type: String,default:"100px"},
        inputType:{type: String,default:"text"},
        placeholderText:{type: String},
        labelText:{type: String},
        arrangement:{type: String,default: 'horizontal',value:['horizontal','vertical']},
        relativeDistance:{type: String,default:"0px"},
        className: { type: String, default: null }
    })

    const emit = defineEmits(['update:modelValue'])

    const updateValue = (e: Event) => {
        emit('update:modelValue', (e.target as HTMLInputElement).value)
    };

    let defStyle = {"marginBottom":props.marginBottom}
    let defInputStyle = {"width":props.inputWidth}
    let defLabelStyle = {}
    let uuid = uuidv4()

    switch(props.arrangement){
        case 'vertical':
            defLabelStyle = {"marginBottom": props.relativeDistance}
            defStyle = {...defStyle,...{"display":"flex","flexDirection":"column"}}
            break
        default:
            defLabelStyle = {"marginRight": props.relativeDistance}
            defStyle = {...defStyle,...{"display":"flex","alignItems": "center"}}
    }
    
</script>

<template>
    <div v-bind:style="defStyle" :class="props.className">
        <label 
            v-bind:style="defLabelStyle" 
            :for="uuid">
            {{props.labelText}}
        </label>
        <input 
            v-bind:style="defInputStyle" 
            :value="props.modelValue" 
            :id="uuid" 
            :type="props.inputType" 
            :placeholder="props.placeholderText"
            @input="updateValue">
    </div>
</template>
  
<style lang="scss" scoped>
    label{
        font-size: 18px;
        font-weight: 400;
    }
    input{
        height: 55px;
        border: 1px solid #8C8C8C;
        padding-left: 11px;
        font-size: 18px;
    }
</style>

