<template>
    <div class="main_bg">
        <div>
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">交易详情</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="card_bg">
                <div class="title">+270.00ETH</div>
                <div class="content">
                    <div v-for="item in deal.data" :key='item.id' class="for_div">
                            <span class="span1">{{ item.name }}</span>
                        <div class="s_div">
                            <span class="span2">{{ item.value }}</span>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deal: {
                title:'+270.00ETH',
                data:[
                    {id:1, name:'付款人：', value:'asdljadlaldhasdasd'},
                    {id:2, name:'收款人：', value:'asdljadlaldhasdasd'},
                    {id:3, name:'备注：', value:'asdljadlaldhasdasd'},
                    {id:4, name:'交易号：', value:'asdljadlaldhasdasd'},
                    {id:5, name:'区块：', value:'asdljadlaldhasdasd'},
                    {id:6, name:'交易时间：', value:'asdljadlaldhasdasd'}
                ]
            }
        }
    }
}
</script>

<style scoped>
    .title{
        font-size: 1.375rem;
        color: white;
        text-align: center;
        padding-top: 1.875rem;
    }
    .content{
        width: 90%;
        margin: 0 auto;
        padding-bottom: 2.5rem;
        /* text-align: right; */
    }
    .for_div{
        margin-top: 1.25rem;
    }
    .span1{
        color: white;
        font-size: 1rem;
        display: inline-block;
    }
    .s_div{
        width: 70%;
        display: inline-block;
        text-align: right;
        float: right;
    }
    .span2{
        color: grey;
        font-size: 1rem;
        display: inline-block;
    }
</style>
