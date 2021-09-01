import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      checkList: ["Camote"],
      icon: "like.svg",
      dialog: false
    };
  },
  computed: {
    ...mapGetters({ food: "food" })
  },
  created() {
    this.getFood({ id: this.$route.params.id });
  },
  methods: {
    ...mapActions({
      getFood: "GET_FOOD",
      addFood: "ADD_FOOD"
    }),
    changeLike() {
      this.icon = "Path.svg";
    },
    add() {
      this.addFood({
        id: this.$route.params.id,
        name: this.food.name,
        value: this.food.kcal
      });
      this.$router.push({ name: "Home" });
    }
  }
};
