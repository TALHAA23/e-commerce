export default function SearchResult({ results }) {
  return (
    <div className="w-full max-w-[800px] mx-auto my-3 space-y-1">
      {results.map((result) => (
        <div className=" h-[150px] border-2 border-slate-300 rounded-md flex gap-3 items-center p-1">
          <img
            src="/milk.jpg"
            alt="milk"
            className=" h-full aspect-square rounded-md"
          />
          <div className=" space-y-2">
            <h1 className=" font-bold text-xl">{result.title}</h1>
            <p>{result.description}</p>
            <span className=" font-semibold">${result.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
