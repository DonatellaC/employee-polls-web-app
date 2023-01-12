import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Dashboard = () => {
  const [key, setKey] = useState("unanswered");
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="unanswered" title="Unanswered polls"></Tab>
        <Tab eventKey="answered" title="Answered polls"></Tab>
      </Tabs>
    </>
  );
};

export default Dashboard;
