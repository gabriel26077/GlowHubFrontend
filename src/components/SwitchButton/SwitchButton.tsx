'use client';
import React from "react";

interface SwitchButtonProps {
  isOn: boolean;
  onClick: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isOn, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isOn ? "#4ade80" : "#f87171", // verde/ vermelho mais suave
        color: "white",
        padding: "12px 24px",
        border: "2px solid transparent",
        borderRadius: "25px",
        cursor: "pointer",
        minWidth: "90px",
        fontWeight: "bold",
        fontSize: "16px",
        transition: "all 0.3s ease",
        boxShadow: isOn
          ? "0 4px 15px rgba(74, 222, 128, 0.4)"
          : "0 4px 15px rgba(248, 113, 113, 0.4)",
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.95)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default SwitchButton;
