
import type React from "react";
import MarkdownReader from "../components/MarkdownReader";
import { Page } from "../components/ui/Layout";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { Card } from "../components/ui/Card";

const HomePage: React.FC = () => {

  return <>
    <Page title="Home Page" icon={<HiOutlineHomeModern size={24} />}>
      <Card title="TODO">
        <MarkdownReader filePath="TODO.md" />
      </Card>
    </Page>
  </>
}

export default HomePage;