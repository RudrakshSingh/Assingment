import React from "react";
import { Typography } from "@material-ui/core";
import { Dashboard, BarChart, Settings } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <Dashboard style={{ marginRight: "5px" }} />
        <Typography variant="body1">Dashboard</Typography>
      </div>
      <div className="footer-icon">
        <BarChart style={{ marginRight: "5px" }} />
        <Typography variant="body1">Chart</Typography>
      </div>
      <div className="footer-icon">
        <Settings style={{ marginRight: "5px" }} />
        <Typography variant="body1">Settings</Typography>
      </div>
    </div>
  );
};

export default Footer;
