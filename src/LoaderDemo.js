import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';

const LoaderDemo = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // some asynchronous data fetching logic

        // setIsLoading(false);
    }, []);

    return (
        <div>
        {isLoading ? (
            <div>
                <Loader />
            </div>
        ) : (
            <div> </div>
        )
        }
        </div>
    );
};

export default LoaderDemo;
