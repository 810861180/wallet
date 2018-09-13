<template>
    <div>
        <div class="main_bg test_color">
            <bt-nav></bt-nav>
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)"> -->
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">资讯</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="inform_div">
                <div @click="$router.push({name:'details'})" class="inform_card" v-for="item in initData" :key="item.id" :style="{backgroundImage: 'url(' + item.bgImg + ')', backgroundSize:'contain'}">
                    <p class="inform_card_p1">{{ item.title }}</p>
                    <p class="inform_card_p2">{{ item.text }}</p>
                    <p class="inform_card_p3">{{ item.date }}</p>
                </div>
            </div>
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
            initData: [
                {id:1, bgImg:'../../.././static/timg1.jpg', title:'区块链111111111111111111', text:'每一种技术都是一种......', date:'2018-3-31'},
                {id:2, bgImg:'../../.././static/timg2.jpg', title:'区块链222222222222222222', text:'每一种技术都是一种......', date:'2018-3-31'},
                {id:3, bgImg:'../../.././static/timg3.jpg', title:'区块链333333333333333333', text:'每一种技术都是一种......', date:'2018-3-31'}
            ]
        }
    }
}
</script>

<style scoped>
    .inform_div{
        margin-top: 1.875rem;
        padding-bottom: 6.25rem;
    }
    .inform_card{
        height: 11.875rem;
        width: 90%;
        margin: 0 auto .625rem auto;
        border-radius: .625rem;
        position: relative;
        
    }
    .inform_card p{
        color: white;
        position: absolute;
    }
    .inform_card_p1{
        left: 1.25rem;
        bottom: 2.5rem;
        font-size: 1rem;
    }
    .inform_card_p2{
        left: 1.25rem;
        bottom: 1.25rem;
    }
    .inform_card_p3{
        right: 1.25rem;
        bottom: 1.25rem;
        
    }
</style>
