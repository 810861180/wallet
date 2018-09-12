<template>
    <div>
        <div class="eth_list">
            <ul class="list_ul">
                <li class="list_li" v-for="item in Rxd.data" :key="item.id" @click="toDeal">
                    <Icon type="logo-bitcoin" size="40" color="#999999" />
                    <span class="list_span">{{ item.name }}</span>
                    <div class="list_div">{{ item.value }}</div>
                </li>
            </ul>
            <div class="footer" v-show="true">
                <div class="footer_i">
                    <img src="@/assets/add.svg" alt="" class="footerImg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Rxd:Object
    },
    methods:{
        toDeal() {
            this.$router.push({name:'Deal'})
        }
    }
}
</script>

<style scoped>
    .eth_list{
        position: relative;
        width: 83%;
        margin: 0 auto;
        border-bottom-left-radius: .625rem;
        border-bottom-right-radius: .625rem;
        background: rgb(57, 57, 73);
    }
    .list_ul{
        height: 100%;
        width: 100%;
        padding-top: .625rem;
        padding-bottom: .625rem;
    }
    .list_li{
        list-style: none;
        height: 4rem;
        line-height: 4rem;
        padding-left: .625rem;
        
    }
    .list_li:hover{
        background: #22222C;
    }
    .list_span, .list_div{
        display: inline-block;
        font-size: 1rem;
        color: #999999;
        font-weight: bold;
    }
    .list_div{
        color: white;
        width: 68%;
        font-weight: 100;
        text-align: right;
    }
    .footerImg{
        padding-top: .3125rem;
    }
</style>
