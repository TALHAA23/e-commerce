import { Link } from "react-router-dom";

const data = [
  [
    "/icons/tiktok-svgrepo-com.svg",
    "https://www.tiktok.com/@e.innovators?_t=8lGl4rEmP1V&_r=1",
  ],
  [
    "/icons/facebook-color-svgrepo-com.svg",
    "https://www.facebook.com/profile.php?id=100090818400555&mibextid=ZbWKwL",
  ],
  [
    "/icons/tiktok-svgrepo-com.svg",
    "https://www.tiktok.com/@e.innovators_team1?_t=8lGl7vXeadV&_r=1",
  ],
];
export default function GetInTouch() {
  return (
    <div className=" pt-5">
      <ul className=" flex gap-2">
        {data.map(([icon, link], index) => (
          <Link
            key={index}
            to={link}
            className=" border border-gray-300/20 rounded hover:scale-95"
          >
            <img src={icon} alt="img" className="w-7 sm:w-9 aspect-square" />
          </Link>
        ))}
      </ul>
    </div>
  );
}
