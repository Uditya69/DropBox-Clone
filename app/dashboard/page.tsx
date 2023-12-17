import React from "react";
import { auth } from "@clerk/nextjs";
import Dropzone from "../Components/Dropzone";
function Dashboard() {
  const { userId } = auth();
  return (
    <>
      <Dropzone />
    </>
  );
}

export default Dashboard;
