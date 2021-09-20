import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import API from "../../utils/API";

const allBooks = [
  "Catering to Nobody",
  "Dying for Chocolate",
  "The Cereal Murders",
  "The Last Suppers",
  "Killer Pancake",
  "The Main Corpse",
  "The Grilling Season",
  "Prime Cut",
  "Tough Cookie",
  "Sticks and Scones",
  "Chopping Spree",
  "Double Shot",
  "Dark Tort",
  "Sweet Revenge",
  "Fatally Flaky",
  "Crunch Time",
  "The Whole Enchilada",
];

export default function NavDrop() {
  useEffect(() => {
    API.singleQuery("test", "allBooks").then((data) => {
      console.log("returned books below");
      console.log(data);
    });
  }, []);

  return (
    <NavDropdown
      title={
        <span className="text-link my-auto " style={{ color: "black" }}>
          Dropdown
        </span>
      }
      id="basic-nav-dropdown"
    >
      {allBooks.map((bookTitle) => {
        return (
          <NavDropdown.Item href="#action/3.1">{bookTitle}</NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}
