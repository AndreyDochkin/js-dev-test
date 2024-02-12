import Tree from "./Tree";
import mockData from "./utils/mockData";

const App = () => {
  const data = mockData;

  return (
    <div className="app">
      <div className="tree">
        <Tree data={data} />
      </div>
    </div>
  );
};

export default App;
