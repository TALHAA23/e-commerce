import ProductCard from "./ProductCard";

export default function ProductListing() {
  return (
    <div className="p-6 grid gap-6 place-items-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array(20)
        .fill(1)
        .map(() => (
          <ProductCard />
        ))}
    </div>
  );
}
