import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Paper, IconButton, colors } from "@mui/material";
import SearchIcon  from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", colors: "red", }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
