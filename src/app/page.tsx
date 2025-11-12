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
        <h1 className="text-primary-typo font-bold text-4xl mb-[4px] md:text-6xl md:mb-[12px]">Hello, I&apos;m Julius Ivander</h1>
        <h2 className="text-secondary-typo font-normal text-2xl mb-[12px] md:text-[40px] md:mb-[35px]">Full-stack Developer</h2>
        <p className="text-muted-typo font-light text-justify text-base md:text-2xl mb-[16px] md:mb-[24px]">
          I build scalable backend systems and end-to-end web applications. <br />
          I am passionate on solving problems with code mainly with Javascript.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/JuliusIvander">
            <Image 
              src="github.svg"
              width={16}
              height={14}
              className="w-[30px] h-[28px] md:w-[40px] md:h-[42px]"
              alt="github"
            />
          </Link>
          <Link href="http://linkedin.com/in/julius-ivander-0209551a6/">
            <Image 
              src="linkedin.svg"
              width={16}
              height={16}
              className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] fill-primary-typo"
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
              <p className="text-muted-typo font-light text-base md:text-lg basis-full md:basis-1/5">{data.duration}</p>
              <div className="basis-full md:basis-4/5">
                <h3 className="text-primary-typo font-medium text-lg md:text-2xl mb-[8px] md:mb-[16px]">{`${data.title} - ${data.company}`}</h3>
                <p className="text-secondary-typo font-light text-justify text-sm md:text-lg mb-[8px] md:mb-[16px]">{data.description}</p>
                <div className="flex flex-wrap gap-[4px] md:gap-[8px]">
                  {data.skills.map((label, index) => (
                    <Label key={index} text={label} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button 
          className="
            bg-main-button hover:bg-main-button-hover 
            text-primary text-base md:text-xl font-medium
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
              <h3 className="text-primary-typo font-medium text-lg md:text-2xl mb-[8px] md:mb-[16px]">{data.title}</h3>
              <p className="text-secondary-typo font-light text-justify text-sm md:text-lg mb-[8px] md:mb-[16px]">{data.description}</p>
              <div className="flex flex-wrap gap-[4px] md:gap-[8px] mb-[14px] md:mb-[24px]">
                {data.skills.map((label, index) => (
                  <Label key={index} text={label} />
                ))}
              </div>
              <div className="flex gap-4 text-primary text-center text-sm md:text-lg">
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
              <p className="text-muted-typo font-light text-base md:text-lg basis-full md:basis-1/5">{data.title}</p>
              <div className="flex flex-wrap basis-full md:basis-4/5 gap-[4px] md:gap-[8px]">
                {data.skills.map((label, index) => (
                  <Label 
                    key={index} 
                    text={label}
                    additionalClass="font-normal text-base md:!text-base"
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
