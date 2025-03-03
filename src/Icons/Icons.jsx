import { Heart, ShoppingCart, CircleUserRound } from "lucide-react";

export const Icons = {
  Wishlist: Heart,
  Cart: ShoppingCart,
  Profile: CircleUserRound,
};

export const ArrowRightIcon = ({size}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
};
