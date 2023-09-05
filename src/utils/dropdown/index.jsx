import React, { useState, useRef, useEffect } from "react";
import {ArrowDown, ArrowUp} from 'react-feather'
import { StyledWrapDropdown } from "./style";

const index = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultValue || options[0]
  );
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <StyledWrapDropdown>
      <div className="custom-select" ref={selectRef}>
        <div className="select-box" onClick={toggleDropdown}>
          <span>{selectedOption}</span>
          <div>{isOpen ? <ArrowDown /> : <ArrowUp />}</div>
        </div>
        {isOpen && (
          <div className="dropdown-options">
            {options.map((option, index) => (
              <div
                key={index}
                className={`dropdown-option ${
                  option.title === selectedOption ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option.title)}
              >
                {option.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledWrapDropdown>
  );
};

export default index;
