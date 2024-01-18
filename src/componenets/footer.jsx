import React from "react";

var year = new Date();

function Footer() {
  return (
    <footer>
      <p>Abdellatif, Copyrights {year.getFullYear()} </p>
    </footer>
  );
}
export default Footer;
