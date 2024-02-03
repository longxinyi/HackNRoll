import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

/**
 * @description Navigation component for the sidebar to bring users to a specific page
 */
export default function Navigation({ href, text, urlKeyword, ...props }) {
  const router = useRouter();

  return (
    <Link href={href} passHref className="flex flex-row">
      <div
        className={`${
          router.pathname === href || router.pathname.includes(urlKeyword)
            ? "bg-pink-400"
            : "bg-white"
        } rounded-xl flex flex-row align-center self-stretch w-full py-2.5 px-4`}
      >
        <div
          className={`${
            router.pathname === href || router.pathname.includes(urlKeyword)
              ? "text-black"
              : "text-black"
          } text-base flex flex-row justify-center hover:underline`}
        >
          <div
            className={`mr-4 self-center ${
              router.pathname === href || router.pathname.includes(urlKeyword)
                ? "outline-white"
                : "outline-black"
            } `}
          >
            {props?.icon && props.icon}
          </div>
          <div>{text}</div>
        </div>
      </div>
    </Link>
  );
}
