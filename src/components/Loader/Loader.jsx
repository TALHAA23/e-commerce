import "./loader.css";
export default function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}
