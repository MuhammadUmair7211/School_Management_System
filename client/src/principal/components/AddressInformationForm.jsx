const AddressInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        Address Information
      </h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {/* Current Address */}
        <div className="flex flex-col">
          <label htmlFor="currentAddress" className="mb-1 text-sm font-medium">
            Current Address <span className="text-red-500">*</span>
          </label>
          <input
            id="currentAddress"
            type="text"
            placeholder="House / Street / Area"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Current City */}
        <div className="flex flex-col">
          <label htmlFor="currentCity" className="mb-1 text-sm font-medium">
            City / District <span className="text-red-500">*</span>
          </label>
          <input
            id="currentCity"
            type="text"
            placeholder="Enter city or district"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Current State */}
        <div className="flex flex-col">
          <label htmlFor="currentState" className="mb-1 text-sm font-medium">
            State / Province <span className="text-red-500">*</span>
          </label>
          <input
            id="currentState"
            type="text"
            placeholder="Enter state or province"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Current Zip */}
        <div className="flex flex-col">
          <label htmlFor="currentZip" className="mb-1 text-sm font-medium">
            Postal / Zip Code
          </label>
          <input
            id="currentZip"
            type="text"
            placeholder="Enter postal or zip code"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Permanent Address */}
        <div className="flex flex-col">
          <label
            htmlFor="permanentAddress"
            className="mb-1 text-sm font-medium"
          >
            Permanent Address <span className="text-red-500">*</span>
          </label>
          <input
            id="permanentAddress"
            type="text"
            placeholder="House / Street / Area"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Same as Current Address */}
        <div className="flex items-end pb-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300"
            />
            Same as current address
          </label>
        </div>

        {/* Permanent City */}
        <div className="flex flex-col">
          <label htmlFor="permanentCity" className="mb-1 text-sm font-medium">
            City / District <span className="text-red-500">*</span>
          </label>
          <input
            id="permanentCity"
            type="text"
            placeholder="Enter city or district"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Permanent State */}
        <div className="flex flex-col">
          <label htmlFor="permanentState" className="mb-1 text-sm font-medium">
            State / Province <span className="text-red-500">*</span>
          </label>
          <input
            id="permanentState"
            type="text"
            placeholder="Enter state or province"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Permanent Zip */}
        <div className="flex flex-col">
          <label htmlFor="permanentZip" className="mb-1 text-sm font-medium">
            Postal / Zip Code
          </label>
          <input
            id="permanentZip"
            type="text"
            placeholder="Enter postal or zip code"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label htmlFor="country" className="mb-1 text-sm font-medium">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Country
            </option>
            <option>Pakistan</option>
            <option>India</option>
            <option>Afghanistan</option>
            <option>United Arab Emirates</option>
            <option>Saudi Arabia</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>
        </div>

        {/* Transport Facility */}
        <div className="flex flex-col">
          <label htmlFor="transport" className="mb-1 text-sm font-medium">
            Transport Facility
          </label>
          <select
            id="transport"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option>School Van</option>
            <option>Private Transport</option>
            <option>Walk</option>
            <option>Public Transport</option>
          </select>
        </div>

        {/* Distance */}
        <div className="flex flex-col">
          <label htmlFor="distance" className="mb-1 text-sm font-medium">
            Distance from School
          </label>
          <select
            id="distance"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Distance
            </option>
            <option>Below 1 KM</option>
            <option>1 - 3 KM</option>
            <option>3 - 5 KM</option>
            <option>5 - 10 KM</option>
            <option>Above 10 KM</option>
          </select>
        </div>

        {/* Landmark */}
        <div className="flex flex-col">
          <label htmlFor="landmark" className="mb-1 text-sm font-medium">
            Landmark
          </label>
          <input
            id="landmark"
            type="text"
            placeholder="Enter nearby landmark"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInformationForm;
