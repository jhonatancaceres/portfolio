import { useQuery } from '@tanstack/react-query';
import type { ApiResponse, Contact } from '../types';
import { contactService } from '../services/contactsService';

export const useContacts = () => {
  return useQuery<Contact[], Error>({
    queryKey: ['Contacts'],
    queryFn: contactService.getContacts,
  });
};