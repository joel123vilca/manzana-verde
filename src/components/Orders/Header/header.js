import { mapState } from "vuex";
export default {
  data() {
    return {
      value1: 50
    };
  },
  computed: {
    ...mapState({
      calories: state => state.calories
    })
  },
  methods: {
    format() {
      return 1100;
    }
  }
};
