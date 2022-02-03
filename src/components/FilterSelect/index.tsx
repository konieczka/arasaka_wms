import React, { useState } from "react";
import {
  FilterContainer,
  FilterStatus,
  FilterDropdown,
  FilterOption,
} from "./styles";

interface Props {
  options: string[];
  selectedFilter: string;
  onSelect: (option: string) => void;
}

const FilterSelect: React.FC<Props> = ({
  options,
  selectedFilter,
  onSelect,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  return (
    <FilterContainer>
      <FilterStatus onClick={toggleDropdown}>
        Filter: {selectedFilter}
      </FilterStatus>
      <FilterDropdown isVisible={isDropdownOpen}>
        {options.map((option) => (
          <FilterOption
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
