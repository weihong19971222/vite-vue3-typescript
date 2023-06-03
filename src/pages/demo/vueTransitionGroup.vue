<script setup lang="ts">
import {reactive} from 'vue'

const lists = reactive([
    '1.Y286803761-于柔建',
    '2.S265845381-謝霖君',
    '3.N118578439-于培珊',
    '4.E243376680-馬怡岱'
])

const dragStart = (e, index)=>{
    e.dataTransfer.setData('Text', index);
}

const drop = (e, index)=>{
    allowDrop(e);
    let arr = lists.concat([]),
    dragIndex = e.dataTransfer.getData('Text'),
    temp = arr.splice(dragIndex, 1);
    arr.splice(index, 0, temp[0]);
    lists.length = 0
    arr.forEach(element => {
        lists.push(element)
    });
}

// 取消默認動作
const allowDrop = (e)=>{
    e.preventDefault();
}

</script>

<template>
    <div>
        <h3>vueTransitionGroup</h3>
        <div class="demo-content">
            <div>
                <TransitionGroup tag="ul" name="list">
                   <li 
                        draggable="true"
                        v-bind:key="list"
                        v-for="(list,index) in lists"
                        @dragstart="dragStart($event, index)" 
                        @dragover="allowDrop" 
                        @drop="drop($event, index)">{{ list }}</li> 
                </TransitionGroup>
            </div>
            <div></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .demo-content{
        width: 350px;
        padding: 15px;
        border: 1px solid rgb(121, 116, 116);

    }
    ul li {
        list-style: none;
        cursor: pointer;
        background: rgb(153, 153, 219);
        margin-bottom: 5px;
        padding: 5px;
        
    }
    .list-move{
        transition: transform 0.5s;
    }
</style>