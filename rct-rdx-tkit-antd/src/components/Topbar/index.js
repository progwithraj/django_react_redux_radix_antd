import React, { useEffect, useState } from 'react'
import { createRandomUser } from '../../utils/fakeData';
function TopBar() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const random_user = createRandomUser();
        setUser(random_user)
    }, [])

    return (
        <div>{JSON.stringify(user)}</div>
    )
}

export default TopBar