import { experienceProps, techStacks } from './props';
import WorkItem from '../components/WorkItem';
import Navbar from '@/components/Navbar';
import { garamond } from './font';
import SocialNetwork, { SocialNetworkIcons } from '@/components/SocialNetwork';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import Image from 'next/image';
import flameImg from '../assets/flame.jpg';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen dark:text-gray-300 max-w-screen-xl mx-auto flex-col items-center px-10 lg:px-24 lg:mt-24">
        <Navbar />

        <div className="w-full flex flex-col lg:flex-row">
          <div className="left lg:w-8/12">
            <div className="mb-8">
              <h1 className={'text-4xl lg:text-7xl font-bold dark:text-white ' + garamond.className}>Jim Tran</h1>
              <h2 className="text-2xl mt-1 dark:text-grey-400">Software Engineer</h2>
            </div>
            <div className="intro ">
              <p className=" mb-2">
                I&apos;m a software engineer based in Finland. I have a passion for staying at the forefront of
                technology by continuously learning new frameworks and tools.
              </p>
              <p className="">
                Outside of coding, I enjoy taking photos, traveling, and music. You can find my photography work on
                Unsplash.
              </p>
            </div>
            {/* <Image className=" absolute -z-10" src={flameImg} alt="flames" width={750} height={250} /> */}
            <div className="mt-14">
              <h3 className="text-2xl font-bold mb-6 dark:text-gray-200"> Experience </h3>
              {experienceProps.map((item, idx) => {
                return <WorkItem key={idx} {...item} />;
              })}
            </div>

            <div className="mt-14">
              <h3 className="text-2xl font-bold mb-6"> Project </h3>
            </div>
          </div>
          <div className="mid lg:w-1/12" />
          <div className="right lg:w-3/12">
            <SocialNetwork />
            <div className="tech-stacks flex flex-wrap gap-x-2">
              {techStacks.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-gray-200 transition duration-500 cursor-grab hover:bg-gray-300 dark:bg-slate-700  rounded-md inline-block px-2 py-1 mb-2 text-sm"
                  >
                    {item}
                  </div>
                );
              })}
            </div>

            <div className="education mt-14 ">
              <h3 className="text-2xl font-bold mb-6 dark:text-gray-100"> Education </h3>
              <div className="mb-8">
                <h4 className="text-lg font-bold dark:text-gray-100"> LUT University </h4>
                <p> Master of Science in Software Product Management and Business </p>
                <p className="text-slate-400 text-sm dark:text-slate-500"> 2022 - 2024 </p>
              </div>
              <div>
                <h4 className="text-lg font-bold dark:text-gray-100"> Ho Chi Minh City University of Technology </h4>
                <p> Bachelor of Engineering in Computer Science </p>
                <p className="text-slate-400 text-sm dark:text-slate-500"> 2016 - 2020 </p>
              </div>
            </div>

            <div className="mt-14"></div>
          </div>
        </div>

        {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div> */}
      </main>
      <footer className=" bg-slate-200 dark:bg-slate-900 dark:text-slate-300 p-10 lg:p-16 ">
        <div className="text-center">{/* <SocialNetworkIcons /> */}</div>
        <div className="copyright text-sm text-center dark:text-slate-400 ">
          <p> © {dayjs().year()} Duc Thinh Tran.</p>
          <p> All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
