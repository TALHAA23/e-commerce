const addresses = [
  [
    "/icons/flag-for-flag-pakistan-svgrepo-com.svg",
    "Office No 102, 2nd Floor,Arbab Complex (Opp to ICMS School),Babu Gari, Warsak Road, Peshawar",
  ],
  [
    "/icons/united-arab-emirates-svgrepo-com.svg",
    "Ajman Rashidiya 2 Falcon towers, B1 block",
  ],
];
export default function Addresses() {
  return (
    <div className="sm:w-1/2 space-y-1 flex flex-col justify-center">
      <h1 className=" uppercase font-bold text-lg">addresses</h1>

      {addresses.map(([icon, address]) => (
        <div className=" border border-gray-700 rounded-md p-2">
          <img src={icon} alt="flag" className=" w-8 aspect-square" />
          <p className=" text-xs text-gray-300 my-3">{address}</p>
        </div>
      ))}
    </div>
  );
}
