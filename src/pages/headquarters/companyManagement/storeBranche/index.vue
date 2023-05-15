<script setup lang="ts">
import { ref,onMounted,reactive,computed } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import searchSelect from "@/components/Select/index.vue"
import { FRANCHISE } from '@/lib/const.ts';
import { GetRiverBirdStore } from '@/requests/api.ts'

interface storeData{
    store_number:string;
    name:string;
    id:number;
    phone:string;
    franchise_store:boolean|number;
}

const franchiseStoreSelect = ref()
const searchValue = ref("")
const stores:Array<storeData> = reactive([])

const franchise = [
    {
        id: null,
        name: "不分經營模式"
    },...FRANCHISE
]
const getSelectFranchiseValue = (item) => {
    franchiseStoreSelect.value = item.id
};

onMounted(() => {
    GetRiverBirdStore().then((res:any) => {
        if(res.data.success){
            stores.push(...res.data.data)
        }
    })
})

const datas = computed(() => {   
    if(searchValue.value !== '' || franchiseStoreSelect.value !== null){
        let item:Array<storeData> = []
        stores.forEach(e=>{
            if(e.name.includes(searchValue.value) 
            || e.store_number.includes(searchValue.value)
            || e.phone.includes(searchValue.value)){
                if( franchiseStoreSelect.value !== null){
                    if(e.franchise_store === franchiseStoreSelect.value){
                        item.push(e)
                    }
                }else{
                    item.push(e)
                }
            }
        })
        return item
    }
    return stores
})

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            <div class="index-layout-select-group">
                <searchSelect
                    v-model=franchise
                    @get-select-value="getSelectFranchiseValue">
                </searchSelect>
            </div>
            <div class="index-layout-store-btn">
                <baseButton>新增分店</baseButton>
            </div>
            <div style="font-weight: 400;font-size: 18px;">
                <div style="margin-bottom: 15px;">共{{datas.length}}項</div>
                <div style="display: flex;flex-wrap: wrap;">
                    <div v-for="store in datas" :class="$style['store-container']">
                        <div :class="$style['store-title']">{{ store.store_number }}{{ store.name }}</div>
                        <div>{{ (store.franchise_store === 0)?'直營':'加盟' }}</div>
                        <div>{{store.phone}}</div>
                        <div :class="$style['store-container-btn-group']">
                            <baseButton
                                style="padding: 16px 9px;"
                                btnStyle="blank">
                                <img style="margin-right: 8px;" src="@/assets/table-show-icon.svg">
                                檢視
                            </baseButton>
                            <baseButton
                                style="padding: 16px 9px;"
                                btnStyle="blank">
                                <img style="margin-right: 8px;" src="@/assets/table-update-icon.svg">
                                編輯
                            </baseButton>
                            <baseButton
                                style="padding: 16px 9px;"
                                btnStyle="blank">
                                <img style="margin-right: 8px;" src="@/assets/table-delete-icon.svg">
                                刪除
                            </baseButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </indexLayout>
</template>
<style lang="scss" module>
    .store-container {
        border: 1px solid #8C8C8C;
        border-radius: 5px;
        width: 413px;
        height: 221px;
        padding: 20px 15px ;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 20px;
        margin-bottom: 20px;
        .store-title{
            font-size: 22px;
        }
        .store-container-btn-group{
            display: flex;
            justify-content: space-between;
        }
    }
</style>