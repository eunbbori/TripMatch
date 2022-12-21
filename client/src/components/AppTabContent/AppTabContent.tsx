import React, { useState } from "react";
import FreePostList from "../FreePost/FreePostList";
import Paging from "../Pagination/Paging";
import { Tab, Tabs, TabPanel } from "react-tabs";
import { Container, STabList } from "./AppTabContentStyle";
import "react-tabs/style/react-tabs.css";

interface TabProps {
  tabs: string[];
}

const AppTabContent: React.FC<TabProps> = ({ tabs }) => {
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
          <FreePostList />
          <Paging />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default AppTabContent;
