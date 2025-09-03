
import type React from "react";
import { Page } from "../components/ui/Layout";
import { HiOutlineInformationCircle } from "react-icons/hi2";

const AboutPage: React.FC = () => {

  return <Page title="About" icon={<HiOutlineInformationCircle size={24} />}>

    <p>About page</p>

  </Page>
}

export default AboutPage;