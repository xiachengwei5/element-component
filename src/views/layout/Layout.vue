<template>
    <div class="y-wrapper">
        <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
            <div class="sidebar-wrapper">
                <Sidebar class="sidebar-container" />
            </div>
            <div class="main-container">
                <Navbar/>
                <App-main/>
            </div>
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '../../views/layout/';
// import store from 'store';
import router from '../../router';
// import permission from 'store/permission';
export default {
    name: 'layout',
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
  
    
    computed: {
        sidebar() {
            // return this.$store.state.app.sidebar;
            let isShow = localStorage.getItem("isShowSidebar");
            console.log("isShowSidebar",isShow)
           let isOpened =  isShow  == 1;
            return {
                "opened":isOpened
            };
        }
    },
    beforeRouteEnter: (to, from, next) => {
        next();
        // const roles = store.getters.roles;
        // if (roles.length !== 0) {
        //   next();
        //   return
        // }
        // store.dispatch('GetInfo').then(() => {
        //   permission.init({
        //     roles: store.getters.roles,
        //     router: router.options.routes
        //   });
        //   next();
        // }).catch(err => {
        //   console.log(err);
        // });
    }
}
</script>
<style  scoped>

.app-wrapper {
    /*@include clearfix;*/
    position: relative;
    height: 100%;
    width: 100%;
}

.hideSidebar .sidebar-wrapper  {
    /*transform: translate(-140px, 0);*/
}

.sidebar-wrapper .sidebar-container {
    transform: translate(132px, 0);
}

.sidebar-wrapper:hover {
    /*transform: translate(0, 0);*/
}

.sidebar-wrapper .sidebar-container {
    transform: translate(0, 0);
}

.main-container {
    margin-left: 40px;
}

.sidebar-wrapper {
    width: 180px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-x: hidden;
    transition: all .28s ease-out;
    /*// @include scrollBar;*/
}

.sidebar-container {
    transition: all .28s ease-out;
}

.main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 180px;
}

</style>
