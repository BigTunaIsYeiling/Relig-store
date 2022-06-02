<template>
  <div class="view">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar {
  height: 6px;
  width: 9px;
}
::-webkit-scrollbar-thumb {
  background-color: #b6c6ce;
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 5px;
  opacity: 0.5;
}
::-webkit-scrollbar-track-piece {
  background: 0 0;
}
</style>
