import React, { useContext } from "react";
import { UserContext } from "./UserContext";
function InvalidPage() {
  const { token } = useContext(UserContext);
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        border: "1px solid red",
      }}
    >
      {token ? (
        <h3 style={{ textAlign: "center" }}>Invalid Page</h3>
      ) : (
        <h3 style={{ textAlign: "center" }}>Invalid Page</h3>
      )}
    </div>
  );
}
export default InvalidPage;
