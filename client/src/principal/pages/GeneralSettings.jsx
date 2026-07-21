import { useState } from "react";
import {
  Building2,
  UserRound,
  Share2,
  ImagePlus,
  GraduationCap,
  Link2,
  Info,
  Headphones,
  ChevronRight,
  Save,
  Upload,
} from "lucide-react";

const GeneralSettings = () => {
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [favicon, setFavicon] = useState(null);

  const [formData, setFormData] = useState({
    schoolName: "Greenfield School",
    schoolEmail: "info@greenfieldschool.edu.pk",
    phoneNumber: "+92 300 1234567",
    address: "123, Garden Town, Lahore, Punjab, Pakistan",
    website: "www.greenfieldschool.edu.pk",
    schoolCode: "GS-2026",
    establishedYear: "2010",
    schoolMotto: "Excellence in Education",
    contactName: "John Doe",
    designation: "Principal",
    contactEmail: "principal@greenfieldschool.edu.pk",
    contactPhone: "+92 300 7654321",
    alternatePhone: "+92 42 12345678",
    facebook: "https://facebook.com/greenfieldschool",
    twitter: "https://twitter.com/greenfieldschool",
    instagram: "https://instagram.com/greenfieldschool",
    youtube: "https://youtube.com/greenfieldschool",
    linkedin: "https://linkedin.com/company/greenfieldschool",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setSchoolLogo(URL.createObjectURL(file));
    }
  };

  const handleFaviconChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setFavicon(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("School Logo:", schoolLogo);
    console.log("Favicon:", favicon);

    // API call goes here
  };

  const quickLinks = [
    "Manage Academic Years",
    "Manage Class Sections",
    "Manage Subjects",
    "Manage Fee Types",
    "Manage Examination Types",
    "Manage Roles & Permissions",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-2 xl:grid-cols-[minmax(0,1fr)_320px]">
          {/* ===================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================== */}

          <div className="space-y-2">
            {/* School Information */}
            <section className="rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 border-b border-gray-100 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                  <Building2 size={19} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    School Information
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Basic information about your school
                  </p>
                </div>
              </div>

              <div className="p-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  <InputField
                    label="School Name"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="School Email"
                    name="schoolEmail"
                    type="email"
                    value={formData.schoolEmail}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Row 2 */}
                <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <InputField
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <InputField
                    label="Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {/* Uploads */}
                <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                  <FileUpload
                    label="School Logo"
                    description="PNG, JPG or SVG. Max size 2MB"
                    preview={schoolLogo}
                    onChange={handleLogoChange}
                    icon={<GraduationCap size={25} />}
                  />

                  <FileUpload
                    label="School Favicon"
                    description="ICO or PNG. Max size 1MB"
                    preview={favicon}
                    onChange={handleFaviconChange}
                    icon={<ImagePlus size={25} />}
                  />
                </div>

                {/* Bottom Fields */}
                <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3">
                  <InputField
                    label="School Code / ID"
                    name="schoolCode"
                    value={formData.schoolCode}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Established Year"
                    name="establishedYear"
                    value={formData.establishedYear}
                    onChange={handleChange}
                  />

                  <InputField
                    label="School Motto"
                    name="schoolMotto"
                    value={formData.schoolMotto}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* Contact Person */}
            <section className="rounded-xl border border-gray-200 shadow-sm">
              <SectionHeader
                icon={<UserRound size={19} />}
                title="Contact Person"
                description="Primary contact information for the school"
              />

              <div className="p-4">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  <InputField
                    label="Name"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Email"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                  <InputField
                    label="Phone Number"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Alternate Number"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section className="rounded-xl border border-gray-200 shadow-sm">
              <SectionHeader
                icon={<Share2 size={19} />}
                title="Social Media Links"
                description="Connect your school's social media profiles"
              />

              <div className="p-4">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                  <InputField
                    label="Facebook"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                  />

                  <InputField
                    label="YouTube"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleChange}
                  />

                  <InputField
                    label="LinkedIn"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* Save */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer duration-300"
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </div>

          {/* ===================================== */}
          {/* RIGHT SIDEBAR */}
          {/* ===================================== */}

          <aside className="space-y-2">
            {/* Logo Preview */}
            <div className="rounded-xl border border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  School Logo Preview
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex h-28 w-28 items-center justify-center rounded-full">
                  {schoolLogo ? (
                    <img
                      src={schoolLogo}
                      alt="School Logo"
                      className="h-24 w-24 object-contain"
                    />
                  ) : (
                    <GraduationCap
                      size={70}
                      strokeWidth={1.2}
                      className="text-purple-600"
                    />
                  )}
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {formData.schoolName}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {formData.schoolMotto}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 border-b border-gray-100 p-4">
                <Link2 size={18} className="text-purple-600" />

                <h3 className="text-sm font-semibold text-gray-900">
                  Quick Links
                </h3>
              </div>

              <div className="p-2">
                {quickLinks.map((link) => (
                  <button
                    type="button"
                    key={link}
                    className="flex w-full items-center justify-between rounded-lg p-2 text-left text-sm text-gray-600 transition hover:bg-purple-50 hover:text-purple-600"
                  >
                    <span>{link}</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* System Information */}
            <div className="rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 border-b border-gray-100 p-4">
                <Info size={18} className="text-purple-600" />

                <h3 className="text-sm font-semibold text-gray-900">
                  System Information
                </h3>
              </div>

              <div className="space-y-1 p-4">
                <InfoRow label="System Version" value="v2.4.1" />

                <InfoRow label="Last Updated" value="12 July 2026" />

                <InfoRow label="By" value="Admin" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Database Status</span>

                  <StatusBadge text="Connected" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">System Status</span>

                  <StatusBadge text="Healthy" />
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 border-b border-gray-100 p-4">
                <Headphones size={18} className="text-purple-600" />

                <h3 className="text-sm font-semibold text-gray-900">
                  Need Help?
                </h3>
              </div>

              <div className="p-2">
                <p className="text-sm leading-6 text-gray-500">
                  If you need any help or support, please contact our support
                  team.
                </p>

                <button
                  type="button"
                  className="mt-2 flex items-center gap-2 rounded-lg border border-purple-200 px-4 py-2 text-sm font-medium text-purple-600 transition hover:bg-purple-50"
                >
                  <Headphones size={16} />
                  Contact Support
                </button>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
};

/* ===================================== */
/* REUSABLE COMPONENTS */
/* ===================================== */

const SectionHeader = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
        {icon}
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>

        {description && (
          <p className="mt-0.5 text-xs text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-medium text-gray-700"
      >
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="p-2 w-full border border-gray-200 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
      />
    </div>
  );
};

const FileUpload = ({ label, description, preview, onChange, icon }) => {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-gray-700">
        {label}
      </label>

      <label className="group flex p-4 cursor-pointer items-center gap-4 border border-dashed border-gray-300 px-4 transition hover:border-purple-400 hover:bg-purple-50/30">
        <input
          type="file"
          className="hidden"
          accept="image/png,image/jpeg,image/svg+xml,image/x-icon"
          onChange={onChange}
        />

        <div className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden bg-purple-50 text-purple-600">
          {preview ? (
            <img
              src={preview}
              alt={label}
              className="h-full w-full object-contain"
            />
          ) : (
            icon
          )}
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 group-hover:text-purple-600">
            <Upload size={15} />
            Click to upload
          </div>

          <p className="mt-1 text-xs text-gray-400">{description}</p>
        </div>
      </label>
    </div>
  );
};

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-gray-500">{label}</span>

      <span className="text-sm font-medium text-gray-700">{value}</span>
    </div>
  );
};

const StatusBadge = ({ text }) => {
  return (
    <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
      {text}
    </span>
  );
};

export default GeneralSettings;
