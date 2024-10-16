import React, { useState } from "react";
import SideBarComponents from "./SideBarComponents";

const SideBar = () => {

    


  return (
    <div className="w-[18rem] bg-white border h-[100vh] flex flex-col items-center ">
    
      <div className="h-[70px] w-full shadow-sm flex justify-center items-center">Logo</div>
      <div className="w-[85%] mt-4 ">
        <SideBarComponents title='Dashboard' iconA='aa' />
        <SideBarComponents title='Products' iconB='aa'/>
        <SideBarComponents title='Orders' iconC='aa' />
        <SideBarComponents title='Statistics' iconD='aa' />
        <SideBarComponents title='Review' iconE='aa' />
        <SideBarComponents title='Customers' iconF='aa' />
        <SideBarComponents title='Transactions' iconA='aa'/>
        <SideBarComponents title='Settings' iconA='aa'/>
      </div>
    </div>
  );
};

export default SideBar;
