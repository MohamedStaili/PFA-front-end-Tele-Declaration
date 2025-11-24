import { Suspense } from "react";

export default function LazyLoad(Component) {
    return function Wrapped(props) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </Suspense>
        );
    }
}
