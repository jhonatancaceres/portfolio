
import type { JSX } from "react";
import type React from "react";
import ErrorTestPanel from "../features/lab/ErrorTestPanel";
import { Grid } from "../components/ui/Grid";
import { Card } from "../components/ui/Card";
import { Page } from "../components/ui/Layout";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const LabPage: React.FC = () => {

  const labComponents: JSX.Element[] = [
    <Card key={1} title="Error test panel"><ErrorTestPanel key={1} /></Card>,
    <Card key={2} title="Test 2"></Card>,
    <Card key={3} title="Test 3"></Card>,
    <Card key={4} title="Test 4"></Card>

  ]
    ;
  return <>
    <Page title="Lab" icon={<HiOutlineRocketLaunch size={24} />}>

      <Grid cols={3}>
        {labComponents.map((comp) => comp)}
      </Grid>

    </Page>
  </>
}

export default LabPage;