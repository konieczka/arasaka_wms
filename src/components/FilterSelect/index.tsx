import React, { useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import {
  FilterContainer,
  FilterStatus,
  FilterDropdown,
  FilterOption,
} from "./styles";

interface Props {
  label: string;
  options: string[];
  selectedFilter: string;
  onSelect: (option: string) => void;
  customCss?: string | FlattenSimpleInterpolation;
}

const FilterSelect: React.FC<Props> = ({
  options,
  selectedFilter,
  onSelect,
  label,
  customCss,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  return (
    <FilterContainer customCss={customCss}>
      <FilterStatus onClick={toggleDropdown}>
        {label}: {selectedFilter}
      </FilterStatus>
      <FilterDropdown isVisible={isDropdownOpen}>
        {options.map((option) => (
          <FilterOption
            key={option}
            onClick={() => {
              onSelect(option);
              toggleDropdown();
            }}
          >
            {option}
          </FilterOption>
        ))}
      </FilterDropdown>
    </FilterContainer>
  );
};

export default FilterSelect;
