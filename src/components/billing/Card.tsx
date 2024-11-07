import { BillingType } from "@/src/utils/utils.types";
import React from "react";

const Card = ({
  buttonClick,
  cardProps: { isActive, name, billingType, price, upgradeType, description },
}: {
  cardProps: BillingType;
  buttonClick?: () => void;
}) => {
  return (
    <div
      className={`${
        isActive ? "border-3 border-[#492f2f]" : ""
      }  cost rounded-xl border-2 lg:w-[700px] `}
    >
      <div className="p-4 space-y-5">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
          {" "}
          <div className="font-bold space-x-3">
            <span>{name}</span>
            <span
              className={`${
                billingType === "Premium"
                  ? "bg-red-200 text-red-500 "
                  : "bg-gray-200 text-black"
              } font-medium rounded-xl px-3 py-1 text-base `}
            >
              {billingType}
            </span>
          </div>
          <div className="flex  items-center font-bold space-x-3">
            <div>
              ${price}/<span>month</span>
            </div>
            {upgradeType && (
              <button
                onClick={() => {
                  if (buttonClick) {
                    buttonClick();
                  }
                }}
                className=" py-2 px-4 rounded-xl bg-[#f63d1c] font-bold text-white text-base"
              >
                {upgradeType}
              </button>
            )}
          </div>
        </div>
        <div className="description text-lg">{description}</div>
      </div>
    </div>
  );
};

export default Card;
