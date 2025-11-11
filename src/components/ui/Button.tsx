import { ButtonParams } from "@/types/components";
import Link from "next/link";

export default function Button({ text, url, className }: ButtonParams) {
    return (
        <Link href={url || ""} className={className}>
            {text}
        </Link>
    )
}