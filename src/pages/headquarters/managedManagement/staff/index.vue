<script setup lang="ts">
import { ref,reactive } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import searchSelect from "@/components/Select/index.vue"

const searchValue = ref("")

const company = reactive([
    {
        id: 0,
        name: "不分公司"
    }
])

const store = reactive([
    {
        id: 0,
        name: "不分店別"
    }
])

const getSelectComapnyValue = (item) => {
    console.log(item);
    
};

const getSelectStoreValue = (item) => {
    console.log(item);
};

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            <div :class="$style['select-group']">
                <searchSelect
                    style="margin-right: 20px;"
                    v-model=company
                    @get-select-value="getSelectComapnyValue"></searchSelect>
                <searchSelect
                    v-model=store
                    @get-select-value="getSelectStoreValue"></searchSelect>
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