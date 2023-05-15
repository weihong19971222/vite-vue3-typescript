<script setup lang="ts">
import { ref,reactive,onMounted } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import searchSelect from "@/components/Select/index.vue"
import baseTable from "@/components/Table/index.vue"
import { GetRiverBirdStoreList,GetStoreList,GetStaff } from '@/requests/api.ts'

const searchValue = ref("")

const company = [
    {
        id: 0,
        name: "不分公司"
    }
]

const store = [
    {
        id: 0,
        name: "不分店別"
    }
]

const staffs:Array<Object> = reactive([])

const tableConfig = {
    columns: [
        {title:"公司",key:"storeName"},
        {title:"員工編號",key:"userCode"},
        {title:"姓名",key:"name"}
    ],
    itemShow:true,
    tableInfoShow:true
}

const storeRef = reactive(store)

const getSelectComapnyValue = (item) => {
    if(item.id !== 0){
        storeRef.push({
            id: 0,
            name: "不分店別"
        })
    }
    
};

const getSelectStoreValue = (item) => {
    console.log(item);
};


onMounted(() => {     
    GetStaff().then((res:any) => {
        if(res.data.success){
            staffs.push(...res.data.data)
        }
    })
    
    GetRiverBirdStoreList().then((res:any) => {
        if(res.data.success){
            store.push(...res.data.data)
        }
    })

    GetStoreList().then((res:any) => {
        if(res.data.success){
            company.push(...res.data.data)
        }
    })
});

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            <div class="index-layout-select-group">
                <searchSelect
                    style="margin-right: 20px;"
                    v-model=company
                    @get-select-value="getSelectComapnyValue"></searchSelect>
                <searchSelect
                    v-model=storeRef
                    @get-select-value="getSelectStoreValue"></searchSelect>
            </div>
            <div class="index-layout-store-btn">
                <baseButton>新增員工</baseButton>
            </div>
            <baseTable
                :datas=staffs
                :config=tableConfig>
                <template #table-option="data">
                    <!-- {{data.data.id}} -->
                    <img src="@/assets/table-show-icon.svg">
                    <img src="@/assets/table-update-icon.svg">
                    <img src="@/assets/table-delete-icon.svg">
                </template>
            </baseTable>
        </div>
    </indexLayout>
</template>

<style lang="scss" module>
</style>