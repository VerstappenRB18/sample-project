import { Metadata } from "next/types";
import Result from "@/app/components/Result";

export const metadata: Metadata = {
    title: "Kết Quả Nè",
    description: "Result Page",
};

export default function Page() {
    return (
        <Result />
    );
}