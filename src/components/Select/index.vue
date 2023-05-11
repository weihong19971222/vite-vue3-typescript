<script setup lang="ts">
    import { ref,computed } from "vue"

    interface selectData {
        id: number;
        name: string;
    }

    const props = defineProps({
        modelValue:{type: Array<selectData>},
        width:{type: String, default:"200px"}
    })    

    const emit = defineEmits(['get-select-value'])

    const searchOpen = ref(false)
    const searchText = ref('')
    const datas = computed(() => {
        if(searchText.value != ''){
            let item: Array<selectData> = []
            props.modelValue?.forEach(e=>{
                if(e.name.includes(searchText.value)){
                    item.push(e)
                }
            })
            return item
        }
        return props.modelValue
    })

    const select = (item) => {
        searchOpen.value = false
        searchText.value = item.name
        emit('get-select-value', item)
    };

</script>
<template>
    <div :style="{width:props.width}" :class="['srearch-select',{'active':searchOpen}]" @click.self="searchOpen = !searchOpen">
        <div class="srearch-select-show-search">
            <input v-model="searchText" type="text" @focus="searchOpen = true">
            <img src="@/assets/sideBarBtn.svg" @click="searchOpen = !searchOpen">
        </div>
        <div v-show="searchOpen" class="srearch-select-option">
            <div class="option" v-for="item in datas" :key="item.id" @click="select(item)">{{item.name}}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/select.scss';
</style>
