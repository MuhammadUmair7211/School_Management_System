const SettingsHeader = ({ heading, details }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>

      <p className="mt-1 text-sm text-gray-500">{details}</p>
    </div>
  );
};

export default SettingsHeader;
