import { useQuery } from '@tanstack/react-query';
import { contactService } from '../services/contactsService';
import type { Contact } from '../types';

export const useContacts = () => {
  return useQuery<Contact[], Error>({
    queryKey: ['Contacts'],
    queryFn: contactService.getContacts,
  });
};