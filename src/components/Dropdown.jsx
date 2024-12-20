import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function Dropdown(props) {
  const { options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectClick = () => setIsOpen(!isOpen);
  const handleOptionClick = (index) => setSelectedIndex(index);

  const renderedOptions = options.map((option, index) => (
    <div
      id={index}
      className="hover:bg-slate-200 p-4 cursor-pointer rounded-lg divide-y-8"
      onClick={handleOptionClick.bind(null, index)}>
      {option}
    </div>
  ));

  return (
    <div
      className="border bg-slate-100 text-neutral-500 rounded-lg overflow-hidden"
      onClick={handleSelectClick}>
      {/* Selected Option */}
      <span className="hover:bg-slate-200 p-4 flex justify-between items-center cursor-pointer">
        <div className="font-medium">{options[selectedIndex]}</div>
        <div className="text-2xl">
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </span>

      {/* All Options */}
      <div className="flex flex-col-reverse divide-y divide-y-reverse">
        {isOpen && <div>{renderedOptions}</div>}
      </div>
    </div>
  );
}
