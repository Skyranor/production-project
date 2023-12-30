import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons//article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Main',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    authOnly: true,
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'About',
  },
  {
    path: RoutePath.articles,
    Icon: ArticlesIcon,
    text: 'Articles',
    authOnly: true,
  },
];
