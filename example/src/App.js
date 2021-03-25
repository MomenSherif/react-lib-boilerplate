import { TestComponent } from "react-component-lib";
function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1>Hello From Mo'men 🐱‍👤</h1>
        <h2>
          <a href="https://github.com/MomenSherif/react-lib-boilerplate">
            Github Repo
          </a>
          <span>⭐ will be appreciated ❤</span>
        </h2>
      </div>
      <TestComponent theme="secondary" />
    </div>
  );
}

export default App;
