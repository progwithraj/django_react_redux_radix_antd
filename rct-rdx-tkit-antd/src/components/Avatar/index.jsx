import React, { useState } from 'react'
import './avatar.less'
import { Avatar, Popover, Dropdown, Menu } from 'antd';
import { Spin } from 'antd';
import DropdownMenu from '../Dropdown';

export const AvatarWithMenuAndHoverCard = ({ avatarSource }) => {
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');


    return (
        <div>
            <Popover trigger="hover" content={<div>This is a Shadcn UI hovercard-like component.</div>}>
                <DropdownMenu avatarSource={avatarSource} />
            </Popover>
        </div>
    )
};
