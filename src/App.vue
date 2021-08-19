<template>
    <div class="wrapper">

        <!-- Preloader -->
        <div class="preloader">
            <img src="https://via.placeholder.com/200x200/454545/EAEAEA/" alt="AdminLTELogo" height="200" width="200" style="margin: calc(50vh - 100px) calc(50vw - 100px)">
        </div>

        <Navbar />

        <RightSidebar />

        <router-view/>

        <LeftSidebar />

        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import RightSidebar from '@/components/RightSidebar'
import LeftSidebar from '@/components/LeftSidebar'
import Footer from '@/components/Footer'

export default {
	components: {
		Navbar,
        RightSidebar,
        LeftSidebar,
        Footer
	},
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
@import url("https://pro.fontawesome.com/releases/v5.15.3/css/all.css");
</style>