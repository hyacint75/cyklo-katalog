export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Gravel",
    slug: "gravel",
    description: "Univerzální kola pro silnici i lehký terén.",
    image: "/images/categories/gravel.webp",
  },
  {
    name: "MTB",
    slug: "mtb",
    description: "Horská kola pro náročný terén.",
    image: "/images/categories/mtb.webp",
  },
  {
    name: "Silniční",
    slug: "silnicni",
    description: "Rychlost a výkon na asfaltu.",
    image: "/images/categories/silnicni.webp",
  },
];
