import React, { useEffect, useState } from 'react'
import { createRandomUser } from '../../utils/fakeData';
import { Spin, Typography, Dropdown } from 'antd'
import './topbar.less'
import { AvatarWithMenuAndHoverCard } from '../Avatar/index'

function TopBar() {
    const [user, setUser] = useState({});
    const { Title } = Typography;

    useEffect(() => {
        const random_user = createRandomUser();
        setUser(random_user)
    }, [])

    const topbarLeftMenuOptions = [
        'Explore',
        'Search',
        'Hotels',
        'Offers'
    ]

    return (
        <div className='flex justify-between w-screen h-[65px] p-[18px] bg-slate-100'>
            <div className="justify-start align-middle items-center">
                <Title about='website name' className='typography-logo-title'>Radix Ui</Title>
            </div>

            <div className="topbar-left-container">
                {/* topbar left options/routes */}
                {
                    topbarLeftMenuOptions.map(item => (
                        <Typography.Text className="topbar-left-container-typography" key={item}>{item}</Typography.Text>
                    ))
                }
                <div className="avatar-div-container justify-end ml-4">
                    <AvatarWithMenuAndHoverCard avatarSource={user.avatar} />
                </div>
            </div>
        </div>
    )
}

export default TopBar