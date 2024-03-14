<script setup lang="ts">
    import { ref } from 'vue';
    const shopHeadOptions = [
        {
            name: 'Home',
            link: '/shop'
        },
        {
            name: 'Products',
            link: '/shop/products'
        },
        {
            name: 'Cart',
            link: '/shop/cart'
        },
        {
            name: 'Checkout',
            link: '/shop/checkout'
        },
        {
            name: 'Account',
            link: '/shop/account'
        }
    ]

    const loginStatus = ref(false)
</script>

<template >
    <div>
        <div id="shop-head">
            <div style="display: flex; align-items: center;">
                <div id="shop-head-title">WwWShop</div>
                <div v-for="shopHeadOption in shopHeadOptions" class="shop-head-options">{{ shopHeadOption['name'] }}</div>
            </div>
            <div style="display: flex;">
                <div v-if="!loginStatus" id="shop-head-login" @click="()=>{loginStatus = !loginStatus}">Login</div>
                <div v-else id="shop-head-user" @click="()=>{loginStatus = !loginStatus}"></div>
            </div>
        </div>
        <div id="shop-body">

        </div>

    </div>
</template>

<style lang="scss" scoped>
#shop-head{
    user-select: none;
    width: 100%;
    height: 65px;
    background-color: rgb(125,103,87);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    #shop-head-title{
        color:white;
        font-size: 22px;
        margin-right: 35px;
    }
    .shop-head-options{
        color:white;
        padding: 0 25px;
        cursor: pointer;
        &:hover{
            color: rgb(173,165,156);
        }
    }
    #shop-head-login{
        cursor: pointer;
        padding: 10px 15px;
        border-radius: 20px;
        background-color: rgb(170,161,152);
        color:white;
        &:hover{
            color: rgb(104, 99, 93);
        }
    }
    #shop-head-user{
        cursor: pointer;
        background-color: white;
        padding: 20px;
        border-radius: 50%;
    }
}
#shop-body{
    min-height: calc(100vh - 65px);
    background-color: rgb(220,216,205);
}
</style>
