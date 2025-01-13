"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type DropdownProps = {
  title: string;
  options: { id: string; label: string }[];
};

const FillterDropdown = ({ title, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="m-4">
      {/* Header Section */}
      <div
        className="flex justify-between items-center py-2 cursor-pointer rounded-full "
        onClick={toggleDropdown}
      >
        <h1 className="font-semibold">{title}</h1>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <ul className="space-y-3 ml-2">
          {options.map((option) => (
            <li
              key={option.id}
              className="flex justify-start items-center gap-x-2"
            >
              <input
                type="checkbox"
                className="w-5 h-5"
                name={option.id}
                id={option.id}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FillterDropdown;
