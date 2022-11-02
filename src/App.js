import "./App.css";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const handleClick = () => {
    return alert("Cliqué !");
  };
  return (
    <>
      <header className="App-header">Ready To Go</header>

      <main>
        <div className="global-app-set">
          <div className="app-block-left">
            <div className="level1">
              <div
                onClick={() => {
                  setSwitch1(true);
                }}
                className={`btn-On ${
                  switch1 === true ? "active" : "inactive"
                } `}
              >
                ON
              </div>
              <div
                onClick={() => {
                  setSwitch1(false);
                }}
                className={`btn-Off ${
                  switch1 === false ? "active" : "inactive"
                } `}
              >
                OFF
              </div>
            </div>
            <div className="level2">
              <div
                onClick={() => {
                  setSwitch2(true);
                }}
                className={`btn-On ${
                  switch2 === true ? "active" : "inactive"
                } `}
              >
                ON
              </div>
              <div
                onClick={() => {
                  setSwitch2(false);
                }}
                className={`btn-Off ${
                  switch2 === false ? "active" : "inactive"
                } `}
              >
                OFF
              </div>
            </div>
            <div className="level3">
              <div
                onClick={() => {
                  setSwitch3(true);
                }}
                className={`btn-On ${
                  switch3 === true ? "active" : "inactive"
                } `}
              >
                ON
              </div>
              <div
                onClick={() => {
                  setSwitch3(false);
                }}
                className={`btn-Off ${
                  switch3 === false ? "active" : "inactive"
                } `}
              >
                OFF
              </div>
            </div>
          </div>
          <div className="app-block-right">
            <div className="noway-Btn">No way !</div>
          </div>
        </div>
      </main>
      <footer>
        Made with<span> React </span>at<span> Le Reacteur </span>by
        <span> Elliot </span>
      </footer>
    </>
  );
}

export default App;
