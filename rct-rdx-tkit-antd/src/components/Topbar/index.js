import React, { useEffect, useState } from 'react'
import { createRandomUser } from '../../utils/fakeData';
import { Spin, Typography, Dropdown } from 'antd'
import './topbar.less'
import { AvatarWithMenuAndHoverCard } from '../Avatar/index'
import { Switch } from "@nextui-org/react";
import { getCurrentTheme, setCurrentTheme } from '../../utils/theme'
import { classNames } from '@emotion/react/jsx-runtime';

function TopBar() {
    const { Title } = Typography;
    //usestates
    const [user, setUser] = useState({});
    const [theme, setTheme] = useState(getCurrentTheme());

    useEffect(() => {
        const random_user = createRandomUser();
        setUser(random_user)
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    useEffect(() => {
        if (window.matchMedia('prefers-color-scheme: dark').matches) {
            setCurrentTheme('dark')
        } else {
            setCurrentTheme('light')
        }
    }, [])

    const topbarLeftMenuOptions = [
        'Explore',
        'Search',
        'Hotels',
        'Offers'
    ]

    const handleThemeChange = () => {
        setTheme(getCurrentTheme() === 'light' ? 'dark' : 'light')
        setCurrentTheme(getCurrentTheme() === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='flex justify-between w-screen h-[65px] p-[18px]'>
            <div className="justify-start align-middle items-center">
                <Title about='website name' className={'text-2xl typography-logo-title'}>Radix Ui</Title>
            </div>

            <div className="topbar-left-container">
                {/* topbar left options/routes */}
                {
                    topbarLeftMenuOptions.map(item => (
                        <Typography.Text className={`${theme} text-blue-700 topbar-left-container-typography`} key={item} > {item}</Typography.Text>
                    ))
                }
                <div className="avatar-div-container justify-end ml-4">
                    <AvatarWithMenuAndHoverCard avatarSource={user.avatar} />
                </div>
                <div className="flex justify-end ml-6 bg-transparent">
                    {/* <main 
                    className={`${theme}  text-foreground bg-background`}
                    > */}
                    <Switch variant="solid" radius="sm" color='primary' onClick={handleThemeChange} defaultChecked={theme === 'dark'} defaultValue={theme}>{theme}</Switch>
                    {/* </main> */}
                </div>
            </div>
        </div >
    )
}

export default TopBar