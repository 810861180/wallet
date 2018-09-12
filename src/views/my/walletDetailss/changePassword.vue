<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">修改密码</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="alter_name">
                <p>当前密码：</p>
                <input type="text" class="alter_name_input" placeholder="请输入你的当前密码">
            </div>
            <div class="alter_name">
                <p>新密码：</p>
                <input type="text" class="alter_name_input inputBg" placeholder="请输入新密码">
            </div>
            <div class="alter_name">
                <p>重复密码：</p>
                <input type="text" class="alter_name_input inputBg2" placeholder="请再次输入密码">
            </div>
            <div class="strip_btn location" @click="$router.go(-1)">
                <p>确 认</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .inputBg{
        background: #31313F;
    }
    .inputBg2{
        background: #2D2D3A;
    }
</style>
