import ProductCard from "./ProductCard";

export default function ProductListing() {
  return (
    <div className="p-2 sm:p-6 flex flex-col gap-2 sm:gap-6 sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array(20)
        .fill(1)
        .map(() => (
          <ProductCard />
        ))}
    </div>
  );
}
