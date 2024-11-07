"use client";
import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import Wrapper from "../Wrapper";

const Profile = () => {
  const toast = useRef<Toast>(null);
  const [, setProfile] = useLocalStorage("profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const message = (
    <div className="space-y-4">
      <span>Profile updated successfully!</span>
      <div> Name: {name}</div>
      <div>Email: {email}</div>
    </div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setProfile({
      name,
      email,
    });

    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper>
      <Toast className="z-50" ref={toast} />
      <h2 className="text-3xl">Profile</h2>
      <form
        className="  mx-auto space-y-8 flex flex-col w-fit mt-10"
        onSubmit={handleSubmit}
      >
        <div className="w-full font-medium">
          <label htmlFor="name">Name:</label>
          <input
            className="px-3 py-2 rounded-md border-[1.8px] ml-2"
            type="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="">
          <label htmlFor="email">Email:</label>
          <input
            className="px-3 py-2 rounded-md border-[1.8px] ml-2"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="text-right w-fit justify-self-end border-2 bg-orange-400 px-4 text-base py-1 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
