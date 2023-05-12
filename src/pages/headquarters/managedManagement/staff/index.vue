<script setup lang="ts">
import { ref,reactive,onMounted } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import searchSelect from "@/components/Select/index.vue"
import { GetRiverBirdStore,GetStore } from '@/requests/api.ts'

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

const storeRef = reactive(store)

const getSelectComapnyValue = (item) => {
    // console.log(item);
    if(item.id !== 0){
        storeRef.push({
                id: 0,
                name: "不分店別"
            })
    }
    
};

const getSelectStoreValue = (item) => {
    // console.log(item);
};

const fetchData = async (): Promise<any> => {

    

}

onMounted(() => {        
    GetRiverBirdStore().then((res:any) => {
        if(res.data.success){
            store.push(...res.data.data)
        }
    })

    GetStore().then((res:any) => {
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
            <div :class="$style['select-group']">
                <searchSelect
                    style="margin-right: 20px;"
                    v-model=company
                    @get-select-value="getSelectComapnyValue"></searchSelect>
                <searchSelect
                    v-model=storeRef
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