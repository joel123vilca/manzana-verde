export default [
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
];
