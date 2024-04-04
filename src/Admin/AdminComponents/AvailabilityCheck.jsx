const AvailabilityCheck = () => (
  <div class="checkbox-wrapper-4">
    <input
      name="availability"
      class="inp-cbx"
      id="availability"
      type="checkbox"
      defaultChecked={true}
    />
    <label class="cbx" htmlFor="availability">
      <span>
        <svg width="12px" height="10px"></svg>
      </span>
      <span className="capitalize text-[0.875rem] text-gray-400">
        availability
      </span>
    </label>
    <svg class="inline-svg">
      <symbol id="check-4" viewBox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </symbol>
    </svg>
  </div>
);
export default AvailabilityCheck;
