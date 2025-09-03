import { apiClient } from "../../../lib/apiClient";
import type { PageResponse, PaginationParams } from "../../../types/api";
import type { Contact } from "../types";

export const contactService = {
  getContactsPaginated: (params: PaginationParams): Promise<PageResponse<Contact>> => apiClient.get<PageResponse<Contact>>('/contacts', { params }),
  getContacts: (): Promise<Contact[]> => apiClient.get(`/contacts`),
  getContact: (id: number): Promise<Contact> => apiClient.get(`/contacts/${id}`),
  createContact: (ContactData: Partial<Contact>): Promise<Contact> =>
    apiClient.post('/contacts', ContactData),
  updateContact: (id: number, ContactData: Partial<Contact>): Promise<Contact> =>
    apiClient.put(`/contacts/${id}`, ContactData),
  deleteContact: (id: number): Promise<void> =>
    apiClient.delete(`/contacts/${id}`),
};