<template>
    <div>
        <div class="card_div" :style="{background:Rxd.bgColor}" @click="nextPath">
            <div class="circle"></div>
            <img src="@/assets/circle.svg" alt="" class="circle2">
            <span class="span_1">{{ Rxd.text }}</span>
            <span class="span_2">13123 123123 12313</span>
            <span class="span_3">约 ￥999999.99</span>
            <img src="@/assets/chip.png" alt="" class="chip">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Rxd:Object
    },
    methods:{
        nextPath() {
            if (this.$router.path !== '/my/manage/details') {
                this.$router.push({name:'walletDetails', query:this.Rxd})
            }
        }
    }
}
</script>

<style scoped>
    .card_div{
        position: relative;
        width: 86%;
        height: 11.5rem;
        margin: 0 auto;
        background: red;
        border-radius: .625rem;
        margin-top: 1.875rem;
        /* background-image:linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121)); */
    }
    .circle{
        height: 2.125rem;
        width: 2.125rem;
        background: white;
        border-radius: 1.0625rem;
        display: inline-block;
        position: absolute;
        left: 10%;
        top: 1.625rem;
        z-index: 10;
    }
    .circle2{
        width: 2.125rem;
        display: inline-block;
        position: absolute;
        left: 18.5%;
        top: 1.625rem;
    }
    .card_div > img{
        display: inline-block;
        position: absolute;
    }
    .card_div > span{
        display: inline-block;
        position: absolute;
        left: 10%;
    }
    .span_1{
        top: 4.375rem;
        font-size: 1.25rem;
        color: white;
    }
    .span_2{
        top: 6.4375rem;
        font-size: 1rem;
        font-weight: 100;
        color:gainsboro;
    }
    .span_3{
        top: 8.4375rem;
        font-size: 1.125rem;
        color: white;
    }
    .chip{
        height: 2.125rem;
        right: 1.625rem;
        bottom: 1.875rem;
    }
</style>
