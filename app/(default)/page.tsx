import { Metadata } from "next/types";
import Hero from "@/app/components/Hero";

export const metadata: Metadata = {
  title: "Homepage | Invitation",
  description: "Homepage of Invitation",
};

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
