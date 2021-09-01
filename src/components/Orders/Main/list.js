import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isActive: true,
      dialog: false
    };
  },
  computed: {
    ...mapState({
      listMain: state => state.listMain,
      dates: state => state.dates,
      date: state => state.date
    })
  },
  methods: {
    ...mapActions({
      deleteFood: "DELETE_FOOD",
      changeDate: "CHANGE_DATE"
    }),
    filterFood(id, foodId) {
      this.deleteFood({ id, foodId });
    },
    openDialog() {
      this.dialog = !this.dialog;
    },
    selectDate(index) {
      let date = {};
      let dates = this.dates.map((item, i) => {
        if (i == index) {
          item.active = true;
          date = item;
        } else {
          item.active = false;
        }
        return item;
      });
      this.changeDate({ dates: dates, date: date });
    }
  }
};
