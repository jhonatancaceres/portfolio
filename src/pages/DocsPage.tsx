
import type React from "react";
import { Page } from "../components/ui/Layout";
import { HiOutlineDocumentText } from "react-icons/hi2";
import MarkdownReader from "../components/MarkdownReader";
import { Card } from "../components/ui/Card";

const DocsPage: React.FC = () => {

  return <>
    <Page title="Documents" icon={<HiOutlineDocumentText size={24} />}>

      <Card title="Frontend Building Blocks">
        <MarkdownReader filePath="src/docs/frontend-building-blocks.md" />
      </Card>

    </Page>
  </>
}

export default DocsPage;