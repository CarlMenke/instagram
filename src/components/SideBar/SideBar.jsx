import React from 'react';
import { LinkButton } from './LinkButton';
import {
  Home,
  Search,
  Compass,
  Film,
  MessageCircle,
  Heart,
  PlusSquare,
  User,
} from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile'
const navItemsArray = [
  { icon: Home, text: 'Home' },
  { icon: Search, text: 'Search' },
  { icon: Compass, text: 'Explore' },
  { icon: Film, text: 'Reels' },
  { icon: MessageCircle, text: 'Messages' },
  { icon: Heart, text: 'Notifications' },
  { icon: PlusSquare, text: 'Create' },
  { icon: User, text: 'Profile' },
];

export const SideBar = (props) => {

  const isMobile = useIsMobile()

  if (isMobile) {
    return <></>
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebarLogo">{props.logotext}</div>
      {navItemsArray.map((item) => {
        const Icon = item.icon;
        return <LinkButton icon={<Icon />} text={item.text} />;
      })}
    </div>
  );
};
