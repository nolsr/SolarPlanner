export default function Input(props) {
  const { title, unit, type, children, value, step, tooltip, ...otherProps } =
    props;
  return (
    <div className="widht-100 flex items-center justify-between mb-2">
      <span className="relative group flex items-center justify-between">
        <label className="mr-4 text-2xl text-neutral-500">{children}</label>
        {tooltip?.length > 0 && (
          <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-sm text-white bg-slate-700 rounded whitespace-nowrap">
            {tooltip}
          </div>
        )}
      </span>
      <span className="w-full flex items-center">
        <input
          type={type}
          value={value}
          {...otherProps}
          step={step ?? 10}
          className="w-full bg-slate-100 p-2 mr-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-neutral-500 font-bold">{unit}</span>
      </span>
    </div>
  );
}
