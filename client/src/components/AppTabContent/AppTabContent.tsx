import React, { useState } from "react";
import { TabContentType } from "../../type/tab";
import { Tab, Tabs, TabPanel } from "react-tabs";
import { Container, STabList } from "./AppTabContentStyle";
import "react-tabs/style/react-tabs.css";

interface TabProps {
  tabContents: TabContentType[];
}

const AppTabContent: React.FC<TabProps> = ({ tabContents }) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Container>
      <Tabs defaultIndex={tabIndex}>
        <STabList>
          {tabContents.map((t, i) => {
            return <Tab key={i}>{t.tab}</Tab>;
          })}
        </STabList>
        {tabContents.map((t, i) => {
          return <TabPanel key={i}>{t.content}</TabPanel>;
        })}
      </Tabs>
    </Container>
  );
};

export default AppTabContent;
