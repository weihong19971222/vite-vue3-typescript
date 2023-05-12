<script setup lang="ts">

    const props = defineProps({
        config:{
            type:Object,
            default:{
                columns:[],
                itemShow:false,
                tableInfoShow:false
            }
        },
        datas:[]
    })
    console.log(props.datas);

</script>
<template>
    <div class="table-content">
        <div v-show="props.config.tableInfoShow">共100項，當前頁次2</div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th v-show="props.config.itemShow">項次</th>
                        <th v-for="columns in props.config.columns">{{columns.title}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,index) in props.datas">
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
            <div>上一頁</div>
            <div></div>
            <div>下一頁</div>
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
    }
}
</style>