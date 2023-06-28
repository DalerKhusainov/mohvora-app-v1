// REACT
import * as React from "react";

// MATERIAL UI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function FilterSelectorMUIComp({ filterValue, setFilterValue }) {
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Фильтр</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filterValue}
        label="Фильтр"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Фильтр</em>
        </MenuItem>
        <MenuItem value={"Сначала дешевые"}>Сначала дешевые</MenuItem>
        <MenuItem value={"Сначала дорогие"}>Сначала дорогие</MenuItem>
        <MenuItem value={"Ближайшее время"}>Ближайшее время</MenuItem>
        <MenuItem value={"Позднее время"}>Позднее время</MenuItem>
      </Select>
    </FormControl>
  );
}
