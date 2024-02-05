import React from "react";
import Navigation from "../common/navigation";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const VolunteerNavBar = () => {
  return (
    <div className="fixed z-50 w-56 bg-white flex flex-col h-screen justify-start py-6 border border-border-primary overflow-auto">
      <div className="flex flex-col p-2.5 top-0">
        <div className="flex flex-row gap-4 mb-4">
          <AccountCircleIcon className="w-12 h-12 ml-2 fill-red-600" />
          <div className="flex flex-col">
            <b className="text-black">John Doe</b>
            <p className="text-black">Member</p>
          </div>
        </div>
        <div className="p-2">
          <Navigation href="/" text="Edit Profile" urlKeyword="profile" />
        </div>
        <div className="p-2">
          <Navigation href="/viewAllCertificates" text="View Certificates" urlKeyword="certificates" />
        </div>
      </div>
      <hr className="border-border-primary w-full p-2"></hr>
      <div className="p-2.5">
        <div className="p-2">
          <Navigation href="" text="text" urlKeyword="text" />
        </div>
        <div className="p-2">
          <Navigation
            href="/community/eventsWorkshops"
            text="Events & Workshops"
            urlKeyword="eventsWorkshops"
          />
        </div>
        <div className="p-2">
          <Navigation href="" text="text" urlKeyword="text" />
        </div>
        <div className="p-2">
          <Navigation href="" text="text" urlKeyword="text" />
        </div>
        <div className="p-2">
          <Navigation href="" text="text" urlKeyword="text" />
        </div>
      </div>
      <hr className="border-border-primary w-full p-2"></hr>
      <div className="p-2.5">
        <div className="p-2">
          <Navigation href="" text="text" urlKeyword="text" />
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

export default VolunteerNavBar;
