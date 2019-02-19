<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>Welcome</h1>
                <h2>欢迎光临</h2>
                <button @click="goToMenu" class="btn btn-success">Go To Menu</button>
            </div>
        </div>
    </div>
    <!-- <div>
        <h1>Home</h1>
    </div> -->
</template>

<script>
export default {
    methods: {
        goToMenu(){
        // 跳转到上一次浏览的页面
        // this.$router.go(-1);

        // 跳转到指定的地址(菜单)
        // this.$router.replace('/menu');

        // 跳转到指定路由名字(name)下
        // this.$router.replace({name:'menuLink'});

        // 通过push压栈进行跳转(更常用)
        // this.$router.push('/menu');
        this.$router.push({name:'menuLink'});
        }
    }
}
</script>

<style scoped>
#home{
    background: url('../../src/assets/pic2.jpg');
    padding: 10%;
    height: 85vh;
}
h1,h2{
    /* margin: 6%; */
}
.background{
    background: #eee;
    opacity: .8;
    max-width: 70vw;
}
</style>
