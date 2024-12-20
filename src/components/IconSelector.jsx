import { useState } from "react";

export default function IconSelector(props) {
  const { children, onChange } = props;
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
    onChange({ target: { name: "roofType", value: index } });
  };

  const renderedItems = children.map((c, index) => {
    const isSelected = index === selected;
    return (
      <div
        key={index}
        className={
          "flex-1 flex align-center justify-center p-3 cursor-pointer text-2xl" +
          (isSelected ? " bg-blue-600 text-white" : " hover:bg-slate-200")
        }
        onClick={handleClick.bind(null, index)}>
        {c}
      </div>
    );
  });

  return (
    <div className="flex divide-x-2 width-100 bg-slate-100 text-neutral-500 rounded-lg overflow-hidden mb-4">
      {renderedItems}
    </div>
  );
}
