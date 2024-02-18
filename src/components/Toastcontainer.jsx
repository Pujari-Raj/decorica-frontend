import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";

// functn for different types of toasts
export function handleClick(toastType, toastmessage) {
    switch (toastType) {
        case 'success':
            console.log('success toast called');
            toast.success(`${toastmessage}`);
            break;
        case 'error':
            console.log('errr toast called');
            toast.error(`${toastmessage}`);
            break;
        case 'warning':
            console.log('warning toast called');
            toast.warn(`${toastmessage}`);

            break;
    }
}

export const Toastcontainer = () => {

    return (
        <div>
            <ToastContainer
                    position='bottom-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme='colored'
                />
        </div>
    )
}


