import React, { useState } from 'react'
import './avatar.less'
// import * as Hover from '@radix-ui/react-hover-card';
// import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { Avatar, Popover, Dropdown, Menu } from 'antd';
import { HoverCard } from '@radix-ui/react-hover-card';
import { Spin } from 'antd';
import * as RadixAvatar from '@radix-ui/react-avatar';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import DropdownMenu from '../Dropdown';

export const AvatarWithMenuAndHoverCard = ({ avatarSource }) => {
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');


    return (
        <div>
            <Popover trigger="hover" content={<div>This is a Shadcn UI hovercard-like component.</div>}>
                {/* <Avatar onClick={handleClick} className='flex align-baseline mt-200 bg-red-400' src={avatarSource} /> */}
                <DropdownMenu avatarSource={avatarSource} />
            </Popover>
        </div>
    )
};
