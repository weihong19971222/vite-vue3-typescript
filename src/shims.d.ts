// vsCode typescript 抱錯
// https://iter01.com/528992.html
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

declare module '*.ts' ;
declare module 'uuid';
// declare module '*.vue' {
//     import { defineComponent } from 'vue'
//     const Component: ReturnType 
//     export default Component 
// } 

// declare module "*.vue" {
//     import Vue from "vue";
//     export default Vue; 
// }
// import { Store } from 'vuex'
// declare module '@vue/runtime-core' {
//     // declare your own store states
//     interface State {
//         count: number
//     }

//     // provide typings for `this.$store`
//     interface ComponentCustomProperties {
//         $store: Store<State>
//     }
// }