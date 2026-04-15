import type { Metadata } from "next";

/** Seite nicht in Suchmaschinen indexieren – nur für Kunden mit direktem Link */
export const metadata: Metadata = {
  title: "Onboarding – LF Studio",
  robots: { index: false, follow: false },
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
