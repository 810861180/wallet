<template>
    <div>
        <div class="main_bg test_color">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.push({name:'My'})">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">管理钱包</h1>
                </div>
                <div class="topNav_div_son"></div>
            </div>
            <div class="wallet_div">
                <div>
                    <bank-card :Rxd="bankCardData1"></bank-card>
                </div>
                <div>
                    <bank-card :Rxd="bankCardData2"></bank-card>
                </div>
                <div class="wallet_div_3">
                    <bank-card :Rxd="bankCardData3"></bank-card>
                </div>
            </div>
            <div class="wallet_btn">
                <div class="btn_1" @click="$router.push({name:'foundWallet'})">
                    创建钱包
                </div>
                <div class="btn_2" @click="$router.push({name:'leadWallet'})">
                    导入钱包
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        bankCard: (resolve) => { require(['@/components/bankCard.vue'], resolve)}
    },
    data() {
        return{
            bankCardData1:{
                bgColor: 'linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121))', 
                text:'小链一号'
            },
            bankCardData2:{
                bgColor: 'linear-gradient(-45deg, rgb(73, 81, 254), rgb(45, 119, 255))', 
                text:'小链二号'
            },
            bankCardData3:{
                bgColor: 'linear-gradient(-45deg, rgb(252, 114, 87), rgb(252, 129, 84))', 
                text:'小链三号'
            },
        }
    }
}
</script>

<style scoped>
    .wallet_div_3{
        padding-bottom: 12.5rem;
    }
    /* .wallet_btn{
        height: 3.125rem;
        width: 100%;
        position: fixed;
        bottom: 3.125rem;
        z-index: 10;
        display: flex;
    }
    .btn_1, .btn_2{
        display: inline-block;
        height: 2.875rem;
        width: 7.6875rem;
        margin: .125rem 0 0 3.25rem;
        border-radius: 1.4375rem;
        text-align: center;
        line-height: 2.875rem;
        font-size: 1rem;
        color: white;
        background-image: -webkit-linear-gradient(0deg, rgb(195, 101, 204), rgb(131, 98, 231)); 
    }
    .btn_2{
        margin-left: 1.1rem;
        background-image: -webkit-linear-gradient(0deg, rgb(73, 81, 254), rgb(45, 119, 255)); 
    } */
</style>
