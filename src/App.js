import "./App.css";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  // if (switch1 && switch2 && switch2)
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
            {switch1 && switch2 && switch3 ? (
              <div
                style={{
                  backgroundColor: "#46ac4a",
                  color: "white",
                  borderRadius: "4px",
                  padding: "20px 10px",
                }}
              >
                <p>Go !</p>
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "#d34848",
                  color: "white",
                  borderRadius: "4px",
                  padding: "20px 10px",
                }}
              >
                <p>No Way !</p>
              </div>
            )}
          </div>
        </div>
        {!switch1 && !switch2 && !switch3 ? (
          <div
            className="emergency-Btn"
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "20px",
              padding: "20px 10px",
            }}
          >
            <p>EMERGENCY</p>
          </div>
        ) : (
          <div
            className="emergency-Btn"
            style={{
              visibility: "hidden",
            }}
          >
            <p>Emergency</p>
          </div>
        )}
      </main>
      <footer>
        Made with<span> React </span>at<span> Le Reacteur </span>by
        <span> Elliot </span>
      </footer>
    </>
  );
}

export default App;
