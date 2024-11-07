"use client";
import React from "react";
import Wrapper from "../Wrapper";
import Card from "./Card";
import useLocalStorage from "@/src/hooks/useLocalStorage";
import { BillingPlan } from "@/src/utils/utils.types";

const initialState: BillingPlan = {
  base: {
    isActive: true,
    name: "Base Plan",
    billingType: "Current",
    price: "14",
    upgradeType: "",
    description: "Next billed March, 2025",
  },
  premium: {
    isActive: false,
    name: "Business Plan",
    billingType: "Premium",
    price: "14",
    upgradeType: "Upgrade",
    description:
      "Access to AI insights, unlimited uploads of previous forms and so much more.",
  },
};
const Billing = () => {
  const [billing, setBilling] = useLocalStorage("billing", initialState);
  const billingPlan = billing as BillingPlan;

  const handlePlanChange = () => {
    setBilling((billingPlan: BillingPlan) => {
      const { premium, base } = billingPlan;

      return {
        premium: {
          ...premium,
          isActive: !premium.isActive,
          upgradeType: premium?.isActive ? "Upgrade" : "Downgrade",
        },
        base: { ...base, isActive: premium?.isActive },
      };
    });
  };

  return (
    <Wrapper>
      <h2 className="text-3xl">Billing</h2>
      <div className="space-y-8 mt-10">
        <Card cardProps={billingPlan?.base} />
        <Card buttonClick={handlePlanChange} cardProps={billingPlan?.premium} />
      </div>
    </Wrapper>
  );
};

export default Billing;
