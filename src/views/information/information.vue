<template>
    <div>
        <div class="main_bg">
            <bt-nav></bt-nav>
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
