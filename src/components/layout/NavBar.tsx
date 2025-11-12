import Image from "next/image"

export default function NavBar() {
    return (
        <nav className="py-[23px] md:py-[50px]">
            <Image 
                src="/logo.svg"
                alt="Logo"
                className="w-[36px] h-[36px] md:w-[56px] md:h-[56px]"
                width={32}
                height={32}
                loading="eager"
            />
        </nav>
    )
}