<template>
    <div>
        <div class="main_bg">
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
        </div>
    </div>
</template>

<script>
export default {
    components:{
        btNav: (resolve) => { require(['@/components/btNav.vue'], resolve)}
    }
}
</script>

<style>

</style>
