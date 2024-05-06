import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const FormButtons = ({ actionType }) => {
  return (
    <>
      <Link to="/groups">
        <button type="button" value="Cancel" className="cancel btn">
          Cancel
        </button>
      </Link>
      <button
        type="submit"
        value={actionType === "add" ? "Add" : "Edit"}
        className={actionType === "add btn" ? "submit" : "att btn"}
      >
        {actionType === "add" ? "Add" : "Edit"}
      </button>
    </>
  );
};
