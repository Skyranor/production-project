import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';
import { selectProfileForm } from '../../selectors/selectProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const formData = selectProfileForm(getState());

    try {
      const { data } = await extra.api.put<Profile>('/profile', formData);
      return data;
    } catch (err) {
      return rejectWithValue('error');
    }
  }
);
