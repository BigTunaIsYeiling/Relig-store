<template>
  <div class="view">
    <div class="page" @click.right.prevent>
      <header>
        <div class="head">
          <nav class="py-2">
            <div class="logo">
              <font-awesome-icon
                class="me-1"
                :icon="['fa', 'bag-shopping']"
              />Relig
            </div>
            <ul class="sub">
              <li>
                <div
                  class="log d-flex align-items-center justify-content-center flex-column"
                  v-if="log"
                >
                  <div class="logo1">
                    <font-awesome-icon
                      class="me-1"
                      :icon="['fa', 'bag-shopping']"
                    />Relig
                  </div>
                  <input
                    placeholder="Username"
                    class="my-3"
                    type="text"
                    id="user"
                  />
                  <div class="pass">
                    <input
                      placeholder="Password"
                      class="my-3"
                      :type="viewpass ? 'text' : 'password'"
                      id="pass"
                    /><font-awesome-icon
                      class="iai"
                      :icon="['fas', `${!viewpass ? 'eye' : 'eye-slash'}`]"
                      @click="viewpass = !viewpass"
                    />
                  </div>
                  <a class="my-1" href="">Forget your password ?</a>
                  <button class="my-2">Log In</button>
                  <hr class="my-3" />
                  <p>Not a member?</p>
                  <button @click="$router.push('/signup')" class="my-2">
                    Sign Up
                  </button>
                </div>
                <button class="signa" @click="log = !log">Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div
          class="main-head d-flex align-items-center flex-column pt-md-5 pt-0"
          @click="log = false"
        >
          <div class="container">
            <div
              class="content px-5 d-flex align-items-center justify-content-md-evenly justify-content-center"
            >
              <div class="text text-center">
                <h1>Relig Shopping</h1>
                <h4 class="mt-2">All the shopping things where you need</h4>
                <button @click="$router.push('/main/cloth')" class="mt-3">
                  Store Now!
                </button>
                <ul>
                  <li>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                  </li>
                  <li>
                    <font-awesome-icon :icon="['fab', 'reddit']" />
                  </li>
                </ul>
              </div>
              <img
                class="img-fluid d-none d-md-flex"
                src="@/assets/logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="firsec d-flex align-items-center flex-column pt-5">
          <div class="container">
            <div
              class="content px-5 pt-5 d-flex align-items-center justify-content-md-between justify-content-center flex-column flex-md-row"
            >
              <div class="text text-center text-md-start">
                <h2>Modern and Charming</h2>
                <p class="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa error sapiente eveniet quia fugiat minus
                  odio placeat! Laborum, magnam.
                </p>
              </div>
              <div class="img">
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_ddnfzdlx.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
        <div class="secsec d-flex align-items-center flex-column pt-5">
          <div class="container">
            <div
              class="content px-5 pt-5 d-flex align-items-center justify-content-between flex-column flex-md-row"
            >
              <div class="text text-center text-md-start">
                <h2>Easy and Appropriate</h2>
                <p class="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  porro laudantium maxime consequatur itaque ad dignissimos
                  suscipit pariatur nam ea. Ullam dolorem maiores porro
                  perspiciatis pariatur iste vitae, voluptates animi.
                </p>
              </div>
              <div class="img mt-3 mt-md-0">
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_ww2jo8zf.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
          </div>
        </div>
        <div class="thirdsec d-flex align-items-center flex-column pt-5">
          <div class="container">
            <div
              class="content px-5 pt-5 d-flex align-items-center justify-content-center flex-column"
            >
              <div class="text text-center">
                <h2>Trusted by the companies</h2>
              </div>
              <div class="compan">
                <ul>
                  <li><font-awesome-icon :icon="['fab', 'amazon-pay']" /></li>
                  <li>
                    <font-awesome-icon :icon="['fab', 'app-store-ios']" />
                  </li>
                  <li><font-awesome-icon :icon="['fab', 'apple-pay']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'ebay']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'github']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'google']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'microsoft']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'paypal']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'pinterest']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'reddit']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'soundcloud']" /></li>
                  <li><font-awesome-icon :icon="['fab', 'tiktok']" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="fourthsec d-flex align-items-center flex-column pt-5">
          <div class="container">
            <div
              class="content px-5 pt-5 d-flex align-items-center justify-content-center flex-column"
            >
              <div
                class="text text-center d-flex align-items-center justify-content-center flex-column"
              >
                <h2>Integrate with StackOverflow</h2>
                <div class="imag mt-3">
                  <img src="@/assets/logo-white.png" />
                  +
                  <font-awesome-icon :icon="['fab', 'stack-overflow']" />
                </div>
                <p class="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  corrupti, consequatur quis quas quod maiores soluta inventore
                  qui excepturi, impedit harum voluptates. Minima adipisci
                  obcaecati corrupti modi recusandae repellat cupiditate eius!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        class="d-flex px-5 align-items-center flex-md-row flex-column justify-content-center"
      >
        <div class="container">
          <div class="foot d-flex align-items-center flex-column">
            <h6 class="mt-3 text-center">
              <font-awesome-icon class="me-1" :icon="['fa', 'copyright']" />
              All copyrights Reserved 2022 by
              <a
                href="https://bigtunaisyeiling.github.io/Portfolio/"
                target="_blank"
                >Ahmed Anany</a
              >
            </h6>
          </div>
        </div>
        <button @click="scrr">
          <font-awesome-icon class="me-1" :icon="['fa', 'arrow-up']" />
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data: function () {
    return {
      isDark: true,
      log: false,
      viewpass: false,
    };
  },
  methods: {
    scrr() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  .head {
    background-color: #000000;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .logo {
        font-family: $j;
        font-size: 1.7em;
        color: #e1e8eb;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        li {
          margin: 8px 0.2em;
          position: relative;
          button.signa {
            background-color: #ffc107;
            color: black;
            padding: 4px;
            border: none;
            border-radius: 5%;
            font-size: 1em;
            font-weight: 500;
          }
        }
      }
    }
  }
}
section {
  background-color: #000000;
  position: relative;
  .main-head {
    background-color: #ffffff;
    color: #000000;
    position: relative;
    background: url("@/assets/back.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ffffff;
    padding-bottom: 157px;
    .content {
      margin-top: 9em;
      img {
        width: 441px;
      }
    }
    .text {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 320px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      padding: 10px;
      h1 {
        font-family: $j;
        font-size: 4.9em;
      }
      h4 {
        font-family: $o;
        font-size: 2.5em;
      }
      button {
        background-color: #ffc107;
        border: none;
        padding: 10px;
        font-weight: 500;
        border-radius: 6%;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 22px 0px;
        li {
          display: inline-flex;
          margin: 0 9px;
          font-size: 22px;
          cursor: pointer;
          transition: 0.7s;
          &:hover {
            transform: scale(1.14);
          }
        }
      }
    }
  }
}
.firsec {
  padding-bottom: 120px;
  overflow: hidden;
  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 10px;
    h2 {
      color: #ffc107;
      font-family: $z;
      letter-spacing: 1px;
    }
    p {
      color: white;
      font-family: $e;
      font-size: 1.2em;
      opacity: 0.9;
      padding-right: 12px;
    }
  }
  .img {
    width: 400px;
    overflow: hidden;
  }
}
.secsec {
  padding-bottom: 157px;
  overflow: hidden;
  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 10px;
    h2 {
      color: #ffc107;
      font-family: $z;
      letter-spacing: 1px;
    }
    p {
      color: white;
      font-family: $e;
      font-size: 1.2em;
      opacity: 0.9;
      padding-right: 12px;
    }
  }
  .img {
    width: 315px;
    overflow: hidden;
  }
}
.thirdsec {
  padding-bottom: 157px;
  overflow: hidden;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 10px;
    h2 {
      color: #ffc107;
      font-family: $z;
      letter-spacing: 1px;
    }
  }
  .compan {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      width: 380px;
      text-align: center;
      overflow: hidden;
      li {
        color: #e1e8eb;
        display: inline-flex;
        margin: 7px 18px;
        margin-top: 22px;
        font-size: 3em;
        cursor: pointer;
        transition: 0.6s;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
}
.fourthsec {
  padding-bottom: 157px;
  overflow: hidden;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 10px;
    h2 {
      color: #ffc107;
      font-family: $z;
      letter-spacing: 1px;
    }
    .imag {
      color: #e1e8eb;
      font-size: 40px;
      img {
        width: 88px;
      }
    }
    p {
      color: white;
      font-family: $e;
      font-size: 1.2em;
      opacity: 0.9;
    }
  }
}
footer {
  background-color: black;
  padding: 100px 120px 40px 120px;
  position: relative;
  color: white;
  .foot {
    a {
      color: whitesmoke;
    }
  }
  button {
    position: absolute;
    right: 20px;
    padding: 7px 12px;
    padding-right: 7px;
    border: none;
    bottom: 10%;
    background-color: #ffc107;
    color: #000000;
    border-radius: 50%;
    display: flex;
  }
}

.log {
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  position: absolute;
  top: 50px;
  right: -87px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  hr {
    background-color: #000000;
    width: 100px;
  }
  a {
    color: #000000;
    font-size: 0.8em;
    font-weight: 500;
    opacity: 0.5;
  }
  input {
    outline: none;
    border: none;
    padding: 2px;
    border-bottom: rgba(213, 207, 207, 0.5) 2px solid;
    width: 200px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    &::placeholder {
      color: #000000;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 500;
      opacity: 0.7;
    }
  }
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    opacity: 0.7;
  }
  button {
    background-color: #ffc107;
    color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 3px;
    padding: 4px;
    border: none;
    font-weight: 500;
  }
  .logo1 {
    font-family: $j;
    font-size: 1.7em;
    color: #000000;
  }
  .pass {
    position: relative;
    .iai {
      position: absolute;
      top: 41%;
      right: -1px;
      cursor: pointer;
    }
  }
}

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {
//   .content {
//     max-width: 100%;
//   }
// }

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {
//   .content {
//     max-width: 100%;
//   }
// }

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {
//   .content {
//     max-width: 80%;
//   }
// }

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {
//   .content {
//     max-width: 70%;
//   }
// }

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {
//   .content {
//     max-width: 60%;
//   }
// }
</style>
