const OtherInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        Other Information
      </h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {/* Student Email */}
        <div className="flex flex-col">
          <label htmlFor="studentEmail" className="mb-1 text-sm font-medium">
            Student Email
          </label>
          <input
            id="studentEmail"
            type="email"
            placeholder="Enter student email"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Student Mobile */}
        <div className="flex flex-col">
          <label htmlFor="studentMobile" className="mb-1 text-sm font-medium">
            Student Mobile
          </label>
          <input
            id="studentMobile"
            type="tel"
            placeholder="03XX-XXXXXXX"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Nationality */}
        <div className="flex flex-col">
          <label htmlFor="nationality" className="mb-1 text-sm font-medium">
            Nationality <span className="text-red-500">*</span>
          </label>
          <select
            id="nationality"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Nationality
            </option>
            <option>Pakistani</option>
            <option>Afghan</option>
            <option>Indian</option>
            <option>Bangladeshi</option>
            <option>Other</option>
          </select>
        </div>

        {/* Religion */}
        <div className="flex flex-col">
          <label htmlFor="religion" className="mb-1 text-sm font-medium">
            Religion <span className="text-red-500">*</span>
          </label>
          <select
            id="religion"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Religion
            </option>
            <option>Islam</option>
            <option>Christianity</option>
            <option>Hinduism</option>
            <option>Sikhism</option>
            <option>Other</option>
          </select>
        </div>

        {/* Blood Group */}
        <div className="flex flex-col">
          <label htmlFor="bloodGroup" className="mb-1 text-sm font-medium">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        {/* Mother Tongue */}
        <div className="flex flex-col">
          <label htmlFor="motherTongue" className="mb-1 text-sm font-medium">
            Mother Tongue
          </label>
          <select
            id="motherTongue"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Mother Tongue
            </option>
            <option>Urdu</option>
            <option>Pashto</option>
            <option>Punjabi</option>
            <option>Sindhi</option>
            <option>Balochi</option>
            <option>English</option>
            <option>Other</option>
          </select>
        </div>

        {/* Birth Place */}
        <div className="flex flex-col">
          <label htmlFor="birthPlace" className="mb-1 text-sm font-medium">
            Birth Place
          </label>
          <input
            id="birthPlace"
            type="text"
            placeholder="Enter birth place"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Student Type */}
        <div className="flex flex-col">
          <label htmlFor="studentType" className="mb-1 text-sm font-medium">
            Student Type
          </label>
          <select
            id="studentType"
            defaultValue=""
            className="rounded-md border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select Student Type
            </option>
            <option>Day Scholar</option>
            <option>Hostel</option>
            <option>Transfer Student</option>
          </select>
        </div>

        {/* Hobbies */}
        <div className="flex flex-col">
          <label htmlFor="hobbies" className="mb-1 text-sm font-medium">
            Hobbies / Interests
          </label>
          <input
            id="hobbies"
            type="text"
            placeholder="Enter hobbies or interests"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Achievements */}
        <div className="flex flex-col">
          <label htmlFor="achievements" className="mb-1 text-sm font-medium">
            Achievements (if any)
          </label>
          <input
            id="achievements"
            type="text"
            placeholder="Enter achievements"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Medical Conditions */}
        <div className="flex flex-col">
          <label
            htmlFor="medicalConditions"
            className="mb-1 text-sm font-medium"
          >
            Medical Conditions (if any)
          </label>
          <input
            id="medicalConditions"
            type="text"
            placeholder="Enter medical conditions"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* National ID / Passport */}
        <div className="flex flex-col">
          <label htmlFor="nationalId" className="mb-1 text-sm font-medium">
            National ID / Passport No.
          </label>
          <input
            id="nationalId"
            type="text"
            placeholder="Enter ID or passport number"
            className="rounded-md border border-slate-200 p-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherInformationForm;
