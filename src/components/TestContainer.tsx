"use client";
import React, { ReactNode } from "react";

function TestContainer({ children }: { children: ReactNode }) {
  return (
    <div className=" containers h-screen w-screen mx-auto bg-cover bg-center">
      <div className="z-10 absolute inset-0 bg-black opacity-55"></div>
      <div className="relative z-20 ">{children}</div>
    </div>
  );
}

export default TestContainer;
