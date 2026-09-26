export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export type Page = "home" | "menu" | "contacto";

export type MenuTab =
  | "calientes"
  | "chocolates"
  | "frios-clasicos"
  | "frios-elaborados"
  | "matchas"
  | "sandwiches"
  | "postres";