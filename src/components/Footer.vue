<template>
    <!-- Main Footer -->
    <footer class="main-footer" v-if="authenticated">
        <!-- To the right -->
        <div class="float-right d-none d-sm-inline">
            Powered by a small hamster
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; 2021 <a href="http://site.com">site.com</a>.</strong> All rights reserved.
    </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Footer',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
        })
    },
}
</script>