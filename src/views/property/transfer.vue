<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">ETH转账</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="transfer_div">
                <div class="transfer_divs">
                    <span>收款人:</span>
                    <input type="text" placeholder="收款人钱包地址">
                </div>
                <div class="transfer_divs">
                    <span>金 &nbsp;&ensp;额:</span>
                    <input type="text" placeholder="输入收款金额">
                </div>
                <div class="transfer_divs">
                    <span>备 &nbsp;&ensp;注:</span>
                    <input type="text" placeholder="输入您的备注">
                </div>
                <p class="transfer_div_p">矿工费用:</p>
                <div class="transfer_div_3">
                    <span class="transfer_div_span1">慢</span>
                    <Tooltip style="width: 90%">
                        <Progress :percent="99.999" :success-percent="47" hide-info="true" />
                    </Tooltip>
                    <span class="transfer_div_span2">快</span>
                </div>
                <p class="transfer_div_p2">0.0000236784329ETH</p>
            </div>

            <div class="strip_btn location" @click="$router.push({name:'verifyPassword'})">
                <p>下一步</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .transfer_div{
        width: 90%;
        margin: 1.875rem auto 0 auto;
        background: #393949;
        border-radius: .625rem;
        padding-bottom: 1.875rem;
    }
    .transfer_divs{
        width: 90%;
        height: 3.125rem;
        margin: 0 auto;
        border-bottom: 1px solid #999999;
    }
    .transfer_divs span{
        color: white;
        font-size: 1rem;
        line-height: 3.125rem;
    }
    .transfer_divs input{
        font-size: 1rem;
        color: white;
        width: 14.375rem;
        padding-left: .625rem;
        background: #393949;
        border: 0;
        outline: none;
    }
    .transfer_div_p{
        width: 90%;
        margin: .625rem auto;
        font-size: 1rem;
        color: white;
    }
    .transfer_div_3{
        width: 90%;
        text-align: center;
        margin: 0 auto;
        position: relative;
    }
    .transfer_div_3 span{
        position: absolute;
        color: white;
    }
    .transfer_div_span1{
        left: 0;
    }
    .transfer_div_span2{
        right: 0;
    }
    .transfer_div_p2{
        font-size: .875rem;
        text-align: center;
        color: white;
        margin: .625rem 0 0 0;
    }
</style>
