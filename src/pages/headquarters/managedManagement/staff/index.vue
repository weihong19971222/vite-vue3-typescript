<script setup lang="ts">
import { ref } from 'vue'
import indexLayout from "@/layout/headquartersIndex.vue"

const searchValue = ref("")

</script>

<template>
    <indexLayout
        v-model="searchValue">
        <div>
            
        </div>
    </indexLayout>
</template>

<style lang="scss" module>

</style>