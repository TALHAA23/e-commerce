export default function SearchBar() {
  return (
    <form className="grow h-full max-w-[600px] flex justify-center py-2 ">
      <input
        type="search"
        name="search"
        className="peer w-full h-full rounded-l-full bg-white/90 px-2 focus:outline-none ring-4 ring-transparent focus:ring-[#3c1845] transition-all duration-200"
      />

      <button className=" right-0 w-[60px] px-3 rounded-r-full h-full bg-color-lighter  ring-4 ring-transparent peer-focus:ring-[#3c1845] hover:opacity-70 transition-all duration-200 ">
        <img
          src="/icons/search.svg"
          alt="search"
          className=" h-full aspect-square"
        />
      </button>
    </form>
  );
}
