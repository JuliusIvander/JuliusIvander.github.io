import { CardParams } from "@/types/components";

export default function Card({ children, type, additionalClass }: CardParams) {
    const cardClass = type === "experience" 
        ? "px-[24px] py-[20px]" 
        : type === "project" 
            ? "px-[16px] py-[12px] md:px-[20px] md:py-[24px]"
            : ""
    return (
        <div className={`rounded-2xl bg-secondary ${cardClass} ${additionalClass}`}>
            {children}
        </div>
    )
}