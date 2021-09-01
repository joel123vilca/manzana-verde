import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isActive: true,
      dates: [
        {
          title: "Lun",
          num: 29,
          select: false,
          active: true
        },
        {
          title: "Mar",
          num: 30,
          select: true,
          active: false
        },
        {
          title: "Mie",
          num: "01",
          select: false,
          active: false
        },
        {
          title: "Jue",
          num: "02",
          select: false,
          active: false
        },
        {
          title: "Vie",
          num: "03",
          select: false,
          active: false
        }
      ]
    };
  },
  computed: {
    ...mapState({
      listMain: state => state.listMain
    })
  },
  methods: {
    ...mapActions({
      deleteFood: "DELETE_FOOD"
    }),
    filterFood(id, foodId) {
      this.deleteFood({ id, foodId });
    },
    selectDate(index) {
      this.dates = this.dates.map((item, i) => {
        if (i == index) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
    }
  }
};
