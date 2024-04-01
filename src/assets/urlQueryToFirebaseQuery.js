const qureyTypes = {
  "a-z": ["title", "asc"],
  pricelowtohigh: ["price", "asc"],
  pricehightolow: ["price", "desc"],
  newesttooldest: ["publishDate", "desc"],
  oldesttonewest: ["publishDate", "desc"],
};

export default function urlQueryToFirebaseQuery(searchParam) {
  return (
    qureyTypes[searchParam?.split(" ")?.join("")?.toLocaleLowerCase()] ||
    qureyTypes["a-z"]
  );
}
