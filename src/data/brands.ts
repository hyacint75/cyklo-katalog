export interface Brand {
  name: string;
  slug: string;
  logo: string;
  claim: string;
  color: string;
}

export const brands: Brand[] = [
  {
    name: "Superior",
    slug: "superior",
    logo: "/images/brands/superior.webp",
    claim: "Performance without compromise",
    color: "#111111",
  },
  {
    name: "Rock Machine",
    slug: "rock-machine",
    logo: "/images/brands/rock-machine.webp",
    claim: "Ride beyond limits",
    color: "#E10600",
  },
  {
    name: "4Ever",
    slug: "4ever",
    logo: "/images/brands/4ever.png",
    claim: "Exclusive bicycle",
    color: "#D4AF37",
  },
];
