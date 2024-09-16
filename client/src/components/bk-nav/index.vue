<template>

    <div class="bk-nav">
        <div class="bk-nav-siteinfo">
            <img src="/public/favicon.ico" alt="" srcset="" class="bk-nav-sitelogo">

            <div class="bk-nav-sitetitle">boke</div>
        </div>


        <div class="bk-nav-search">搜索框</div>



        <div class="bk-nav-menu">
            <div class="bk-nav-item">de </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.bk-nav {
    width: 100%;
    height: 80px;
    background-color: #f7efe4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;

    .bk-nav-siteinfo {
        height: 50px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-width: 150px;
        background-color: green;

        .bk-nav-sitelogo {
            width: 40px;
            height: 40px;
            background-color: red;
        }

        .bk-nav-sitetitle {
            background-color: aliceblue;
            min-width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            text-align: center;
        }

    }

    .bk-nav-search {
        width: 200px;
        height: 50px;
        background-color: red;
    }

    .bk-nav-menu {
        width: 1000px;
        background-color: aqua;


        .bk-nav-item {
            width: 100px;
            height: 30px;
            line-height: 30px;
            background-color: aquamarine
        }
    }


}
</style>