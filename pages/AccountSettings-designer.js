import React, { useState } from "react";
import GeneralSettings from "@/components/GeneralSettings";
import IDVerificationSettings2 from "@/components/IDVerificationSettings2";
import NotificationsSettings from "@/components/NotificationsSettings-Designer";
import ProfileSettings from "@/components/ProfileSettings";
import MembershipSettings from "@/components/MembershipSettings";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GeneralSettings2 from "@/components/GeneralSettings2";
import ExperSettings from "@/components/exp-settings";
const AccountSettings = () => {
  const [activeComponent, setActiveComponent] = useState("General");
  


  return (
    <div className="settings-container ">
        

        <div className="home_section mainscr">
        <Navbar/>
        <div className="max mt-125 mb-28">
        <h3 id="title">Account Settings</h3>
        </div>
      <div className="settings-nav">
        <button
          className={` ${activeComponent === "General" ? "active nav-btn" : "nav-btn"}`}
          onClick={() => setActiveComponent("General")}
        >
          General
        </button>
        <button
          className={`nav-btn ${activeComponent === "Profile" ? "active" : ""}`}
          onClick={() => {
            setActiveComponent("Profile");
            console.log(activeComponent)
                
        
        }}
        >
          Profile
        </button>
        <button
          className={`nav-btn ${activeComponent === "Experience" ? "active" : ""}`}
          onClick={() => {
            setActiveComponent("Experience");
            console.log(activeComponent)
                
        
        }}
        >
          Experience
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "Notifications" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("Notifications")}
        >
          Notifications
        </button>
        <button
          className={`nav-btn ${
            activeComponent === "ID Verification" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("ID Verification")}
        >
          ID Verification
        </button>

      </div>
      </div>    

      <div className=" mainscr h-60v ">
      <div className="max">
        {activeComponent === "General" && <GeneralSettings2 />}
        {activeComponent === "Profile" && <ProfileSettings />}
        {activeComponent === "Experience" && <ExperSettings />}
        {activeComponent === "Notifications" && <NotificationsSettings />}
        {activeComponent === "ID Verification" && <IDVerificationSettings2 />}
      </div>
      </div>
      <Footer/>
    </div>
  );
};



export default AccountSettings;
