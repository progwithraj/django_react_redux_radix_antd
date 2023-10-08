import React, { useState } from 'react'
import './avatar.less'
import PopOver from '../Popover';
import { User } from '@nextui-org/react';
import { UserTwitterCard } from '../TwitterCard'

export function AvatarWithMenuAndHoverCard({ user }) {

    return (
        <div>
            <PopOver
                content={<UserTwitterCard user={user} />}
                trigger={
                    < User
                        as="button"
                        name={user.username}
                        description="Product Designer"
                        className="transition-transform"
                        avatarProps={{
                            src: user.avatar
                        }
                        }
                        classNames={'light:text-white text-redGlow'}
                    />
                }
            />
        </div >
    )
};
