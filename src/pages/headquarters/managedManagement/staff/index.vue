<script setup lang="ts">
import { ref } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"
import baseButton from "@/components/Button/index.vue"
import searchSelect from "@/components/Select/index.vue"

const searchValue = ref("")

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            <div :class="$style['select-group']">
                <searchSelect></searchSelect>
            </div>
            <div :class="$style['store-staff-btn']">
                <baseButton>新增員工</baseButton>
            </div>
        </div>
    </indexLayout>
</template>

<style lang="scss" module>
.select-group{
    margin-top: 20px;
    display: flex;
}
.store-staff-btn{
    margin-top: 15px;
    text-align: right;
}
</style>