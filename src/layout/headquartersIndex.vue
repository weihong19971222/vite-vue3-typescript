<script setup lang="ts">
    const props = defineProps({
        modelValue:{type: String,default:""}
    })
    const emit = defineEmits(['update:modelValue'])
    const updateValue = (e: Event) => {
        emit('update:modelValue', (e.target as HTMLInputElement).value)
    };
</script>
<template>
    <div :class="$style['index-temp']">
        <div :class="$style['index-header']">
            <div :class="$style['index-header-search']">
                <input :value="props.modelValue" placeholder="搜尋" type="text" @input="updateValue" required>
                <img src="@/assets/magnifier.svg" >
            </div> 
            <div :class="$style['index-header-user']">Hello Apple</div>
        </div>
        <slot></slot>
    </div>
</template>
<style lang="scss" module>
.index-temp{
    width: 100%;
    padding: 32px 30px;
    .index-header{
        display: flex;
        justify-content: space-between;
        .index-header-user{
            cursor: pointer;
            font-weight: 700;
            font-size: 18px;
            padding: 17px 16px;
            border-radius: 25px;
            &:hover{
                background: #E0E0E0;
            }
        }
        .index-header-search{
            position: relative;
            input{
                border: 1px solid #8C8C8C;
                font-weight: 400;
                font-size: 18px;
                padding-left: 15px;
                width: 635px;
                height: 100%;
                &:focus,&:valid{
                    & + img{
                        display: none
                    }
                }
            }
            img{
                position: absolute;
                right: 18px;
                top: 50%;
                transform: translate(0,-50%);
            }
        }
    }
}

</style>