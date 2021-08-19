<template>
    <div class="form-signin">
        <form @submit.prevent="submit">
            <div class="form-group" v-if="formErrors">
                <div class="alert alert-danger" role="alert">
                    Invalid username or password.
                </div>
            </div>
            <img class="mb-4 logo" src="https://via.placeholder.com/100x100/454545/EAEAEA/" alt="" width="100" height="100">
            <h1 class="h3 mb-3 fw-normal text-center">Login</h1>
            <label for="username" class="visually-hidden">Username</label>
            <input type="text" name="username" id="username" class="form-control" placeholder="Username" required autofocus v-model="form.username">
            <label for="password" class="visually-hidden">Password</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" required v-model="form.password">
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Login</button>
                <router-link class="btn btn-secondary" :to="{name:'Register'}">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    components: {
        //
    },
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            formErrors: false
        }
    },
    methods: {
        ...mapActions({
            logIn: 'auth/logIn'
        }),
        submit() {
            this.logIn(this.form).then(() => {
                this.$router.replace({
                    name: 'Dashboard'
                })
            }).catch(() => {
                this.formErrors = true
            })
        }
    }
}
</script>

<style scoped>
html,
body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.form-signin {
    width: 100%;
    max-width: 360px;
    padding: 30px;
    margin: auto;
    margin-top: calc(50vh - 200px);
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
.form-signin .checkbox {
    font-weight: 400;
}
.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}
.form-signin .form-control:focus {
    z-index: 2;
}
.form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.logo {
    margin: 0px 100px;
}
</style>