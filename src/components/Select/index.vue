<script setup lang="ts">
    import { ref } from "vue"
    const props = defineProps({
        data:{type: Array,default:() => ([])}
    })

    const searchOpen = ref(false)
    const searchText = ref('')
    const showOption = (e: Event) => {
        e.target.firstChild.classList.toggle("open")
        searchOpen.value = e.target.firstChild.classList.contains("open")
    };
</script>
<template>
    <div class="srearch-select" @click="showOption">
        <div class="srearch-select-option">
            <!-- <div v-for="item in datas" :key="item.id" @click="select(item)">{{item.name}}</div> -->
        </div>
        <div class="srearch-select-show-search" @click.stop>
            <!-- <div v-show="!searchOpen">{{showSelected}}</div> -->
            <input v-show="searchOpen" v-model="searchText" type="text" >
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/select.scss';
</style>
