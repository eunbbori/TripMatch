import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FreePostRow from "../FreePostRow/FreePostRow";
// import DataTable from "../Table/Table";
import { Container, STabList } from "./AppTabsStyle";

interface TabProps {
  tabs: string[];
}

// const AppTabs: React.FC<TabProps> = ({ tabs }) => {
//   return (
//     <Container>
//       <Ul>
//         {tabs.map((tab) => {
//           return <li key={tab}>{tab}</li>;
//         })}
//       </Ul>
//     </Container>
//   );
// };
const AppTabs: React.FC<TabProps> = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Container>
      <Tabs defaultIndex={tabIndex}>
        <STabList>
          {tabs.map((tab) => {
            return <Tab key={tabIndex}>{tab}</Tab>;
          })}
        </STabList>

        <TabPanel>
          <FreePostRow />
          <FreePostRow />
          <FreePostRow />
          <FreePostRow />
          <FreePostRow />
          <FreePostRow />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default AppTabs;
