import { Metadata } from "next/types";
import Success from "@/app/components/Success";

export const metadata: Metadata = {
    title: "Xong Rồi Đó",
    description: "Success Page",
};

export default function Page() {
    return (
        <Success />
    );
}