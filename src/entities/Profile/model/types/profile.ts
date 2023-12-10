import { Currency } from 'entities/Currency';
import { Country } from 'shared/const/common';

export interface Profile {
  first?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: string;
  // city?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
