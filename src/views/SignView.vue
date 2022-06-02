<template>
  <div class="signUp" @click.right.prevent>
    <div class="bff"></div>
    <div class="container">
      <div
        class="fram my-md-0 my-5 d-flex align-items-center justisty-content-between flex-column flex-md-row"
      >
        <div class="logo">
          <font-awesome-icon class="me-1" :icon="['fa', 'bag-shopping']" />Relig
        </div>
        <div
          class="links pe-md-4 pr-0 d-flex align-items-start flex-column my-3"
        >
          <li class="my-2">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              color="blue"
              class="me-1"
            />Sign up with Facebook
          </li>
          <li class="my-2">
            <font-awesome-icon
              color="red"
              :icon="['fab', 'google']"
              class="me-1"
            />Sign up with Google
          </li>
        </div>
        <div class="forms ms-md-5 d-flex align-items-center flex-column my-3">
          <h2>SignUp</h2>
          <div class="nan">
            <input
              v-model="nameapp"
              class="my-3"
              type="text"
              placeholder="Full Name"
            />
            <font-awesome-icon
              v-if="nameapp.length < 4"
              :icon="['fas', 'circle-exclamation']"
              class="iai"
              color="crimson"
              style="pointer-events: none"
            />
          </div>
          <div class="em">
            <input
              class="my-3"
              type="email"
              placeholder="Email"
              v-model="email"
            />
            <font-awesome-icon
              v-if="!email.includes('@')"
              :icon="['fas', 'circle-exclamation']"
              class="iai"
              color="crimson"
              style="pointer-events: none"
            />
          </div>
          <div class="pasa">
            <input
              class="my-3"
              :type="viewpass1 ? 'text' : 'password'"
              placeholder="Password"
              v-model="pass"
            /><font-awesome-icon
              class="iai"
              :icon="['fas', `${!viewpass1 ? 'eye' : 'eye-slash'}`]"
              @click="viewpass1 = !viewpass1"
            />
          </div>
          <div class="repasa">
            <input
              class="my-3"
              :type="viewpass2 ? 'text' : 'password'"
              placeholder="Confirm your Password"
              v-model="repass"
            /><font-awesome-icon
              class="iai"
              :icon="['fas', `${!viewpass2 ? 'eye' : 'eye-slash'}`]"
              @click="viewpass2 = !viewpass2"
            />
          </div>
          <button
            :class="[
              email.includes('.com') & (pass === repass) & (pass.length > 0)
                ? 'on'
                : 'off',
            ]"
            @click="$router.push('/main/cloth')"
            class="my-2"
          >
            Sign up
          </button>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewpass1: false,
      viewpass2: false,
      pass: "",
      repass: "",
      email: "",
      nameapp: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.signUp .bff {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/bg.jpg") center no-repeat;
  background-size: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  position: relative;
}

.fram {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 70px;
  padding-top: 100px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  .logo {
    font-size: 2rem;
    position: absolute;
    top: 20px;
    right: 50%;
    transform: translate(50%, -50%);
    font-family: $j;
  }
  .links {
    li {
      list-style-type: none;
      padding: 10px;
      border-radius: 7px;
      background-color: white;
      width: 228px;
      cursor: pointer;
      font-size: 1.07rem;
      font-weight: 500;
      transition: 0.4s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .forms {
    h2 {
      opacity: 0.9;
      font-size: 1.2rem;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    input {
      border: none;
      border-bottom: 2px solid rgba(243, 238, 238, 0.919);
      background-color: transparent;
      outline: none;
      padding: 6px;
      font-weight: 500;
      &::placeholder {
        color: black;
        font-weight: 500;
        opacity: 0.9;
        font-size: 0.9em;
      }
    }
    button {
      border: none;
      background-color: white;
      outline: none;
      padding: 6px;
      font-weight: 500;
      border-radius: 3px;
    }
  }
}
@media only screen and (min-width: 200px) {
  .links {
    border-right: 0;
  }
}
@media only screen and (min-width: 768px) {
  .links {
    border-right: 2px solid black;
  }
}
.pasa,
.repasa,
.em,
.nan {
  position: relative;
  .iai {
    position: absolute;
    top: 41%;
    right: -1px;
    cursor: pointer;
  }
}
.off {
  pointer-events: none;
}
.on {
  pointer-events: all;
}
</style>
