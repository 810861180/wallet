<template>
    <div>
        <div class="main_bg">
            <bt-nav></bt-nav>
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)"> -->
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">锁仓钱包</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="leadCut">
                <div class="leadCut_1 whiteColor">计划解锁</div>
                <div class="leadCut_2">解锁历史</div>
            </div>
            <div class="close_div">
                <p>PRC剩余本金</p>
                <ul class="close_ul">
                    <li class="close_li" v-for="item in initData" :key="item.id">
                        <p>解锁日期：{{ item.date }}</p>
                        <p>解锁金额：{{ item.value }}</p>
                    </li>
                </ul>
            </div>
            <p class="colse_P">没有跟多数据了</p>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        btNav: (resolve) => { require(['@/components/btNav.vue'], resolve)}
    },
    data() {
        return {
            initData:[
                {id:1, date:'2018-6-8 09:01:01', value:400},
                {id:2, date:'2018-6-8 09:01:01', value:400},
                {id:3, date:'2018-6-8 09:01:01', value:400},
                {id:4, date:'2018-6-8 09:01:01', value:400}
            ]
        }
    }
}
</script>

<style scoped>
    .whiteColor{
        color:white;
    }
    .close_div{
        width: 90%;
        margin: 1.25rem auto 0 auto;
    }
    .close_div p{
        color: white;
        font-size: 1rem;
    }
    .close_ul{
        margin-top: 1.25rem;
    }
    .close_li{
        list-style: none;
        height: 3.75rem;
        width: 100%;
        border-radius: .625rem;
        background: #393949;
        margin-top: .625rem;
        padding-top: .375rem;
        
    }
    .close_li p {
        color: #999999;
        margin-left: 1.25rem;
    }
    .colse_P{
        text-align: center;
        color: #999999;
        margin-top: 1.875rem
    }
</style>
