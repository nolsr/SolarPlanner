import Editor from "./containers/Editor";
import Header from "./containers/Header";
import { PiSolarPanelFill } from "react-icons/pi";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <PiSolarPanelFill className="mr-4 text-4xl text-blue-600" />
        <h1>SolarPlaner</h1>
      </Header>
      <Editor />
    </div>
  );
}
