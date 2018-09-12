<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">关于我们</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="about_div">
                <img src="@/assets/logo.svg" alt="">
                <p class="about_p">钱稻米链</p>
            </div>
            <div>
                <ul>
                    <li class="about_li">
                        <span>使用协议</span>
                        <div class="my_right">
                            <Icon type="ios-arrow-forward" color="#8a8a8a" size="20" />
                        </div>
                    </li>
                    <li class="about_li">
                        <span>隐私条款</span>
                        <div class="my_right">
                            <Icon type="ios-arrow-forward" color="#8a8a8a" size="20" />
                        </div>
                    </li>
                    <li class="about_li">
                        <span>检查版本</span>
                        <div class="my_right">
                            <Icon type="ios-arrow-forward" color="#8a8a8a" size="20" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .my_right{
            display: inline-block;
            height: 50%;
            width:50%;
            float: right;
            text-align: right;
            margin: 0 1.25rem 0 0;
        }
    .about_div{
        text-align: center;
        margin: 80px 0 30px 0;
    }
    .about_p{
        font-size: 1rem;
        color: white;
        font-weight: bold;
    }
    .about_li{
        line-height: 4.375rem;
        height: 4.375rem;
        font-size: 1rem;
        color: #8a8a8a;
        border-bottom: 1px solid #999999;
    }
    .about_li span{
        display: inline-block;
        margin-left: 1.25rem;
    }
</style>