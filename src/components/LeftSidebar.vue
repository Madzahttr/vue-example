<template>
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark" v-if="authenticated">
        <!-- Control sidebar content goes here -->
        <div class="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
        </div>
    </aside>
    <!-- /.control-sidebar -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LeftSidebar',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
}
</script>