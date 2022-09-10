import React, { useState } from "react";
import Admin from "../admin";
import User from "../user";

const Dashboard = () => {
  const [isAdmin, setAdmin] = useState(true);
  return isAdmin ? <Admin /> : <User />;
};

export default Dashboard;
