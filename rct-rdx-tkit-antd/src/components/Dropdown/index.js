import React, { useState } from 'react'
import { Dropdown, Menu, Avatar, Popover } from 'antd'

function DropdownMenu({ items = null, components = null, isOpen, avatarSource }) {
    const [menuVisible, setMenuVisible] = useState(false);

    // Function to handle Avatar click and toggle the menu visibility
    const handleAvatarClick = () => {
        setMenuVisible(!menuVisible);
    };

    // Function to handle menu item click
    const handleMenuItemClick = (e) => {
        // Add your logic for handling menu item clicks here
        console.log(`Clicked on menu item: ${e.key}`);
        setMenuVisible(false); // Close the menu after clicking an item (optional)
    };
    const menuItems = items || [
        {
            name: 'Profile',
            key: 1,
        },
        {
            name: 'Settings',
            key: 2,
        }
    ]
    const menu = (
        <Menu onClick={handleMenuItemClick}>
            {menuItems.map((item) => (
                <Menu.Item key={item.key}>{item.name}</Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className="">
            <Popover trigger="hover" content={<div>This is a Shadcn UI hovercard-like component.</div>}>

                <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    visible={menuVisible}
                    onVisibleChange={(visible) => setMenuVisible(visible)}
                >
                    <Avatar
                        src={avatarSource}
                        size={40}
                        onClick={handleAvatarClick}
                    />
                </Dropdown>
            </Popover>
        </div>
    )
}

export default DropdownMenu