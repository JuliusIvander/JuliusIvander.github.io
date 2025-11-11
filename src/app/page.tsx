import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Label from "@/components/ui/Label";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

import experiences from "@/datas/experience.json";
import projects from "@/datas/projects.json";
import skills from "@/datas/skills.json";

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
        <Header text="Experiences" />
        <div className="grid grid-cols-1 gap-[12px] md:gap-[24px] mb-[16px] md:mb-[32px]">
          {experiences.datas.map((data, index) => (
            <Card 
              key={index} 
              type="experience" 
              additionalClass="
                flex flex-col md:flex-row 
                gap-y-[4px] md:gap-y-[0px]
              "
            >
              <p className="text-muted-typo font-light text-[9px] md:text-lg basis-full md:basis-1/5">{data.duration}</p>
              <div className="basis-full md:basis-4/5">
                <h3 className="text-primary-typo font-medium text-[9px] md:text-lg mb-[8px] md:mb-[16px]">{`${data.title} - ${data.company}`}</h3>
                <p className="text-secondary-typo font-light text-justify text-[8px] md:text-base mb-[8px] md:mb-[16px]">{data.description}</p>
                <div className="flex flex-wrap gap-[4px] md:gap-[8px]">
                  {data.skills.map((label, index) => (
                    <Label key={index} text={label}/>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button 
          className="
            bg-main-button hover:bg-main-button-hover 
            text-primary text-[8px] md:text-[16px]
            px-[8px] py-[4px] md:px-[16px] md:py-[8px]
            rounded-md cursor-pointer inline-block
          "
          url="julius-cv.pdf"
          text="View My Resume Here"
        />
      </section>
      <section className="mb-[41px] md:mb-[81px]">
        <Header text="Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] md:gap-[24px]">
          {projects.datas.map((data, index) => (
            <Card
              key={index} 
              type="project"
            >
              <h3 className="text-primary-typo font-medium text-[9px] md:text-lg mb-[6px] md:mb-[12px]">{data.title}</h3>
              <p className="text-secondary-typo font-light text-[7px] md:text-sm mb-[8px] md:mb-[16px]">{data.description}</p>
              <div className="flex flex-wrap gap-[4px] md:gap-[8px] mb-[14px] md:mb-[24px]">
                {data.skills.map((label, index) => (
                  <Label key={index} text={label} />
                ))}
              </div>
              <div className="flex gap-4 text-primary text-center text-[8px] md:text-[16px]">
                <Button 
                  url={data.repository}
                  text="Repository"
                  className="
                    bg-main-button hover:bg-main-button-hover
                    py-[4px]
                    rounded-md cursor-pointer inline-block w-1/2
                  "
                />
                <Button 
                  url={data.link}
                  text="Link URL"
                  className="
                    bg-secondary-button hover:bg-secondary-button-hover
                    py-[4px]  
                    rounded-md cursor-pointer inline-block w-1/2
                  "
                />
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="mb-[41px] md:mb-[81px]">
        <Header text="Skills" />
        <div className="grid grid-cols-1 gap-[12px] md:gap-[24px] mb-[16px] md:mb-[32px]">
          {skills.datas.map((data, index) => (
            <Card 
              key={index}
              type="experience"
              additionalClass="
                flex flex-col md:flex-row 
                gap-y-[4px] md:gap-y-[0px]
              "
            >
              <p className="text-muted-typo font-light text-[9px] md:text-lg basis-full md:basis-1/5">{data.title}</p>
              <div className="flex flex-wrap basis-full md:basis-4/5 gap-[4px] md:gap-[8px]">
                {data.skills.map((label, index) => (
                  <Label 
                    key={index} 
                    text={label}
                    additionalClass="font-normal text-[9px] md:!text-base"
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
