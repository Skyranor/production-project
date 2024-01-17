import { createSelector } from '@reduxjs/toolkit';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons//article-20-20.svg';
import { selectUser } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';

export const selectSidebarItems = createSelector(selectUser, (user) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Main',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'About',
    },
  ];

  if (user) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}/${user.id}`,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'Articles',
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
