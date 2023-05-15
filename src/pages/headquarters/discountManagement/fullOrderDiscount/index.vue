<script setup lang="ts">
import { ref,onMounted,reactive,computed } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import { GetFullOrderDiscount } from '@/requests/api.ts'
import baseTable from "@/components/Table/index.vue"

interface fullOrderDiscountData{
    id:number;
    name:string;
    qty:number;
    qtyChinese:string;
    type:boolean|number;
}

const searchValue = ref("")
const fullOrderDiscount:Array<fullOrderDiscountData> = reactive([])
const tableConfig = {
    columns: [
        {title:"折扣名稱",key:"name"},
        {title:"折扣金額",key:"qtyChinese"}
    ],
    itemShow:true,
    tableInfoShow:true
}
onMounted(() => {
    GetFullOrderDiscount().then((res:any) => {
        if(res.data.success){
            fullOrderDiscount.push(...res.data.data)
        }
    })
})

const datas = computed(() => {   
    if(searchValue.value !== ''){
        let item:Array<fullOrderDiscountData> = []
        fullOrderDiscount.forEach(e=>{
            if(e.name.includes(searchValue.value) 
            || e.qtyChinese.includes(searchValue.value)){
                item.push(e)
            }
        })
        return item
    }
    return fullOrderDiscount
})

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            <div class="index-layout-store-btn">
                <baseButton
                    style="margin-right: 20px;"
                >排序折扣</baseButton>
                <baseButton>新增折扣</baseButton>
            </div>
            <baseTable
                :datas=datas
                :config=tableConfig>
                <template #table-option="data">
                    <!-- {{data.data.id}} -->
                    <img src="@/assets/table-update-icon.svg">
                    <img src="@/assets/table-delete-icon.svg">
                </template>
            </baseTable>
        </div>
    </indexLayout>
</template>
<style lang="scss" module>
    
</style>