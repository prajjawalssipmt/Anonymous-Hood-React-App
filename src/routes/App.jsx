import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreatePost from "../Component/CreatePost";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import PostListProvider from "../Store/post-list-store";
import { useState } from "react";
import PostList from "../Component/PostList";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content">
            <Header></Header>
            {/* {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )} */}
            <Outlet />

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
