<script setup lang="ts">
    import { reactive,watch,onMounted } from 'vue'
    import  { useRouter } from 'vue-router'
    
    const sideBars = reactive([
        {
            abbreviation:'人',
            title:'人資管理',
            show:false,
            childrens:[
                {
                    childrenTitle:'員工資料',
                    key:'/staff',
                    src:'staff'
                }
            ]
        },
        {
            abbreviation:'司',
            title:'公司管理',
            show:false,
            childrens:[
                {
                    childrenTitle:'門市',
                    key:'/storeBranche',
                    src:'storeBranche'
                }
            ]
        },
        {
            abbreviation:'優',
            title:'優惠管理',
            show:false,
            childrens:[
                {
                    childrenTitle:'全單折扣',
                    key:'/fullOrderDiscount',
                    src:'fullOrderDiscount'
                }
            ]
        }
    ])
    const route = useRouter()

    const init = () => {
        let breakFor:boolean = false
        sideBars.forEach(sideBar=>{
            sideBar.show = false
            if(!breakFor){
                sideBar.childrens.forEach(e=>{
                    if(route.currentRoute.value.path.includes(e.key)){
                        sideBar.show = true
                        breakFor = true
                    }
                })
            }
        })        
    };

    onMounted(() => {
        init()
    });
    
    watch(() => route.currentRoute.value.path, () => {
        init()  
    });
    
</script>
<template>
    <div :class=$style.background>
        <div :class="$style['side-bar']">
            <div :class="$style['side-bar-title']">村露國際</div>
            <div :class="$style['side-bar-bar']">
                <div v-for="sideBar in sideBars">
                    <div 
                        @click="sideBar.show = !sideBar.show"  
                        :class="$style['side-bar-bar-item']">
                        <div :class="$style['side-bar-bar-abbreviation']">{{sideBar.abbreviation}}</div>
                        <div :class="$style['side-bar-bar-title']">{{sideBar.title}}</div>
                        <svg :style="{ transform: sideBar.show ? 'rotate(180deg)': 'rotate(0deg)' }" width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0.5L8.5 8L1 0.499999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div :style="{ display: sideBar.show ? 'block': 'none' }" :class="$style['side-bar-childrens']">
                        <div 
                            v-for="children in sideBar.childrens"
                            @click="route.push(children.src)"
                            :class="[
                                $style['side-bar-children'],
                                {[$style.active]:route.currentRoute.value.path.includes(children.key)}
                            ]">
                            {{children.childrenTitle}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class=$style.content>
            <div :class="[$style['content-div']]">
                <router-view />
            </div>
        </div>
    </div>
</template>
<style lang="scss" module>
.test{
    color: red;
}
.background{
    // min-height: 1080px;
    // min-width: 1920px;
    height: 100vh;
    // width: 100vw;
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
                &.active,
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
            .side-bar-childrens{
                margin-top: 5px;
                margin-bottom: 5px;
                .side-bar-children{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    font-weight: 400;
                    font-size: 18px;
                    height: 60px;
                    padding-left: 80px;
                    border-radius: 0px 30px 30px 0px;
                    &.active,
                    &:hover{
                        color: white;
                        background-color: #124178;
                    }
                }
            }
            
        }
    }
    .content{
        overflow: auto;
        width: calc(100% - 280px);
        .content-div{
            min-width: 1640px;
        }
    }
}
</style>