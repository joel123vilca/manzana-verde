import { mapState } from "vuex";
export default {
  data() {
    return {
      isActive: true
    };
  },
  computed: {
    ...mapState({
      foods: state => state.foods
    })
  }
};
