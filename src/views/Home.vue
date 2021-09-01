<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "@/components/Orders/Header";
import Main from "@/components/Orders/Main";

export default {
  name: "Home",
  components: {
    Header,
    Main
  }
};
</script>
