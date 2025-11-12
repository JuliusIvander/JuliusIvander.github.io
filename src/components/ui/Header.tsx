import { HeaderParams } from "@/types/components";

export default function Header({ text }: HeaderParams) {
    return <h1 className="text-primary-typo font-semibold text-2xl md:text-3xl mb-[16px] md:mb-[32px]">{text}</h1>
}