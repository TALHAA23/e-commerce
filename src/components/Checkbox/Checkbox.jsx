import { useFilterUpdater } from "../../Context/filterContext";
import "./checkbox.css";
export default function Checkbox({ name, value }) {
  const filterUpdater = useFilterUpdater();

  return (
    <div class="checkbox-wrapper-4">
      <input
        onChange={filterUpdater}
        name={name}
        value={value}
        class="inp-cbx"
        id={value}
        type="checkbox"
      />
      <label class="cbx" htmlFor={value}>
        <span>
          <svg width="12px" height="10px"></svg>
        </span>
        <span className="capitalize">{value}</span>
      </label>
      <svg class="inline-svg">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
}
