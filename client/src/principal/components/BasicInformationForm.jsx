const BasicInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        Basic Information
      </h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {/* Student Name */}
        <div className="flex flex-col">
          <label htmlFor="studentName" className="mb-1 text-sm font-medium">
            Student Name
          </label>
          <input
            id="studentName"
            type="text"
            placeholder="Enter full name"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Admission No */}
        <div className="flex flex-col">
          <label htmlFor="admissionNo" className="mb-1 text-sm font-medium">
            Admission No.
          </label>
          <input
            id="admissionNo"
            type="text"
            className=" border border-slate-200 p-2 outline-none"
            placeholder="Enter admission no."
          />
        </div>

        {/* Roll No */}
        <div className="flex flex-col">
          <label htmlFor="rollNo" className="mb-1 text-sm font-medium">
            Roll No.
          </label>
          <input
            id="rollNo"
            type="text"
            className="border border-slate-200 p-2 outline-none"
            placeholder="Enter roll no."
          />
        </div>

        {/* DOB */}
        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-1 text-sm font-medium">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            className=" border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-1 text-sm font-medium">
            Gender
          </label>
          <select
            id="gender"
            className="border border-slate-200 p-2 outline-none"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Blood Group */}
        <div className="flex flex-col">
          <label htmlFor="bloodGroup" className="mb-1 text-sm font-medium">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            className=" border border-slate-200 p-2 outline-none"
          >
            <option value="">Select Blood Group</option>
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

        {/* Nationality */}
        <div className="flex flex-col">
          <label htmlFor="nationality" className="mb-1 text-sm font-medium">
            Nationality
          </label>
          <input
            id="nationality"
            type="text"
            defaultValue="Pakistani"
            className="border border-slate-200 p-2 outline-none"
          />
        </div>

        {/* Religion */}
        <div className="flex flex-col">
          <label htmlFor="religion" className="mb-1 text-sm font-medium">
            Religion
          </label>
          <select
            id="religion"
            className="border border-slate-200 p-2 outline-none"
          >
            <option>Islam</option>
            <option>Christianity</option>
            <option>Hinduism</option>
            <option>Sikhism</option>
            <option>Other</option>
          </select>
        </div>

        {/* CNIC / B-Form */}
        <div className="flex flex-col">
          <label htmlFor="cnic" className="mb-1 text-sm font-medium">
            CNIC / B-Form No.
          </label>
          <input
            id="cnic"
            type="text"
            className="border border-slate-200 p-2 outline-none"
            placeholder="Enter Cnic or B-Form number"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-slate-200 p-2 outline-none"
            placeholder="Enter email address"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm font-medium">
            Phone / Mobile
          </label>
          <input
            id="phone"
            type="tel"
            className="border border-slate-200 p-2 outline-none"
            placeholder="03xx-xxxxxxx"
          />
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col">
          <label htmlFor="whatsapp" className="mb-1 text-sm font-medium">
            WhatsApp No.
          </label>
          <input
            id="whatsapp"
            type="tel"
            className="border border-slate-200 p-2 outline-none"
            placeholder="03xx-xxxxxxx"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInformationForm;
