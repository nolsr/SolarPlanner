import IconSelector from "../components/IconSelector";
import Input from "../components/Input";
import { useState } from "react";

import { RxPadding, RxMargin } from "react-icons/rx";
import {
  PiParallelogramBold,
  PiRectangleBold,
  PiTriangleBold,
} from "react-icons/pi";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { IoFlashOutline } from "react-icons/io5";

export default function Options(props) {
  const { optionsUpdated, options, panelCount } = props;

  const [roofWidth, setRoofWidth] = useState(options.roofWidth || "");
  const [roofHeight, setRoofHeight] = useState(options.roofHeight || "");
  const [panelWidth, setPanelWidth] = useState(options.panelWidth || "");
  const [panelHeight, setPanelHeight] = useState(options.panelHeight || "");
  const [roofPadding, setRoofPadding] = useState(options.roofPadding || "");
  const [panelMargin, setPanelMargin] = useState(options.panelMargin || "");
  const [roofType, setRoofType] = useState(options.roofType || 0);
  const [panelOutput, setPanelOutput] = useState(options.panelOutput || "");

  const onUpdateInput = (e) => {
    let { name, value } = e.target;
    value = value > 0 ? value : 1;

    // Update the state based on the input name
    switch (name) {
      case "roofType":
        setRoofType(value);
        break;
      case "panelOutput":
        setPanelOutput(value);
        break;
      case "roofWidth":
        setRoofWidth(value);
        break;
      case "roofHeight":
        setRoofHeight(value);
        break;
      case "panelWidth":
        setPanelWidth(value);
        break;
      case "panelHeight":
        setPanelHeight(value);
        break;
      case "roofPadding":
        setRoofPadding(value);
        break;
      case "panelMargin":
        setPanelMargin(value);
        break;
      default:
        break;
    }

    // Update options with the new values
    optionsUpdated({
      roofType: name === "roofType" ? value : roofType,
      roofWidth: name === "roofWidth" ? value : roofWidth,
      roofHeight: name === "roofHeight" ? value : roofHeight,
      panelWidth: name === "panelWidth" ? value : panelWidth,
      panelHeight: name === "panelHeight" ? value : panelHeight,
      roofPadding: name === "roofPadding" ? value : roofPadding,
      panelMargin: name === "panelMargin" ? value : panelMargin,
      panelCount: name === "panelCount" ? value : panelCount,
      panelOutput: name === "panelOutput" ? value : panelOutput,
    });
  };

  return (
    <div className="w-1/4 height-100 border-l-2 bg-white p-8">
      <h2>Einstellungen</h2>

      <h3>Dachform</h3>
      <IconSelector name="roofType" onChange={onUpdateInput}>
        <PiRectangleBold />
        <PiParallelogramBold />
        <PiTriangleBold />
      </IconSelector>

      <h3>Dachmaße</h3>
      <Input
        name="roofHeight"
        value={roofHeight}
        title="roofHeight"
        tooltip="Dachhöhe"
        unit="cm"
        min="0"
        type="number"
        onChange={onUpdateInput}>
        <AiOutlineColumnHeight />
      </Input>
      <Input
        name="roofWidth"
        value={roofWidth}
        title="roofWidth"
        tooltip="Dachbreite"
        unit="cm"
        min="0"
        type="number"
        onChange={onUpdateInput}>
        <AiOutlineColumnWidth />
      </Input>

      <h3>Panelmaße</h3>
      <Input
        name="panelHeight"
        value={panelHeight}
        title="panelHeight"
        tooltip="Breite des Panels"
        unit="cm"
        min="0"
        type="number"
        onChange={onUpdateInput}>
        <AiOutlineColumnHeight />
      </Input>
      <Input
        name="panelWidth"
        value={panelWidth}
        title="panelWidth"
        tooltip="Höhe des Panels"
        unit="cm"
        min="0"
        type="number"
        onChange={onUpdateInput}>
        <AiOutlineColumnWidth />
      </Input>

      <h3>Panelleistung</h3>
      <Input
        name="panelOutput"
        value={panelOutput}
        title="panelOutput"
        tooltip="Leistung eines Panels"
        unit="Wp"
        min="0"
        type="number"
        onChange={onUpdateInput}>
        <IoFlashOutline />
      </Input>

      <h3>Abstände</h3>
      <Input
        name="roofPadding"
        value={roofPadding}
        title="roofPadding"
        tooltip="Innenabstand Dachkante"
        unit="cm"
        min="0"
        step="1"
        type="number"
        onChange={onUpdateInput}>
        <RxPadding />
      </Input>
      <Input
        name="panelMargin"
        value={panelMargin}
        title="panelMargin"
        tooltip="Abstand zwischen Panelen"
        unit="cm"
        type="number"
        min="0"
        step="1"
        onChange={onUpdateInput}>
        <RxMargin />
      </Input>
    </div>
  );
}
