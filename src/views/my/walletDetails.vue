<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">钱包详情</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <bank-card :Rxd="bankCardData"></bank-card>
            <div class="eth_list">
                <ul class="list_ul">
                    <li class="list_li" v-for="item in initData.data" :key="item.id" @click="$router.push({name:item.routerName})">
                        <span class="list_span">{{ item.name }}</span>
                        <div class="my_right">
                            <span class="names">{{ item.names }}</span>
                            <Icon type="ios-arrow-forward" color="#8a8a8a" size="20" />
                        </div>
                    </li>
                </ul>
            </div>
            <div class="strip_btn">
                <p>删除钱包</p>
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
        return {
            bankCardData:{
                // bgColor: this.$router.params.bgColor,
                // text: this.$router.params.text
                bgColor: 'linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121))', 
                text:'小链一号'
            },
            initData:{
                data:[
                    {id:1, name:'钱包名称', routerName:'alertName', value:'78782.22', names: this.$store.state.walletName},
                    {id:2, name:'修改密码', routerName:'changePassword', value:'78782.22', names:''},
                    {id:3, name:'导出私钥', routerName:'privateKey', value:'78782.22', names:''},
                    {id:4, name:'导出keyStore', routerName:'deriveKey', value:'78782.22', names:''}
                ]
            }
            
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
    .list_span{
        display: inline-block;
        font-size: 1rem;
        color: #999999;
        font-weight: bold;
    }
    .list_span{
        margin-left: .625rem;
    }
    .my_right{
        display: inline-block;
        height: 50%;
        width:50%;
        float: right;
        text-align: right;
        margin-right: .625rem;
    }
    /* .strip_btn{
        height: 2.75rem;
        width: 55%;
        margin: .3125rem auto 0 auto;
        border-radius: 1.375rem;
        text-align: center;
        background: linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121));
    }
    .strip_btn p{
        font-size: 1rem;
        color: white;
        padding-top: .625rem;
    } */
    .names{
        color: white;
        font-size: 1rem;
        vertical-align: middle;
    }
</style>
