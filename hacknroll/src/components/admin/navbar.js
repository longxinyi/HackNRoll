import React from "react";
import Navigation from "../common/navigation";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";

/**
 * @description Navigation bar for admin pages
 */
const AdminNavBar = () => {
  return (
    <div className="fixed z-50 w-56 bg-white flex flex-col h-screen justify-start py-6 border border-border-primary overflow-auto">
      <div className="flex flex-col p-2.5 top-0">
        <div className="flex flex-row gap-4 mb-4">
          <AccountCircleIcon className="w-12 h-12 ml-2 fill-teal-500" />
          <div className="flex flex-col">
            <b className="text-black">John Doe</b>
            <p className="text-black">Staff</p>
          </div>
        </div>
        <div className="p-2">
          <Navigation
            href="/admin/profile"
            text="Edit profile"
            urlKeyword="profile"
          />
        </div>
      </div>
      <hr className="border-border-primary w-full p-2"></hr>
      <div className="flex flex-col justify-start p-2">
        <div className="p-2">
          <Navigation
            href=""
            icon={<HomeOutlinedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
        <div className="p-2">
          <Navigation
            href=""
            icon={<CalendarTodayOutlinedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
        <div className="p-2">
          <Navigation
            href=""
            icon={<SentimentSatisfiedRoundedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
        <div className="p-2">
          <Navigation
            href=""
            icon={<PeopleOutlineOutlinedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
        <div className="p-2">
          <Navigation
            href=""
            icon={<FolderOutlinedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
        <div className="p-2">
          <Navigation
            href=""
            icon={<ViewInArOutlinedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
      </div>
      <hr className="border-border-primary w-full p-2"></hr>
      <div className="p-2.5">
        <div className="p-2">
          <Navigation
            href=""
            icon={<SettingsOutlinedIcon />}
            text="text"
            urlKeyword="text"
          />
        </div>
        <div className="p-2">
          <Navigation
            href="/"
            icon={<LoginOutlinedIcon />}
            text="Log out"
            urlKeyword="admin/login"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
