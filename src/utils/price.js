export function getDiscountedPrice(price, discount) {
  if (!discount || discount <= 0) return price;
  return Math.round(price * (1 - discount / 100));
}
