import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/56815938_2340408666017197_4069661145672187904_o.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFK9LHdtK0ahM7lrLiwwnRwSCmJF0HRWiNIKYkXQdFaI1Zu6soo6CBE0itdQlqaxsMmRKd0aK_jTNa-ZhNnKZuX&_nc_ohc=sHx2xbgstvUAX-mPo9U&_nc_ht=scontent.fcrk1-2.fna&tp=27&oh=680450868eda805b67f306a34d6de335&oe=6007642F" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
