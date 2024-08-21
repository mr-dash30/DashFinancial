"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNavBar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-3"
          >
            <Image src="/icons/logo.svg" alt="Dash" width={40} height={40} className="
            size-[24px] max-xl:size-14 mr-3
            "/>
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1 
            pl-3  border-l-2 border-black-1">
              Dash
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col gap-4 h-full pt-8 text-white">
                {sidebarLinks.map((menu) => {
                  const isActive =
                    pathName === menu.route ||
                    pathName.startsWith(`${menu.route}/`);
                  return (
                    <SheetClose asChild key={menu.route}>
                        <Link
                      href={menu.route}
                      key={menu.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      
                        <Image
                          src={menu.imgURL}
                          alt={menu.label}
                          
                          width={20}
                        height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                     
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "!text-white": isActive,
                        })}
                      >
                        {menu.label}
                      </p>
                    </Link>
                    </SheetClose>
                    
                  );
                })}
                USEr
              </nav>
            </SheetClose>
            <Footer user={user} type="mobile"/>
          </div>

          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavBar;
