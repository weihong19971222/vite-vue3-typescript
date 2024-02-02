<script setup lang="ts">
    import { reactive, ref } from 'vue'
    import { ElMessage } from 'element-plus'

    const storeBotVisible = ref(false)
    const storeToken = ref('')

    const storeBot = async() =>{
        const value = storeToken.value.trim()
        if( value == ''){
            ElMessage({
                showClose: true,
                message: '請輸入Channel access token',
                type: 'error',
            })
        }else{
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${value}`);
            var requestOptions:object = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders,
            };
            

            fetch("https://api.line.me/v2/bot/info", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            // await getBotInfo(value).then(res=>{
            //     console.log(res);
            // })
        }
    }

</script>
<template>
    <div :class=$style.background>
        <div :class="$style['side-bar']" style="text-align: center;">
            <div :class="$style['side-bar-title']">圖文選單</div>
            <div style="margin-bottom: 20px;">LINE機器人</div>
            <div>
                <el-button type="primary" round @click="storeBotVisible = true">新增LINE機器人</el-button>
            </div>
        </div>
        <div :class=$style.content>
            <div :class="[$style['content-div']]">
                <router-view />
            </div>
        </div>
    </div>

    <el-dialog v-model="storeBotVisible" title="綁定機器人">
        
        <div>Channel access token</div>
        <el-input type="textarea" :autosize="{ minRows: 3}" v-model="storeToken" />
        
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="storeBotVisible = false">取消</el-button>
                <el-button type="primary" @click="storeBot">確認</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style lang="scss" module>
.background{
    height: 100vh;
    display: flex;
    .side-bar{
        width: 280px;
        border-right: 1px solid #8C8C8C;
        padding-right: 15px;
        .side-bar-title{
            font-weight: 400;
            font-size: 30px;
            padding: 40px 70px 0px 70px;
            margin-bottom: 5px;
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