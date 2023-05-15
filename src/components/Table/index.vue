<script setup lang="ts">
    import { ref } from 'vue';
    const props = defineProps({
        config:{
            type:Object,
            default:{
                columns:[],
                itemShow:false,
                tableInfoShow:false
            }
        },
        pageCount:{
            type:Number,
            default:12
        },
        datas:{
            type:Array<Object>,
            default:[]
        }
    })

    const pageIndex = ref(1) 
    
    const changePage = (i)=>{
        if (i != 0 && i != Math.ceil(props.datas.length/props.pageCount)+1){
            pageIndex.value = i;
        }
    }

</script>
<template>
    <div class="table-content">
        <div v-show="props.config.tableInfoShow">共{{props.datas.length}}項，當前頁次{{ pageIndex }}</div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th v-show="props.config.itemShow">項次</th>
                        <th v-for="columns in props.config.columns">{{columns.title}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,index) in props.datas.slice((pageIndex-1)*12, (props.pageCount*pageIndex))">
                        <th v-show="props.config.itemShow">{{ index + 1 }}</th>
                        <td v-for="(columns,index) in props.config.columns">
                            <div v-if="index != props.config.columns.length - 1">{{data[columns.key]}}</div>
                            <div class="table-td-option" v-else>
                                <div>{{data[columns.key]}}</div>
                                <div class="table-td-option-item">
                                    <slot name="table-option" :data="data"></slot>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table-pagination">
            <div class="table-pagination-btn previous-btn" @click="changePage(pageIndex-1)">上一頁</div>
            <div class="number-of-pages-group">
                <div :class='["table-pagination-btn number-of-pages",{"active":i==pageIndex}]' v-for="i in Math.ceil(props.datas.length/props.pageCount)" @click="changePage(i)">{{ i }}</div>
            </div>
            <div class="table-pagination-btn next-btn" @click="changePage(pageIndex+1)">下一頁</div>
        </div>
    </div>
</template>
<style lang="scss">
.table-content{
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    table{
        margin-top: 15px;
        margin-bottom: 40px;
        width: 100%;
        text-align: left;
        border: 1px solid #8C8C8C;
        border-collapse: collapse;
        thead{
            th{
                border: 1px solid #8C8C8C;
                border-collapse: collapse;
            }
        }
        tbody{
            tr{
                &:nth-child(odd) {
                    background:  #E0E0E0;
                }
                .table-td-option{
                    display: flex;
                    justify-content: space-between;
                    .table-td-option-item *{
                        margin-left: 15px;
                        cursor: pointer;
                    }
                }
            }
        }
        tr{
            height: 50px;
            th, td{
                padding: 14px 20px;
                font-weight: 400;
                font-size: 18px;
            }
        }
    }
    .table-pagination{
        display: flex;
        justify-content: end;
        .table-pagination-btn{
            line-height: 30px;
            cursor: pointer;
            color: #1961B6;
            font-weight: 400;
            font-size: 18px;
            &.number-of-pages{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                &.active{
                    background: #124178;
                    color: white;
                    cursor: default;
                }
            }
            &.previous-btn{
                margin-right: 40px;
            }
            &.next-btn{
                margin-left: 40px;
            }
        }
        .number-of-pages-group{
            display: flex;
        }
        
    }
}
</style>