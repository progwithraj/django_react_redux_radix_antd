import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";


function PopOver({ content, trigger, setOpen, setClose, _isOpen }) {
    const [isOpen, setisOpen] = useState(false);
    console.log('====================================');
    console.log(isOpen);
    console.log('====================================');
    //Functions to handle move hover
    const handleOpenPopover = () => {
        console.log('opened 2');
        setisOpen(true);
        // setOpen();
        // setOpen(true);
    };

    const handleClosePopover = () => {
        console.log('closed 2');
        setisOpen(false);
        // setClose()
        // setOpen(false)
    };
    //Popover content
    const popOverContent = (
        <PopoverContent onMouseEnter={handleOpenPopover} onMouseLeave={handleClosePopover}>
            {content}
        </PopoverContent>
    )

    return (
        <div>
            <Popover key={'1'} color={'primary'} placement="bottom" isOpen={isOpen}>
                <PopoverTrigger onMouseEnter={handleOpenPopover} onMouseLeave={handleClosePopover}>
                    {trigger}
                    {/* <button>press/hover</button> */}
                </PopoverTrigger>
                {popOverContent}
            </Popover>
        </div>
    )
}

export default PopOver