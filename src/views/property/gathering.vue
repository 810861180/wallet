<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">收款码</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="gather_div">
                <p class="gather_div_p">Oxq2qe18212982</p>
                <div class="gather_divs">
                    <img src="@/assets/erwei.png" alt="">
                </div>
            </div>
            <div class="strip_btn location" @click="alerts()">
                <p>复制收款地址</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        alerts() {
            this.$Message.success('复制成功')
        }
    }
}
</script>

<style scoped>
    .gather_div{
        width: 80%;
        height: 18.75rem;
        background: #393949;
        margin: 3.125rem auto 0 auto;
        box-shadow: #22222C 0px 0px 10px;
        border-radius: .625rem;
        padding-top: 2.5rem;
    }
    .gather_div_p{
        font-size: 1rem;
        color: white;
        text-align: center;
    }
    .gather_divs{
        width: 60%;
        margin: 1.875rem auto;
    }
    .gather_divs img{
        width: 100%;
        height: 100%;
    }
</style>