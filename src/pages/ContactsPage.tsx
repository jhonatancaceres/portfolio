
import type React from "react";
import { Page } from "../components/ui/Layout";
import { HiOutlineUsers } from "react-icons/hi2";
import ContactsContainer from "../features/contacts/components/ContactsContainer";

const ContactsPage: React.FC = () => {

  return <Page title="Contacts" icon={<HiOutlineUsers size={24} />}>

    <ContactsContainer />

  </Page>
};

export default ContactsPage;