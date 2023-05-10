<script setup lang="ts">
    import { reactive } from 'vue'
    const sideBars = reactive([
        {
            abbreviation:'人',
            title:'人資管理',
            show:false
        }
    ])
    const showBar = (sideBarShow) => {        
        sideBarShow = !sideBarShow
    }
</script>
<template>
    <div :class=$style.background>
        <div :class="$style['side-bar']">
            <div :class="$style['side-bar-title']">村露國際</div>
            <div :class="$style['side-bar-bar']">
                <div @click="showBar(sideBar.show)" v-for="sideBar in sideBars" :class="$style['side-bar-bar-item']">
                    <div :class="$style['side-bar-bar-abbreviation']">{{sideBar.abbreviation}}</div>
                    <div :class="$style['side-bar-bar-title']">{{sideBar.title}}</div>
                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0.5L8.5 8L1 0.499999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div>up</div>
            <div>down</div>
        </div>
    </div>
</template>
<style lang="scss" module>
.background{
    min-height: 1080px;
    min-width: 1920px;
    height: 100vh;
    display: flex;
    .side-bar{
        width: 280px;
        border-right: 1px solid #8C8C8C;
        padding-right: 15px;
        .side-bar-title{
            font-weight: 400;
            font-size: 30px;
            padding: 40px 70px;
            margin-bottom: 5px;
        }
        .side-bar-bar{
            height: calc(100vh - 125px) ;
            overflow: auto;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            &::-webkit-scrollbar {
                display: none;
            }
            .side-bar-bar-item{
                cursor: pointer;
                display: flex;
                align-items: center;
                height: 60px;
                font-weight: 400;
                font-size: 18px;
                padding-left: 35px;
                padding-right: 33px;
                &:hover{
                    color: white;
                    background-color: #1961B6;
                    border-radius: 0px 30px 30px 0px;
                    .side-bar-bar-abbreviation{
                        border: 1px solid white;
                    }
                }
                .side-bar-bar-abbreviation{
                    padding: 5px 6px;
                    border: 1px solid #333333;
                    border-radius: 2px;
                    margin-right: 15px;
                }
                svg{
                    margin-left:auto;
                }
            }
            
        }
    }
}
</style>