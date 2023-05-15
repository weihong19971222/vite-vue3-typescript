<script setup lang="ts">
import baseButton from "@/components/Button/index.vue"
import baseInput from "@/components/Input/index.vue"
import { ref } from 'vue'
import { Login } from '@/requests/api.ts'
import { useStore } from 'vuex'
import { validate } from '@/validation/index.ts'
import { useRouter } from 'vue-router'
import { setCookie } from 'typescript-cookie'

const store = useStore()
const account_number = ref("")
const password = ref("")
const route = useRouter()

const fetchData = async (): Promise<any> => {

    const validation = validate([
        {
            data:account_number.value,
            validate: "string|min:6",
            translate: "帳號"
        },
        {
            data:password.value,
            validate: "string|min:6",
            translate: "密碼"
        }
    ])
    if(validation !== ''){
        store.commit('updateMsg',validation)
        return
    }

    const post = {
        'account_number': account_number.value,
        'password': password.value
    }
    await Login(post).then((res:any) => {
        if(res.data.success){
            const resData = res.data.data
            const user = {
                id:resData.user.id,
                name:resData.user.name
            }
            setCookie('token', resData.token)
            setCookie('user', JSON.stringify(user))
            route.push('headquarters')
        }else{
            store.commit('updateMsg',res.data.msg)
        }
    })
}
</script>

<template>
    <div style="height: 100vh;">
        <div :class=$style.background>
            <div :class=$style.mask>
                <div :class=$style.title>村露國際</div>
                <div>
                    <baseInput
                        v-model="account_number"
                        marginBottom="30px"
                        inputWidth="279px"
                        placeholderText="請輸入帳號"
                        labelText="帳號"
                        relativeDistance="35px"
                        className="mb-30"
                    />
                    <baseInput
                        v-model="password"
                        marginBottom="56px"
                        inputWidth="279px"
                        placeholderText="請輸入密碼"
                        labelText="密碼"
                        relativeDistance="35px"
                        inputType="password"
                    />
                    <baseButton
                        style="width: 100%;"
                        :onClick="()=>fetchData()"
                    >登入</baseButton>
                    <div :class="$style['to-store-href']" >前往<a href="/headquarters">門市後台</a></div>
                    <div :class="$style['hint-msg']"> <img src="@/assets/hint-icon.svg" /> 由總部人員註冊帳號</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.title{
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 66px;
}
.mask{
    width: 813px;
    height: 878px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.background{
    // min-height: 1080px;
    // min-width: 1920px;
    min-height: 100%;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/loginBg.png');
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
}
.to-store-href{
    margin-top: 15px;
    float: right;
    font-size: 16px;
    font-weight: 400;
    a{
       color: #1961B6; 
       text-decoration:none;
    }
}
.hint-msg{
    display: flex;
    align-items: center;
    margin-top: 194px;
    font-size: 16px;
    font-weight: 400;
}
</style>