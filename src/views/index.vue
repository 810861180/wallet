<template>
    <div class="main_bg">
        <div>
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/qrCode.svg" alt="" class="img1">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">资产</h1>
                </div>
                <div class="topNav_div_son">
                    <img src="@/assets/nav/camera.svg" alt="" class="img2">
                </div>
            </div>
        </div>
        <bt-nav></bt-nav>
        <bank-card :Rxd="bankCardData"></bank-card>
        <eth-list :Rxd="initData"></eth-list>
    </div>
</template>

<script>
export default {
    components: {
        btNav: (resolve) => { require(['@/components/btNav.vue'], resolve)},
        ethList: (resolve) => { require(['@/components/ethList.vue'], resolve)},
        bankCard: (resolve) => { require(['@/components/bankCard.vue'], resolve)}
    },
    data() {
        return{
            bankCardData:{
                bgColor: 'linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121))', 
                text:'小链一号'
            },
            initData:{
                data:[
                    {id:1, name:'ETH', value:'78782.22'},
                    {id:2, name:'ETH', value:'78782.22'},
                    {id:3, name:'ETH', value:'78782.22'},
                    {id:4, name:'ETH', value:'78782.22'}
                ]
            }
        }
        
    }
}
</script>

<style>

</style>
