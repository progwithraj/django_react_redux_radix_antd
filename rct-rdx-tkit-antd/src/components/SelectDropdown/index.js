import React, { useState, useEffect } from 'react'
import './selectDropdown.less'
import { Select, SelectItem } from "@nextui-org/react";
import { getCurrentTheme, setCurrentTheme } from '../../utils/theme';

function SelectDropDown() {
    const [theme, setTheme] = useState(getCurrentTheme());
    const options = [
        {
            key: 'light',
            value: 'light',
            label: 'light',
            name: 'light',
        },
        {
            key: 'dark',
            value: 'dark',
            label: 'dark',
            name: 'dark',
        },
        {
            key: 'netflix',
            value: 'netflix',
            label: 'netflix',
            name: 'netflix',
        },
        {
            key: 'purple',
            value: 'purple',
            label: 'purple',
            name: 'purple',
        }
    ]

    useEffect(() => {
        const themeClassMapping = {
            netflix: "netflix",
            dark: "dark",
            purple: "purple",
            light: 'light'
        };

        document.documentElement.classList.add(themeClassMapping[theme]);
        document.documentElement.classList.remove(...Object.keys(themeClassMapping).filter((key) => key !== theme));
    }, [theme]);

    useEffect(() => {
        if (window.matchMedia(`prefers-color-scheme: ${'dark'}`).matches) {
            setCurrentTheme('dark')
            setTheme('dark')
        } else {
            setCurrentTheme('light')
            setTheme('light')
        }
    }, [])

    const handleThemeChange = (e) => {
        setCurrentTheme(e.target.value)
        setTheme(e.target.value)
    }




    return (
        <div className='ml-4 bg-opacity-40 bg-blur-sm backdrop-blur-lg rounded-md border-gray-300 w-[100px]'>
            <Select
                value={theme}
                color='redGlow'
                onChange={(e) => handleThemeChange(e)}
                clearable={false}
                placeholder='Select one'
                aria-label='Choose'
                className='bg-opacity-70 rounded-xs'
                variant='bordered'
                defaultSelectedKeys={['light']}
            >
                {options.map(item => (
                    <SelectItem key={item.key} value={item.value} aria-label="Choose">{item.label}</SelectItem>
                ))}
            </Select>
        </div>
    )
}

export default SelectDropDown