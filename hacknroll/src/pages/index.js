import { Button, Tabs, Tab } from "@mui/material";
import Image from "next/image";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Navigation from "@/components/common/navigation";

export default function Index() {
  const [value, setValue] = React.useState("volunteer");

  return (
    <div>
      <div className="flex bg-yellow w-full min-h-screen justify-center items-center">
        <div className="flex flex-col bg-white p-6 md:p-10 xl:p-16 rounded-3xl m-6 w-1/3 min-w-[330px]">
          <Image
            src="/logo.svg"
            alt="Hack N Roll"
            width={0}
            height={0}
            className="w-1/2 mx-auto min-w-[180px]"
          />
          <div className="flex flex-row mt-11 mx-auto gap-10">
            <Button
              variant="outlined"
              value="volunteer"
              className={`${
                value === "admin"
                  ? "text-black border-black"
                  : "text-blue border-sky-500"
              }`}
              onClick={(e) => setValue(e.target.value)}
            >
              VOLUNTEER
            </Button>
            <Button
              variant="outlined"
              value="admin"
              onClick={(e) => setValue(e.target.value)}
              className={`${
                value === "volunteer"
                  ? "text-black border-black"
                  : "text-blue border-sky-500"
              }`}
            >
              ADMIN
            </Button>
          </div>

          <form className="flex flex-col justify-center items-center gap-5">
            <input
              className="w border border-black border-opacity-20 rounded-md px-3 py-2.5 mt-8"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="w border border-black border-opacity-20 rounded-md px-3 py-2.5 mt-4"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <Navigation
              href={`/${value}`}
              icon={<LoginIcon />}
              text="LOGIN"
              urlKeyword={value}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
