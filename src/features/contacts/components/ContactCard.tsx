import type React from "react";
import type { Contact } from "../types";
import { Card } from "../../../components/ui/Card";

export const ContactCard: React.FC<{ contact: Contact }> = ({ contact }) => {

  return <Card>
    <h3>{contact.id} - {contact.name}</h3>
    <h4>{contact.email}</h4>
  </Card>
}