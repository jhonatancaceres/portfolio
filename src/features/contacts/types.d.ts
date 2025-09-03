export interface PhoneEntry {
  phone_type: string;
  number: string;
}

export interface Contact {
  id: string;
  name: string;
  workgroup_id: string;
  realm_code: string;
  emails: string[];
  phone_list: PhoneEntry[];
  most_recent_change_date: string;
  most_recent_change_description: string | null;
  assets_under_management: number;
  gdc: number;
  view_count: number;
  last_viewed_at: string;
  messaging_enabled: boolean;
}

export interface SimpleContact {
  id: number;
  classic_urn: string;
  first_name: string;
  last_name: string;
  middle_initial: string;
}