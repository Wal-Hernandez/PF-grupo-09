import React from "react";
import "./adminView.css";
function Admin() {
  return (
    <>
      <div className="adminViewContainer">
        <div className="adminPanelTitle">
          <div className="titleView">AdminView </div><div className="btnAdd"><button>ADD</button></div>
        </div>
        <div className="adminPanelContainer">
          <div className="adminPanelColumn">
            <div className="text">
              <h1>example1</h1>
            </div>
            <div className="btnEdit">
              <button>Edit</button>
            </div>
            <div className="btnDel">
              <button>X</button>
            </div>
          </div>
          <div className="adminPanelColumn">
            <div className="text">
              <h1>example1</h1>
            </div>{" "}
            <div className="btnEdit">
              <button>Edit</button>
            </div>
            <div className="btnDel">
              <button>X</button>
            </div>
          </div>
          <div className="adminPanelColumn">
            <div className="text">
              <h1>example1</h1>
            </div>{" "}
            <div className="btnEdit">
              <button>Edit</button>
            </div>
            <div className="btnDel">
              <button>X</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
