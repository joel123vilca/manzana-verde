export default {
  food: {},
  foods: [
    {
      id: 1,
      name: "Main de pollo",
      kcal: 800,
      fat: 6,
      carbo: 108,
      prote: 41,
      recomend: true,
      detail: [
        { icon: "low-sugar.svg", name: "Bajo en Azucar" },
        { icon: "low-lactose.svg", name: "Sin lactosa" },
        { icon: "low-sodium.svg", name: "Bajo en sodio" },
        { icon: "low-fat.svg", name: "Bajo en Grasa" }
      ],
      offers: ["Camote", "Papa", "Arroz"],
      ingredients: "Delicioso plato de pasta con pollo verduras salteadas y chia"
    },
    {
      id: 2,
      name: "Pescado escalfado con trigo",
      kcal: 800,
      fat: 6,
      carbo: 108,
      prote: 41,
      recomend: true,
      detail: [
        { icon: "low-sugar.svg", name: "Bajo en Azucar" },
        { icon: "low-lactose.svg", name: "Sin lactosa" },
        { icon: "low-fat.svg", name: "Bajo en Grasa" }
      ],
      offers: ["Camote", "Papa", "Arroz"],
      ingredients: "Delicioso plato de pasta con pollo verduras salteadas y chia"
    },
    {
      id: 3,
      name: "Ensalada de quinua y beterraga",
      kcal: 800,
      fat: 6,
      carbo: 108,
      prote: 41,
      recomend: true,
      detail: [
        { icon: "low-sugar.svg", name: "Bajo en Azucar" },
        { icon: "low-lactose.svg", name: "Sin lactosa" },
        { icon: "low-sodium.svg", name: "Bajo en sodio" }
      ],
      offers: ["Camote", "Papa", "Arroz"],
      ingredients: "Delicioso plato de pasta con pollo verduras salteadas y chia"
    }
  ],
  listMain: [
    {
      id: 1,
      name: "Media mañana",
      slug: "media-manana",
      active: false,
      icon: "apple.svg",
      value: "200Kcal",
      foodsAsign: []
    },
    {
      id: 2,
      name: "Almuerzo",
      slug: "almuerzo",
      active: true,
      icon: "lunch.svg",
      value: "800Kcal",
      foodsAsign: [
        {
          id: 1,
          name: "pescado escalfado con trigo",
          value: "800kcal"
        },
        {
          id: 2,
          name: "Ensala de quinua y beterraga",
          value: "800kcal"
        }
      ]
    },
    {
      id: 3,
      name: "Media Tarde",
      slug: "media-tarde",
      active: false,
      icon: "apple.svg",
      value: "200Kcal",
      foodsAsign: []
    },
    {
      id: 4,
      name: "Cena",
      slug: "cena",
      active: false,
      icon: "dinner.svg",
      value: "800Kcal",
      foodsAsign: []
    }
  ],
  calories: 50
};
