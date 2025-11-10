import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="mb-[41px] md:mb-[81px]">
        <h1 className="text-primary-typo font-bold text-3xl mb-[4px] md:text-6xl md:mb-[12px]">Hello, I&apos;m Julius Ivander</h1>
        <h2 className="text-secondary-typo font-normal text-xl mb-[12px] md:text-[40px] md:mb-[35px]">Full-stack Developer</h2>
        <p className="text-muted-typo font-light text-xs md:text-2xl mb-[12px] md:mb-[24px]">
          I build scalable backend systems and end-to-end web applications. <br className="hidden md:block"/>
          I am passionate on solving problems with code mainly with Javascript.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/JuliusIvander">
            <Image 
              src="github.svg"
              width={16}
              height={14}
              className="w-[16px] h-[14px] md:w-[32px] md:h-[30px]"
              alt="github"
            />
          </Link>
          <Link href="http://linkedin.com/in/julius-ivander-0209551a6/">
            <Image 
              src="linkedin.svg"
              width={16}
              height={16}
              className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] fill-primary-typo"
              alt="linkedin"
            />
          </Link>
        </div>
      </section>
      <section className="mb-[41px] md:mb-[81px]">
        <h1 className="text-primary-typo font-semibold text-base md:text-3xl">Experiences</h1>
      </section>
      <section className="mb-[41px] md:mb-[81px]">
        <h1 className="text-primary-typo font-semibold text-base md:text-3xl">Projects</h1>
      </section>
      <section className="mb-[41px] md:mb-[81px]">
        <h1 className="text-primary-typo font-semibold text-base md:text-3xl">Skills</h1>
      </section>
      <Footer />
    </>
  );
}
