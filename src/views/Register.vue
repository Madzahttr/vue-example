<template>
    <div class="form-signin">
        <form @submit.prevent="submit">
            <div class="form-group" v-show="formErrors.username">
                <div class="alert alert-danger" role="alert">
                    Please enter a Username.
                </div>
            </div>
            <div class="form-group" v-show="formErrors.email">
                <div class="alert alert-danger" role="alert">
                    Please enter an Email.
                </div>
            </div>
            <div class="form-group" v-show="formErrors.password">
                <div class="alert alert-danger" role="alert">
                    Please enter a Password.
                </div>
            </div>
            <div class="form-group" v-show="formErrors.passwordConfirm">
                <div class="alert alert-danger" role="alert">
                    Please confirm your Password.
                </div>
            </div>
            <div class="form-group" v-show="formErrors.passwordNoMatch">
                <div class="alert alert-danger" role="alert">
                    Passwords do not match.
                </div>
            </div>
            <div class="form-group" v-show="alreadyExists">
                <div class="alert alert-danger" role="alert">
                    Email is already taken.
                </div>
            </div>
            <img class="mb-4 logo" src="https://via.placeholder.com/100x100/454545/EAEAEA/" alt="" width="100" height="100">
            <h1 class="h3 mb-3 fw-normal text-center">Register</h1>
            <label for="username" class="visually-hidden">Username</label>
            <input type="text" name="username" id="username" class="form-control" placeholder="Username" required autofocus v-model="form.username">
            <label for="email" class="visually-hidden">Email</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required autofocus v-model="form.email">
            <label for="password" class="visually-hidden">Password</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" required v-model="form.password">
            <label for="password" class="visually-hidden">Confirm Password</label>
            <input type="password" name="passwordConfirm" id="passwordConfirm" class="form-control" placeholder="Confirm Password" required v-model="form.passwordConfirm">
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Register</button>
                <router-link class="btn btn-secondary" :to="{name:'Login'}">Login</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Register",
        data() {
            return {
                form: {
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                },
                formErrors: {
                    username: false,
                    email: false,
                    password: false,
                    passwordConfirm: false,
                    passwordNoMatch: false,
                },
                alreadyExists: false,
            }
        },
        methods: {
            ...mapActions({
                register: 'auth/register'
            }),
            submit() {
                if(this.form.username && this.form.email && this.form.password && this.form.passwordConfirm && this.form.password === this.form.passwordConfirm) {
                    this.register(this.form).then(() => {
                        this.form.username = '';
                        this.form.email = '';
                        this.form.password = '';
                        this.form.passwordConfirm = '';
                        this.$router.push({ name: 'Dashboard' });
                    }).catch(() => {
                        this.alreadyExists = true
                    });
                }

                if(!this.form.username) {
                    this.formErrors.username = true;
                }
                if (!this.form.email) {
                    this.formErrors.email = true;
                }
                if (!this.form.password) {
                    this.formErrors.password = true;
                }
                if (!this.form.passwordConfirm) {
                    this.formErrors.passwordConfirm = true;
                }
                if (this.form.password !== this.form.passwordConfirm) {
                    this.formErrors.passwordNoMatch = true;
                }
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
    margin-top: calc(50vh - 250px);
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
.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.form-signin #password {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.form-signin #passwordConfirm {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.logo {
    margin: 0px 100px;
}
</style>