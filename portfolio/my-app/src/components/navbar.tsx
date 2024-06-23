import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Change from "./change"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Command, List, SunIcon } from "lucide-react";

const navbar = () => {
  return (
    <>
      <div className="w-full fixed top-0 z-10">
        <div className="flex backdrop-blur7 w-full m-auto xl:w-6/12 rounded-b-xl justify-between px-6 ">
          <div className="flex align-center ">
           <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mt-9">
                  <Image
                    src={"/menu.png"}
                    width={200}
                    height={100}
                    alt=""
                    className={`flex self-center dark:invert-[0.8] w-6 h-6`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent className="pt-12 sm:w-[40vw] ">
                 
              </SheetContent>
            </Sheet>


          </div>
          <div className="flex my-auto mt-8 mb-6">
            <div className="flex justify-center flex-col w-10 h-10 overflow-hidden rounded-xl bg-[#d8d8d8] dark:bg-[#333] mx-2">
              <Command className="w-full"/>
            </div>
            <div className="flex justify-center flex-col w-10 h-10 overflow-hidden rounded-xl bg-[#d8d8d8] dark:bg-[#333] mx-2">
              <Change/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
