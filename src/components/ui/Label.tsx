import { LabelParams } from "@/types/components";

export default function Label({ text, additionalClass="" }: LabelParams) {
    return (
        <div className={`
            bg-label text-primary font-light 
            px-[5px] py-[3px]
            md:px-[8px] py-[5px]
            text-[5px] md:text-xs
            rounded-md md:rounded-lg
            ${additionalClass}
        `}>
            {text}
        </div>
    )
}