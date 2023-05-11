<script setup lang="ts">
import { ref,reactive } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import searchSelect from "@/components/Select/index.vue"

const searchValue = ref("")

const obj = reactive([
    {
        id: 1,
        name: "张三"
    },
    {
        id: 2,
        name: "李四"
    },
    {
        id: 3,
        name: "王五"
    }
])

const getSelectValue = (item) => {
    console.log(item.id);
};

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            <div :class="$style['select-group']">
                <searchSelect
                    v-model=obj
                    @get-select-value="getSelectValue"></searchSelect>
            </div>
            <div :class="$style['store-staff-btn']">
                <baseButton>新增員工</baseButton>
            </div>
        </div>
    </indexLayout>
</template>

<style lang="scss" module>
.select-group{
    margin-top: 20px;
    display: flex;
}
.store-staff-btn{
    margin-top: 15px;
    text-align: right;
}
</style>