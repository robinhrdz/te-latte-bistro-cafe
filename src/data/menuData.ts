import type { MenuItem, MenuTab } from "../types";

// Menú real de Te Latte Bistro Café (fotografiado en tienda). Precios en quetzales (Q).

export const MENU_CALIENTES: MenuItem[] = [
  { name: "Latte", description: "Espresso doble con leche vaporizada, 9oz", price: "Q14" },
  { name: "Sweet Latte", description: "Nuestro latte con un toque dulce de leche condensada, 9oz", price: "Q15" },
  { name: "Vainilla", description: "Latte con un toque de vainilla natural, 9oz", price: "Q16" },
  { name: "Caramelo", description: "Latte con dulce sabor de caramelo, 9oz", price: "Q16" },
  { name: "Avellanas", description: "Latte con jarabe artesanal de avellana, 9oz", price: "Q16" },
];

export const MENU_CHOCOLATES: MenuItem[] = [
  {
    name: "Choco Cloud",
    description: "Chocolate caliente coronado con crema batida y bolitas de cereal de chocolate",
    price: "Q22",
    image: "/images/choco-cloud.jpg",
  },
  { name: "Cocoa Cloud", description: "Cacao suave coronado con crema batida", price: "Q22" },
];

export const MENU_FRIOS_CLASICOS: MenuItem[] = [
  { name: "Latte", description: "Espresso doble con leche fría sobre hielo", price: "Q22" },
  {
    name: "Sweet Latte",
    description: "Nuestro latte frío con un toque dulce de leche condensada",
    price: "Q24",
    image: "/images/frio-sweet.jpg",
  },
  {
    name: "Vainilla",
    description: "Latte frío con un toque de vainilla natural",
    price: "Q25",
    image: "/images/frio-vainilla.jpg",
  },
  {
    name: "Avellanas",
    description: "Latte frío con jarabe artesanal de avellana",
    price: "Q25",
    image: "/images/frio-avellana.jpg",
  },
  {
    name: "Caramelo",
    description: "Latte frío con dulce sabor de caramelo",
    price: "Q25",
    image: "/images/frio-caramelo.jpg",
  },
];

export const MENU_FRIOS_ELABORADOS: MenuItem[] = [
  {
    name: "Orange",
    description: "Espresso doble sobre jugo de naranja fresco, con hielo",
    price: "Q22",
    image: "/images/orange.jpg",
  },
  {
    name: "Spanish",
    description: "Espresso con leche condensada al estilo español, sobre hielo",
    price: "Q24",
    image: "/images/spanish.jpg",
  },
  {
    name: "Shaken Expresso",
    description: "Doble espresso agitado con hielo hasta formar una espuma sedosa",
    price: "Q28",
    image: "/images/shaken-expresso.jpg",
  },
  {
    name: "Cookie Cloud",
    description: "Latte frío con crema batida, trozos de galleta y salsa de chocolate",
    price: "Q28",
    image: "/images/cookie-cloud.jpg",
  },
  {
    name: "Mocca",
    description: "Espresso con chocolate y leche vaporizada, coronado con cocoa",
    price: "Q28",
    image: "/images/mocca.jpg",
  },
  {
    name: "Tiramisú",
    description: "Latte inspirado en el postre italiano, con crema y cacao espolvoreado",
    price: "Q30",
    image: "/images/tiramisu.jpg",
  },
  {
    name: "Creme Brûlée",
    description: "Latte inspirado en el clásico postre francés, con toque acaramelado",
    price: "Q30",
    image: "/images/creme-brulee.jpg",
  },
];

export const MENU_MATCHAS: MenuItem[] = [
  {
    name: "Sweet",
    description: "Matcha suave con leche endulzada con leche condensada",
    price: "Q28",
    image: "/images/matcha-sweet.jpg",
  },
  {
    name: "Vainilla",
    description: "Matcha suave con un toque de vainilla",
    price: "Q28",
    image: "/images/matcha-vainilla.jpg",
  },
  {
    name: "Caramelo",
    description: "Matcha suave con dulce sabor de caramelo",
    price: "Q28",
    image: "/images/matcha-caramelo.jpg",
  },
];

export const MENU_SANDWICHES: MenuItem[] = [
  {
    name: "Signature Bagel",
    description:
      "Bagel artesanal con tocino, huevo, queso cheddar y queso crema (disponible en Cheddar, Jalapeños & Cheddar, Everything o Plain)",
    price: "Q35",
  },
  {
    name: "Cali Sándwich",
    description:
      "Pan masa madre, jamón de pechuga de pavo, espinaca, tocino, aderezo de la casa, queso fundido y tomate",
    price: "Q45",
  },
  {
    name: "Chipotle Melt",
    description: "Pan brioche tostado con torta de longaniza, salsa chipotle, espinaca, tomate, tocino y queso cheddar",
    price: "Q45",
  },
];

export const MENU_POSTRES: MenuItem[] = [
  {
    name: "Waffle Dulce",
    description: "Waffle caliente con helado, galleta triturada y chocolate Hershey's",
    price: "Q30",
  },
  { name: "Waffle Salado", description: "Waffle con queso crema, jamón y queso cheddar", price: "Q30" },
  {
    name: "Panqueques de Banana",
    description: "Panqueques esponjosos con banana y crema batida",
    price: "Q30",
  },
  { name: "Crolado", description: "Croissant relleno de helado, bañado en chocolate", price: "Q30" },
];

export const MENU_TABS: { key: MenuTab; label: string; shortLabel: string }[] = [
  { key: "calientes", label: "Bebidas Calientes (9oz)", shortLabel: "Calientes" },
  { key: "chocolates", label: "Chocolates", shortLabel: "Chocolates" },
  { key: "frios-clasicos", label: "Lattes Fríos Clásicos", shortLabel: "Fríos Clásicos" },
  { key: "frios-elaborados", label: "Lattes Elaborados (Fríos)", shortLabel: "Elaborados" },
  { key: "matchas", label: "Matchas", shortLabel: "Matchas" },
  { key: "sandwiches", label: "Sándwiches", shortLabel: "Sándwiches" },
  { key: "postres", label: "Dulce Salado & Postres", shortLabel: "Postres" },
];

export const MENU_BY_TAB: Record<MenuTab, MenuItem[]> = {
  calientes: MENU_CALIENTES,
  chocolates: MENU_CHOCOLATES,
  "frios-clasicos": MENU_FRIOS_CLASICOS,
  "frios-elaborados": MENU_FRIOS_ELABORADOS,
  matchas: MENU_MATCHAS,
  sandwiches: MENU_SANDWICHES,
  postres: MENU_POSTRES,
};
