"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import AnimatedLink from "../AnimationLink";
import { Button } from "../ui/button";
const Header = () => {
  const pathName = usePathname();
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({
    query: "(min-width: 1240px)",
  });

  const Links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us ",
      href: "/about-us",
    },
    {
      label: "services",
      href: "/services",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "FAQ's",
      href: "/faqs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(header);
  return (
    <header
      className={cn(
        header
          ? "bg-background   py-4 shadow-md"
          : "bg-transparent shadow-none py-5",
        "fixed w-full    mx-auto z-[999] transition-all duration-300"
      )}
    >
      <div className=" px-4 xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex gap-x-6 items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="go-active"
              width={150}
              height={48}
              quality={80}
            />
          </Link>

          <div
            className=" xl:cursor-pointer xl:hidden"
            onClick={() => setNav((prev) => !prev)}
          >
            {nav ? (
              <IoClose className=" cursor-pointer w-6 h-6 black" />
            ) : (
              <HiOutlineMenu className=" cursor-pointer w-6 h-6 black" />
            )}
          </div>
        </div>
        <ul
          className={cn(
            nav
              ? " py-8 xl:py-0  xl:px-0"
              : "max-h-0 xl:max-h-max w-full bg-background",
            "  hidden xl:flex flex-col items-center w-full bg-background  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5"
          )}
        >
          {Links.map((link, index) => (
            <li
              className={cn(
                "relative text-sm rounded-[3px] uppercase px-2   h-6 flex items-center justify-center font-normal ",
                pathName === link.href ? "   bg-active_link" : "   "
              )}
              key={index}
            >
              <AnimatedLink href={link.href}>{link.label}</AnimatedLink>
            </li>
          ))}
        </ul>
        <Button
          className=" active:bg-blue-500/70 hidden xl:block"
          variant={"secondary"}
        >
          Coming Soon
        </Button>
        {nav && (
          <ul
            className={cn(
              nav
                ? " py-8 xl:py-0  xl:px-0"
                : "max-h-0 xl:max-h-max w-full bg-background",
              " flex  flex-col items-center w-full bg-background  xl:flex-row xl:w-max xl:gap-x-8 gap-y-5"
            )}
          >
            {Links.map((link, index) => (
              <li
                onClick={() => setNav(false)}
                className={cn(
                  "relative text-sm rounded-[3px] uppercase px-2   h-6 flex items-center justify-center font-normal ",
                  pathName === link.href ? "   bg-active_link" : "   "
                )}
                key={index}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Button variant={"secondary"}>Coming Soon</Button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
