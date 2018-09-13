<template>
    <div>
        <div class="main_bg test_color">
            <div>
                <div class="topNav_div">
                    <div class="topNav_div_son">
                        <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                    </div>
                    <div class="topNav_div_son">
                        <h1 class="topNav_h1">资讯</h1>
                    </div>
                    <div class="topNav_div_son"></div>
                </div>
            </div>
            <div class="infromSon_div">
                <p class="infromSon_div_p1">区块链如何才能走进寻常百姓家</p>
                <p class="infromSon_div_p2">时间:2018-05-21 作者:区块君</p>
                <div class="infromSon_div_img">
                    <img src="../../.././static/timg3.jpg" alt="">
                </div>
                <span class="infromSon_div_span">
                    &nbsp;&nbsp;&nbsp;&nbsp;比特币的设计初衷，就是要摆脱传统的支付清算和相关的社会运行体系，打造一个全新的、点对点直接交易和清算的体系。
                    这其中，隐含的设计理念是：由世界范围内不同的计算机共同参与（打破国家边界），
                    形成一个平等的、没有中心（无政府）和中介的“自组织”网络世界。
                    这个网络世界不同于长期以来由主权独立的国家和国家治理体系组成的现实世界，
                    因此，不会适用任何国家的法律或规则，而是会形成新的网络规则，并将规则内置到网络系统之中，
                    由参与运行的计算机共同维护和修改，将网络系统看成“上帝”，由上帝而非人或机构负责规则执行，
                    确保规则执行中的公正公平。不再适用任何国家的法定（主权）货币，防止人为控制货币投放，而是模仿黄金，
                    运用哈希计算和加密技术等，通过“挖矿”产生全新的“加密数字货币”，其总量设定，每个阶段投放的数量完全由系统自动控制。
                    在所有人都登录于比特币网络体系，每一笔比特币的取得都会得到全网确认和分布式记录（能够充分保真）的基础上，
                    其比特币资产的转移完全实现点对点的直接进行，而无需再有任何中介参与。
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .infromSon_div{
        width: 92%;
        min-height: 12.5rem;
        margin: 1.875rem auto 0 auto;
        border-radius: .625rem;
        background: #393949;
        padding: 1.25rem;
    }
    .infromSon_div p{
        text-align: center;
    }
    .infromSon_div_p1{
        color: white;
        font-size: 1.125rem;   
    }
    .infromSon_div_p2{
        color:#999999;
        font-size: .875rem;
        margin: .625rem 0;
    }
    .infromSon_div_img{
        width: 100%;
    }
    .infromSon_div_img img{
        width: 100%;
        height: 100%;
    }
    .infromSon_div_span{
        display: inline-block;
        margin: .625rem 0 .625rem 0;
        color: #666666;
    }
</style>
