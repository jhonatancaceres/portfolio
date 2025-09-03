
import { useFetchPagination } from '../../../hooks/useFetchPagination';
import { contactService } from '../services/contactsService';
import type { Contact } from '../types';

export const useContactsPagination = (
  status = 'active'
) => {
  return useFetchPagination<Contact>({
    queryKey: ['contacts', status],
    fetcher: (params) => contactService.getContactsPaginated({ ...params, status }),
    pageSize: 15
  });
};

