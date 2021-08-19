<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-dark" v-if="authenticated">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="" @click.prevent="logOut">
                <i class="fas fa-sign-out"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <i class="fas fa-th-large"></i>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },

    methods: {
        ...mapActions({
            logOutAction: 'auth/logOut',
            refreshAction: 'auth/refresh',
        }),

        logOut() {
            this.logOutAction().then(() => {
                this.$router.replace({
                    name: "Login"
                })
            })
        },

        refresh() {
            if(!this.authenticated) return;
            this.refreshAction()
		}
    },
    
	watch:{
        '$route' () {
			this.refresh()
        }
    }
}
</script>