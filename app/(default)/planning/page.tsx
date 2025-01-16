import { Metadata } from "next/types";
import Plan from "@/app/components/Plan";

export const metadata: Metadata = {
  title: "Lên Kế Hoạch Thôi",
  description: "Planning Process",
};

export default function Home() {
  return (
    <Plan />
  );
}
