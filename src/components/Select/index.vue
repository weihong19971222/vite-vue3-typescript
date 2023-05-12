<script setup lang="ts">
    import { ref,computed,onMounted,watch } from "vue"

    interface selectData {
        id: number;
        name: string;
    }

    const props = defineProps({
        modelValue:{type: Array<selectData>, default:()=>[{}]},
        width:{type: String, default:"200px"}
    })    

    const emit = defineEmits(['get-select-value'])

    const searchOpen = ref(false)
    const searchText = ref('')
    const selectItem = ref()
    const datas = computed(() => {
        if(searchText.value != ''){
            let item: Array<selectData> = []
            props.modelValue.forEach(e=>{
                if(e.name.includes(searchText.value)){
                    item.push(e)
                }
            })
            return item
        }
        return props.modelValue
    })

    const select = (item) => {
        selectItem.value = item
        searchOpen.value = false
        searchText.value = item.name
        emit('get-select-value', item)
    };

    onMounted(() => {        
        const firstData = props.modelValue[0]
        select(firstData)
    });

    watch(() => searchOpen.value, () => {
        if(!searchOpen.value && datas.value.length === 0){
            searchText.value = selectItem.value.name
        }
    });

</script>
<template>
    <div :style="{width:props.width}" :class="['srearch-select',{'active':searchOpen}]" @click.self="searchOpen = !searchOpen">
        <div class="srearch-select-show-search">
            <input v-model="searchText" type="text" @focus="searchOpen = true">
            <img src="@/assets/sideBarBtn.svg" @click="searchOpen = !searchOpen">
        </div>
        <div v-show="searchOpen" class="srearch-select-option">
            <div v-if="datas.length === 0" class="option notfound">查無資料</div>
            <div v-else class="option" v-for="item in datas" :key="item.id" @click="select(item)">{{item.name}}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/select.scss';
</style>
