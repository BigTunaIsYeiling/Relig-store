<template>
  <div class="view" @click.right.prevent>
    <nav
      class="d-md-flex main-nav d-none align-items-center flex-column justify-content-start"
    >
      <img src="@/assets/logo-white.png" alt="" />
      <ul class="d-flex flex-column align-items-center">
        <router-link to="/main/cloth"
          ><font-awesome-icon :icon="['fa', 'shirt']"
        /></router-link>
        <router-link to="/main/shoes"
          ><font-awesome-icon :icon="['fa', 'shoe-prints']"
        /></router-link>
        <router-link to="/main/bags"
          ><font-awesome-icon :icon="['fa', 'bag-shopping']"
        /></router-link>
        <router-link to="/main/acces"
          ><font-awesome-icon :icon="['fa', 'hat-wizard']"
        /></router-link>
      </ul>
      <div class="out mt-auto mb-5">
        <button @click="$router.push('/')">
          <font-awesome-icon :icon="['fa', 'square-caret-left']" />
        </button>
      </div>
    </nav>
    <section
      class="d-flex mt-1 ms-md-3 align-items-start flex-row justify-content-between"
    >
      <div class="main-content d-flex align-items-center flex-column">
        <div
          class="head p-2 d-flex flex-row align-items-center justify-content-md-between justify-content-evenly"
        >
          <div class="logo d-none d-md-flex">
            <font-awesome-icon
              class="me-1"
              :icon="['fa', 'bag-shopping']"
            />Relig
          </div>
          <div class="colleb d-flex d-md-none">
            <font-awesome-icon
              class="me-1 colla"
              :icon="['fa', 'ellipsis-vertical']"
              @click="opencollap"
            />
            <div class="navaaa" v-if="navopen">
              <nav
                class="d-flex align-items-center flex-column justify-content-start"
              >
                <ul class="d-flex flex-column align-items-center">
                  <img src="@/assets/logo-white.png" alt="" />
                  <router-link to="/main/cloth"
                    ><font-awesome-icon :icon="['fa', 'shirt']"
                  /></router-link>
                  <router-link to="/main/shoes"
                    ><font-awesome-icon :icon="['fa', 'shoe-prints']"
                  /></router-link>
                  <router-link to="/main/bags"
                    ><font-awesome-icon :icon="['fa', 'bag-shopping']"
                  /></router-link>
                  <router-link to="/main/acces"
                    ><font-awesome-icon :icon="['fa', 'hat-wizard']"
                  /></router-link>
                  <div class="out mt-3 mb-1">
                    <button @click="$router.push('/')">
                      <font-awesome-icon :icon="['fa', 'square-caret-left']" />
                    </button>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
          <div class="cart">
            <font-awesome-icon
              @click="opencart"
              class="ssa"
              :icon="['fa', 'cart-shopping']"
              :class="[carts.length > 0 ? 'rarar' : 'wara']"
            />
            <div v-if="carts.length > 0" class="num">{{ carts.length }}</div>
            <div v-if="cartOpen" class="cart-view">
              <ul>
                <li v-for="(cart, index) in carts" :key="cart.id">
                  <h6>ProductID : {{ cart.proid }}</h6>
                  <h6>price : {{ cart.price }} <span>$</span></h6>
                  <div class="close" @click="removecart(index)">X</div>
                </li>
              </ul>
              <h4 class="d-flex align-items-center justify-content-center">
                Total Cost : {{ total }} <span>$</span>
              </h4>
            </div>
          </div>
        </div>
        <div class="view-route w-100 d-flex flex-column">
          <header class="mt-5 text-center text-md-start">
            <h2>Shopping Items</h2>
            <p class="mt-1">I hope that you Satisfie with our products</p>
            <input
              class="my-3"
              v-model="search"
              type="text"
              placeholder="Search by product Id .."
            />
          </header>
          <div
            class="view-content w-100 w-md-75 d-flex align-items-center justify-content-center"
          >
            <div
              class="products py-5 p-md-1 d-flex flex-row align-items-center justify-content-center flex-wrap"
            >
              <router-view :search="search" :carts="carts"></router-view>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data: function () {
    return {
      cartOpen: false,
      carts: [],
      navopen: false,
      search: "",
    };
  },
  methods: {
    opencart() {
      this.cartOpen = !this.cartOpen;
    },
    removecart(index) {
      this.carts.splice(index, 1);
    },
    opencollap() {
      this.navopen = !this.navopen;
    },
  },
  computed: {
    total() {
      return this.carts.reduce((acc, item) => acc + item.price, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.view {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  color: whitesmoke;
  overflow-x: hidden;
  overflow-y: auto;
  .main-nav {
    height: 100vh;
    background-color: #0000;
    border-radius: 0px 3px 3px 0px;
    margin-left: 1.2em;
    ul {
      list-style-type: none;
      background-color: #222831;
      padding: 14px;
      margin: 10.4em 0 0 0;
      border-radius: 14px;
      a {
        font-size: 1.4em;
        margin: 22px 0px;
        color: whitesmoke;
        transition: 0.5s;
        padding: 8px;
        border-radius: 8px;
        &.router-link-exact-active {
          background-color: #da0037;
          transform: translateX(3px);
          color: rgb(255, 255, 255);
        }
      }
    }
    img {
      width: 80px;
    }
    button {
      border: none;
      background-color: transparent;
      color: #da0037;
      font-size: 1.6em;
      transition: 0.7s;
      &:hover {
        transform: translateX(-3px);
      }
    }
  }
  section {
    height: 100vh;
    width: 100%;
    .main-content {
      width: 100%;
      height: 100%;
      .head {
        width: 100%;
        position: relative;
        .logo {
          font-family: $j;
          font-size: 1.7em;
          color: #e1e8eb;
        }
        .ssa {
          background-color: transparent;
          font-size: 2em;
          cursor: pointer;
          transition: 0.7s;
        }
        .num {
          position: absolute;
          top: -3px;
          z-index: 100;
          color: #e1e8eb;
          right: 50%;
          transform: translateX(59%);
          font-weight: 600;
        }
        .cart {
          position: relative;
          .cart-view {
            position: absolute;
            bottom: 0;
            width: 230px;
            height: auto;
            max-height: 800px;
            background-color: white;
            border-radius: 6px;
            transform: translateY(100%);
            right: 0;
            z-index: 99;
            padding: 6px;
            overflow: auto;
            h4 {
              font-family: $y;
              opacity: 0.8;
              color: black;
              font-size: 1.2em;
              padding-top: 9px;
              span {
                position: relative;
                top: -4px;
                font-size: 0.8em;
              }
            }
            ul {
              padding: 0px;
              list-style-type: none;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 25px;
              li {
                margin: 2px 0px;
                display: flex;
                flex-direction: column;
                position: relative;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                width: 100%;
                color: black;
                padding: 5px;
                border-radius: 3px;
                h6 {
                  font-family: $m;
                  opacity: 0.7;
                  font-size: 1.1em;
                  span {
                    position: relative;
                    top: -4px;
                    font-size: 0.8em;
                  }
                }
                .close {
                  position: absolute;
                  top: 2px;
                  right: 11px;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #777;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 2px;
                  cursor: pointer;
                  font-size: 0.8em;
                  transition: 0.8s;
                  color: #e1e8eb;
                  &:hover {
                    transform: scale(1.1);
                  }
                }
              }
            }
          }
        }
      }
      .view-route {
        height: 100%;
        width: 100%;
        header {
          input {
            padding: 10px 10px;
            padding-left: 32px;
            font-family: $q;
            border-radius: 15px;
            outline: none;
            background-color: transparent;
            border: 1px solid whitesmoke;
            color: whitesmoke;
            background: url("@/assets/sear.png");
            background-position: 2% 50%;
            background-size: 20px;
            background-repeat: no-repeat;
            &::placeholder {
              color: #e1e8eb;
              opacity: 1;
            }
          }
          h2 {
            font-family: $q;
          }
          p {
            font-family: $e;
            letter-spacing: 0.02em;
          }
        }
        .view-content {
          padding: 10px;
          height: fit-content;
          position: relative;
          overflow: hidden;
          &::before {
            content: "";
            position: absolute;
            height: 50%;
            width: 1px;
            background-color: #e1e8eb;
            top: 50%;
            transform: translateY(-50%);
            left: 2px;
          }
          &::after {
            content: "";
            position: absolute;
            height: 50%;
            width: 1px;
            background-color: #e1e8eb;
            top: 50%;
            transform: translateY(-50%);
            right: 2px;
          }
          .products {
            overflow-y: scroll;
            width: 100%;
          }
        }
      }
    }
  }
}
.colla {
  font-size: 1.3em;
  cursor: pointer;
  z-index: 101;
}
.navaaa {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  nav {
    background-color: #0000;
    border-radius: 0px 3px 3px 0px;
    ul {
      list-style-type: none;
      background-color: #222831;
      padding: 0px;
      border-radius: 14px;
      a {
        font-size: 1.2em;
        margin: 6px 0px;
        color: whitesmoke;
        transition: 0.5s;
        padding: 8px;
        border-radius: 8px;
        &.router-link-exact-active {
          background-color: #da0037;
          transform: translateX(3px);
          color: rgb(255, 255, 255);
        }
      }
    }
    img {
      width: 50px;
    }
    button {
      border: none;
      background-color: transparent;
      color: #da0037;
      font-size: 1.6em;
      transition: 0.7s;
      &:hover {
        transform: translateX(-3px);
      }
    }
  }
}
.colleb {
  position: relative;
}
@media (max-width: 768px) {
  .products {
    height: 100%;
  }
}

@media (min-width: 768px) {
  .products {
    height: 500px;
  }
}
.rarar {
  color: #da0037;
}
.wara {
  color: #e1e8eb;
}
</style>
