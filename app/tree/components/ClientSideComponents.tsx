"use client";
import ServerSideComponents from "./ServerSideComponents";

const ClientSideComponents = ({ children, Component }: any) => {
  console.log("This is Client Side");
  return (
    <div className=" w-96 h-96 bg-slate-300">
      This is Client Side Component
      <div className="w-60 h-60 bg-red-300 m-auto">
        {children}
        {/* <ServerSideComponents /> */}
        {Component}
      </div>
    </div>
  );
};

export default ClientSideComponents;
