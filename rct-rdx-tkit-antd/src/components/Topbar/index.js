import React, { useEffect, useState } from 'react'
import { createRandomUser } from '../../utils/fakeData';
import './topbar.less'
import { AvatarWithMenuAndHoverCard } from '../Avatar/index'
import { Divider, Switch } from "@nextui-org/react";
import { getCurrentTheme, setCurrentTheme } from '../../utils/theme'
import SelectDropDown from '../SelectDropdown';

function TopBar() {
    //usestates
    const [user, setUser] = useState({});

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

        <div>
            <div className='flex justify-between w-screen h-[65px] p-[18px]'>
                <div className="justify-start align-middle items-center">
                    <h2 h2 className={'text-2xl typography-logo-title'}>Radix Ui</h2>
                </div>
                <div className="topbar-left-container">
                    {/* topbar left options/routes */}
                    {
                        topbarLeftMenuOptions.map(item => (
                            <h2 className={`text-primary topbar-left-container-typography`} key={item} > {item}</h2>
                        ))
                    }
                    <div className="avatar-div-container justify-end ml-4">
                        <AvatarWithMenuAndHoverCard user={user} />
                    </div>
                    <div className=" flex items-center justify-center ">
                        {/* dropdown for theme selection */}
                        <SelectDropDown />
                    </div>
                </div>
            </div >
            <div className="flex h-5 items-center space-x-4 text-small">
                <Divider className='border-amber-900' color='primary' />
            </div>
        </div>
    )
}

export default TopBar