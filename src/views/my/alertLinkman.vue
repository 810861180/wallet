<template>
    <div>
        <div class="main_bg test_color">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.push({name:'My'})">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">修改联系人</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="linkman_div">
                <ul>
                    <li class="linkman_div_li">
                        <p class="linkman_div_p">名字</p>
                        <input type="text" class="linkman_div_input remakeColor" placeholder="请输入你的名字" value="云">
                    </li>
                    <li class="linkman_div_li">
                        <p class="linkman_div_p">姓氏</p>
                        <input type="text" class="linkman_div_input remakeColor" placeholder="请输入你的姓氏" value="马">
                    </li>
                    <li class="linkman_div_li">
                        <p class="linkman_div_p">地址</p>
                        <input type="text" class="linkman_div_input remakeColor" placeholder="请输入你的地址" value="asdhkahsdkahdk">
                    </li>
                    <li class="linkman_div_li">
                        <p class="linkman_div_p">手机号</p>
                        <input type="text" class="linkman_div_input remakeColor" placeholder="请输入你的手机号" value="12312321">
                    </li>
                    <li class="linkman_div_li">
                        <p class="linkman_div_p">备注</p>
                        <textarea type="text" class="linkman_div_input input_head remakeColor" placeholder="请输入备注" v-model="remark"></textarea>
                    </li>
                </ul>
            </div>
            <div class="strip_btn location" @click="$router.push({name:'AddressBook'})">
                <p>修 改</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            remark:'dsaasdasodhashdkjashdkjas'
        }
    }
}
</script>

<style scoped>
    /* .linkman_div{
        width: 80%;
        margin: 1.875rem auto 0 auto;
    }
    .linkman_div ul{
        padding-bottom: 6.25rem;
    }
    .linkman_div_li{
        width: 100%;
    }
    .linkman_div_p{
        width: 100%;
        font-size: 1rem;
        color: white;
        text-align: center;
        margin-bottom: .625rem;
    }
    .linkman_div_input{
        width: 100%;
        margin-bottom: .625rem;
        height: 2.5rem;
        border-radius: .625rem;
        font-size: 1rem;
        border: 0;
        padding-left: .625rem;
        outline: none;
        background: #393949;
        color: #999999;
    }
    .input_head{
        height: 9.375rem;
        padding-top: .625rem;
    } */

    .remakeColor{
        color: white;
    }
</style>