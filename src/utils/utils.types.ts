export interface NavigationItem {
  href: string;
  label: string;
}

export interface BillingType {
  isActive: boolean;
  name: string;
  billingType: string;
  price: string;
  upgradeType: 'Upgrade' | 'Downgrade'| '';
  description: string;
}

export type BillingPlan = {
  base: BillingType;
  premium: BillingType;
};