<template>
  <div class="product my-4" v-for="item in filteredProducts" :key="item.id">
    <div class="imagg d-flex align-items-center justify-content-center">
      <img :src="[item.img]" alt="" />
    </div>
    <div class="text d-flex flex-column text-start p-2">
      <h6 class="my-1">ID : {{ item.proid }}</h6>
      <h6>Price : {{ item.price }} <span>$</span></h6>
      <div class="size">
        <ul>
          <li>1x</li>
          <li>2x</li>
          <li>3x</li>
        </ul>
      </div>
      <h6 class="mb-1 loc">
        <font-awesome-icon class="me-1" :icon="['fa', 'location-dot']" />
        {{ item.location }}
      </h6>
    </div>
    <div
      class="stats d-flex align-items-center flex-row justify-content-center"
    >
      <div class="addd">
        <button @click="addtocart(item)">
          add to cart <font-awesome-icon :icon="['fa', 'cart-shopping']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccesView",
  props: {
    carts: {
      type: Array,
      required: true,
    },
    search: String,
  },
  data: function () {
    return {
      cartos: this.carts,
      products: [
        {
          id: 1,
          img: require("@/assets/acc/acc.png"),
          proid: "ooy_41",
          location: "Tanta,Egypt",
          price: 114,
        },
        {
          id: 2,
          img: require("@/assets/acc/acc1.png"),
          proid: "vmnnbbb_41",
          location: "Tanta,Egypt",
          price: 133,
        },
        {
          id: 3,
          img: require("@/assets/acc/acc2.png"),
          proid: "qqewe_74q",
          location: "Nasr-city,Egypt",
          price: 222,
        },
        {
          id: 6,
          img: require("@/assets/acc/acc3.png"),
          proid: "bvbvgty_77",
          location: "Asuyt,Egypt",
          price: 411,
        },
        {
          id: 7,
          img: require("@/assets/acc/acc4.png"),
          proid: "vbvbvbbpp_454",
          location: "Zefta,Egypt",
          price: 510,
        },
      ],
    };
  },
  methods: {
    addtocart(item) {
      this.cartos.push({
        proid: item.proid,
        price: item.price,
      });
    },
  },
  computed: {
    filteredProducts: function () {
      var filtering = new RegExp(this.search, "i");
      return this.products.filter((item) => {
        return item.proid.match(filtering);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 190px 230px 40px;
  grid-template-areas: "fot" "para" "stat";
  width: 250px;
  border-radius: 11px;
  overflow: hidden;
  margin: 12px;
  background-color: #010a13;
  color: #ededed;
  height: fit-content;
  position: relative;
  .imagg {
    grid-area: fot;
    background-color: #56bbf1;
    img {
      width: 190px;
      height: auto;
    }
  }
  .loc {
    color: whitesmoke;
    font-family: $e;
    opacity: 0.7;
    background-color: #222831;
    padding: 6px;
    display: inline-block;
    width: fit-content;
    border-radius: 7%;
  }
  .text {
    grid-area: para;
    margin-top: 0.9em;
    h6 {
      font-family: $e;
      opacity: 0.7;
      span {
        position: relative;
        top: -4px;
        font-size: 0.8em;
      }
    }
    .size {
      display: flex;
      font-family: $r;
      font-size: 0.9em;
      ul {
        list-style-type: none;
        padding: 0;
        margin-right: 0.4em;
        li {
          padding: 3px;
          background-color: #da0037;
          border-radius: 2px;
          margin: 5px 0px;
          transition: 0.8s;
          cursor: pointer;
          &:hover {
            transform: scale(1.11);
          }
        }
      }
    }
  }
  .stats {
    grid-area: stat;
    margin-top: 5px;
    .price {
      font-size: 1.5em;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid whitesmoke;
      font-family: $m;
      span {
        font-size: 0.7em;
        position: relative;
        top: -5px;
        margin-left: 1px;
      }
    }
    .addd {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        border: none;
        background-color: #da0037;
        padding: 3px 5px;
        font-size: 0.9em;
        border-radius: 3px;
        color: white;
        font-weight: 500;
      }
    }
  }
}
</style>
