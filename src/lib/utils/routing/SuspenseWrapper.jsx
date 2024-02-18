import { Suspense } from "react";


// eslint-disable-next-line react/prop-types
export default function SuspenseWrapper({children}){
    return <Suspense fallback="Loading...">{children}</Suspense>
}