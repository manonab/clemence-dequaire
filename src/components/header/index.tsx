import React from "react";
import { useRouter } from "next/navigation";

export const Menu: React.FC = () => {
  const router = useRouter();

  const pathTextMapping = [
    { path: "/about", name: "About" },
    { path: "/values", name: "My Values" },
    { path: "/services", name: "Services" },
    { path: "/projects", name: "Projects" }
  ];

  return (
    <div className="flex mx-auto justify-between py-[30px] px-[40px]" style={{ background: "linear-gradient(180deg, rgba(52, 57, 0, 0.20) 0%, rgba(233, 231, 209, 0.00) 100%)" }}>
      <div onClick={() => router.push('/')} className="hover:cursor-pointer">
        <p className="text-grayBlack font-kateMedium text-3xl leading-8">C.</p>
      </div>
      <div
        className="flex justify-center items-center">
        {pathTextMapping.map((route) => (
          <div
            className="px-5 w-auto"
            key={route.path}
            onClick={() => router.push(`${route.path}`)}
          >
            <p className="leading-4 text-grayBlack hover:cursor-pointer text-sm font-clash text-black">
              {route.name}
            </p>
          </div>
        ))}
      </div>
      <div onClick={() => router.push('/contact')}>
        <p className="hover:cursor-pointer font-clashSemibold underline">Let’s work together</p>
      </div>
    </div>
  );
};