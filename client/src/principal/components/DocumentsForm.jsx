import { Upload } from "lucide-react";

const DocumentsForm = () => {
  const documents = [
    {
      id: "studentPhoto",
      label: "Student Photo",
      required: true,
      accept: "image/png,image/jpeg",
    },
    {
      id: "birthCertificate",
      label: "Birth Certificate",
      required: true,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
    {
      id: "cnicBForm",
      label: "CNIC / B-Form",
      required: true,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
    {
      id: "previousSchoolReport",
      label: "Previous School Report (if any)",
      required: false,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
    {
      id: "fatherCnic",
      label: "Father CNIC",
      required: true,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
    {
      id: "motherCnic",
      label: "Mother CNIC",
      required: true,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
    {
      id: "proofOfAddress",
      label: "Proof of Address",
      required: false,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
    {
      id: "otherDocument",
      label: "Other Document (if any)",
      required: false,
      accept: ".jpg,.jpeg,.png,.pdf",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-800">Documents</h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex flex-col">
            <label
              htmlFor={doc.id}
              className="mb-1 text-sm font-medium text-slate-700"
            >
              {doc.label}
              {doc.required && <span className="ml-1 text-red-500">*</span>}
            </label>

            <label
              htmlFor={doc.id}
              className="cursor-pointer rounded-md border border-slate-200 bg-white p-3 transition hover:border-blue-400"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-slate-200 p-2">
                  <Upload size={18} className="text-slate-500" />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Upload {doc.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    JPG, PNG or PDF (Max 2MB)
                  </p>
                </div>
              </div>

              <input
                id={doc.id}
                type="file"
                accept={doc.accept}
                className="hidden"
              />
            </label>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-blue-600">Note:</span> All
          documents should be clear and readable. Maximum file size is{" "}
          <strong>2MB</strong> per file.
        </p>
      </div>
    </div>
  );
};

export default DocumentsForm;
