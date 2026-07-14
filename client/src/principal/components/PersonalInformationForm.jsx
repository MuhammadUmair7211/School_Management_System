const PersonalInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        Parent Information
      </h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {/* Father Name */}
        <div className="flex flex-col">
          <label htmlFor="fatherName" className="mb-1 text-sm font-medium">
            Father Name
          </label>
          <input
            id="fatherName"
            type="text"
            placeholder="Enter father's full name"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Father CNIC */}
        <div className="flex flex-col">
          <label htmlFor="fatherCnic" className="mb-1 text-sm font-medium">
            Father CNIC
          </label>
          <input
            id="fatherCnic"
            type="text"
            placeholder="35202-1234567-1"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Father Contact */}
        <div className="flex flex-col">
          <label htmlFor="fatherContact" className="mb-1 text-sm font-medium">
            Father Contact
          </label>
          <input
            id="fatherContact"
            type="tel"
            placeholder="03XX-XXXXXXX"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Father Email */}
        <div className="flex flex-col">
          <label htmlFor="fatherEmail" className="mb-1 text-sm font-medium">
            Father Email
          </label>
          <input
            id="fatherEmail"
            type="email"
            placeholder="father@example.com"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Father Occupation */}
        <div className="flex flex-col">
          <label
            htmlFor="fatherOccupation"
            className="mb-1 text-sm font-medium"
          >
            Father Occupation
          </label>
          <input
            id="fatherOccupation"
            type="text"
            placeholder="Enter father occupation"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Mother Name */}
        <div className="flex flex-col">
          <label htmlFor="motherName" className="mb-1 text-sm font-medium">
            Mother Name
          </label>
          <input
            id="motherName"
            type="text"
            placeholder="Enter mother's full name"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Mother CNIC */}
        <div className="flex flex-col">
          <label htmlFor="motherCnic" className="mb-1 text-sm font-medium">
            Mother CNIC
          </label>
          <input
            id="motherCnic"
            type="text"
            placeholder="35202-1234567-1"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Mother Contact */}
        <div className="flex flex-col">
          <label htmlFor="motherContact" className="mb-1 text-sm font-medium">
            Mother Contact
          </label>
          <input
            id="motherContact"
            type="tel"
            placeholder="03XX-XXXXXXX"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Mother Email */}
        <div className="flex flex-col">
          <label htmlFor="motherEmail" className="mb-1 text-sm font-medium">
            Mother Email
          </label>
          <input
            id="motherEmail"
            type="email"
            placeholder="mother@example.com"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Guardian Name */}
        <div className="flex flex-col">
          <label htmlFor="guardianName" className="mb-1 text-sm font-medium">
            Guardian Name
          </label>
          <input
            id="guardianName"
            type="text"
            placeholder="Enter guardian name"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Guardian Relation */}
        <div className="flex flex-col">
          <label
            htmlFor="guardianRelation"
            className="mb-1 text-sm font-medium"
          >
            Guardian Relation
          </label>
          <select
            id="guardianRelation"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select relation
            </option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Grandfather">Grandfather</option>
            <option value="Grandmother">Grandmother</option>
            <option value="Uncle">Uncle</option>
            <option value="Aunt">Aunt</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Guardian Contact */}
        <div className="flex flex-col">
          <label htmlFor="guardianContact" className="mb-1 text-sm font-medium">
            Guardian Contact
          </label>
          <input
            id="guardianContact"
            type="tel"
            placeholder="03XX-XXXXXXX"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Monthly Income */}
        <div className="flex flex-col">
          <label htmlFor="monthlyIncome" className="mb-1 text-sm font-medium">
            Monthly Income
          </label>
          <select
            id="monthlyIncome"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none"
          >
            <option value="" disabled>
              Select monthly income
            </option>
            <option value="Below 30000">Below PKR 30,000</option>
            <option value="30000-50000">PKR 30,000 - 50,000</option>
            <option value="50000-80000">PKR 50,000 - 80,000</option>
            <option value="80000-120000">PKR 80,000 - 120,000</option>
            <option value="Above 120000">Above PKR 120,000</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
