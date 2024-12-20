export default function Results(props) {
  const { panelCount, options } = props;

  const calculatePeak = () => {
    return (Number(panelCount) * Number(options.panelOutput)) / 1000;
  };

  return (
    <div className="w-2/12 height-100 border-r-2 bg-white p-8">
      <h2>Ihre Konfiguration</h2>
      <p>{panelCount} Panele</p>
      <p>{calculatePeak()} kWp</p>
    </div>
  );
}
