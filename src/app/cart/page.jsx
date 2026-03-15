import Cart from "@/components/Cart";
import { headers } from "next/headers";

const getCart = async () => {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/cart`, { cache: "no-store" });
    return await res.json();
  } catch (error) {
    console.log(error);
    return {};
  }
};

const CartPage = async () => {
  const cart = await getCart();
  // console.log(cart);

  return <Cart cart={cart} />;
};

export default CartPage;