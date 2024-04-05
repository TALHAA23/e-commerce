const AvailabilityCheck = ({ defaultChecked = true }) => (
  <div className="checkbox-wrapper-4">
    <input
      name="availability"
      className="inp-cbx"
      id="availability"
      type="checkbox"
      defaultChecked={defaultChecked}
    />
    <label className="cbx" htmlFor="availability">
      <span>
        <svg width="12px" height="10px"></svg>
      </span>
      <span className="capitalize text-[0.875rem] text-gray-400">
        availability
      </span>
    </label>
    <svg className="inline-svg">
      <symbol id="check-4" viewBox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </symbol>
    </svg>
  </div>
);
export default AvailabilityCheck;
