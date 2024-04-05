const services = [
  "ocal sourcing",
  "sourcing from china",
  "product labeling",
  "amazon easyship",
  "COD (cash on delivery)",
  "warehouse storage",
  "manage FBA returns",
  "amazon & noon all services",
  "brand approval",
];

export default function Services() {
  return (
    <div className="text-center sm:text-left">
      <h1 className=" uppercase font-bold text-lg">services</h1>
      <ul className=" border border-gray-700 rounded-md p-2">
        {services.map((service) => (
          <li className=" capitalize text-xs text-gray-300 my-1">{service}</li>
        ))}
      </ul>
    </div>
  );
}
