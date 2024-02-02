<script setup lang="ts">
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  password: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
    <div :class="[$style['login-content']]">
        <div :class="[$style['login-form']]">
            <el-form-item label="帳號">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="密碼">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-button @click="onSubmit">登入</el-button>
        </div>
    </div>
</template>

<style lang="scss" module>
.login-content{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-form{
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    flex-direction: column;
    box-shadow:var(--el-box-shadow-dark) ;
}
</style>