import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import imgs from "./assets/my-img.png";
import { TabsSwitches } from "./data";
import { useState } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Theme from "./components/theme/Theme";
import { motion } from "framer-motion";

const App = () => {
  const [expandNav, setExpandNav] = useState();
  return (
    <div>
      <Tabs disableUpDownKeys={true} onSelect={() => setExpandNav(false)}>
        <motion.div
          className="nav-list position-fixed top-0 d-flex align-items-start justify-content-start"
          initial={{ x: ["-100%"] }}
          animate={{ x: 0 }}
          transition={{
            type: "twem",
            duration: 1,
          }}
        >
          <div
            className={
              expandNav
                ? "nav-list-container d-block"
                : "nav-list-container d-none d-lg-block"
            }
          >
            <div className="nav-list-container d-flex flex-column justify-content-between align-items-center p-3">
              <div>
                <div className="nav-img overflow-hidden mb-2">
                  <img
                    src={imgs}
                    className="img-fluid w-100 d-block"
                    alt="nav img"
                  />
                </div>
                <p className="nav-name">A.ELbahy</p>
              </div>
              <TabList>
                {TabsSwitches.map((tabItem) => {
                  return (
                    <Tab key={tabItem.id}>
                      <p className="m-0">{tabItem.icon}</p>
                      <small>{tabItem.name}</small>
                    </Tab>
                  );
                })}
              </TabList>
            </div>
          </div>
          <button
            className="d-block fs-5 fw-bold d-lg-none expand-nav-btn rounded-3 px-2 mt-2 ms-2"
            onClick={() => setExpandNav((prev) => !prev)}
          >
            {expandNav ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </motion.div>

        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Resume />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
        <TabPanel>
          <Services />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
      <Theme />
    </div>
  );
};

export default App;
