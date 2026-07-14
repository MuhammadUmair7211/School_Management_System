const AcademicInformationForm = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">
        Basic Academic Information
      </h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {/* Class */}
        <div className="flex flex-col">
          <label htmlFor="class" className="mb-1 text-sm font-medium">
            Class <span className="text-red-500">*</span>
          </label>
          <select
            id="class"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none rounded-md"
          >
            <option value="" disabled>
              Select Class
            </option>
            <option>Nursery</option>
            <option>Prep</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
          </select>
        </div>

        {/* Section */}
        <div className="flex flex-col">
          <label htmlFor="section" className="mb-1 text-sm font-medium">
            Section <span className="text-red-500">*</span>
          </label>
          <select
            id="section"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none rounded-md"
          >
            <option value="" disabled>
              Select Section
            </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>

        {/* Previous School */}
        <div className="flex flex-col">
          <label htmlFor="previousSchool" className="mb-1 text-sm font-medium">
            Previous School
          </label>
          <input
            id="previousSchool"
            type="text"
            placeholder="Enter previous school name"
            className="border border-slate-200 p-2 outline-none rounded-md"
          />
        </div>

        {/* Previous Class */}
        <div className="flex flex-col">
          <label htmlFor="previousClass" className="mb-1 text-sm font-medium">
            Previous Class
          </label>
          <input
            id="previousClass"
            type="text"
            placeholder="Enter previous class"
            className="border border-slate-200 p-2 outline-none rounded-md"
          />
        </div>

        {/* Admission Date */}
        <div className="flex flex-col">
          <label htmlFor="admissionDate" className="mb-1 text-sm font-medium">
            Admission Date <span className="text-red-500">*</span>
          </label>
          <input
            id="admissionDate"
            type="date"
            className="border border-slate-200 p-2 outline-none rounded-md"
          />
        </div>

        {/* Academic Session */}
        <div className="flex flex-col">
          <label htmlFor="academicSession" className="mb-1 text-sm font-medium">
            Academic Session <span className="text-red-500">*</span>
          </label>
          <select
            id="academicSession"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none rounded-md"
          >
            <option value="" disabled>
              Select Session
            </option>
            <option>2024-2025</option>
            <option>2025-2026</option>
            <option>2026-2027</option>
          </select>
        </div>

        {/* Student Category */}
        <div className="flex flex-col">
          <label htmlFor="studentCategory" className="mb-1 text-sm font-medium">
            Student Category
          </label>
          <select
            id="studentCategory"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none rounded-md"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option>General</option>
            <option>Orphan</option>
            <option>Special Child</option>
            <option>Sibling</option>
            <option>Staff Child</option>
          </select>
        </div>

        {/* RTE / Scholarship */}
        <div className="flex flex-col">
          <label htmlFor="scholarship" className="mb-1 text-sm font-medium">
            RTE / Scholarship
          </label>
          <select
            id="scholarship"
            defaultValue=""
            className="border border-slate-200 p-2 outline-none rounded-md"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option>None</option>
            <option>RTE</option>
            <option>Merit Scholarship</option>
            <option>Need Based Scholarship</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AcademicInformationForm;
