import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { selectProfileForm } from '../../selectors/selectProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const formData = selectProfileForm(getState());

    const errors = validateProfileData(formData!);
    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const userId = formData?.id;
      const { data } = await extra.api.put<Profile>(`/profile/${userId}`, formData);
      return data;
    } catch (err) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
