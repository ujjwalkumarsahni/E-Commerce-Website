import React from "react";
import "./Button.css";
import { FiTrash2 } from "react-icons/fi";

const DeleteBtn = ({ onClick, label = "Delete item" }) => {
  return (
    <button
      onClick={onClick}
      className="delete-btn"
      aria-label={label}
      title={label}
    >
      <FiTrash2 className="delete-icon" />
    </button>
  );
};

export default DeleteBtn;
