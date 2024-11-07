import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="text-xl w-[90%] mx-auto">{children}</div>;
};

export default Wrapper;
