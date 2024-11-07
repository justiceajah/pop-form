"use client";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import React from "react";
import Wrapper from "../Wrapper";

const WorkSpace = () => {
  const [profile] = useLocalStorage("profile");
  const profileInfo = profile as {
    name: string;
  };

  return (
    <div>
      <Wrapper>
        <div className="text-3xl">
          Manage Workspace Settings for{" "}
          {profileInfo?.name ? profileInfo?.name : ""}
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkSpace;
