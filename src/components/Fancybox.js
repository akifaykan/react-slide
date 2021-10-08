import React, { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox.css';

const Fancybox = (props) => {
    useEffect(() => {
        const options = props.options || {};
        NativeFancybox.bind(options);
        return () => {
            NativeFancybox.destroy();
        };
    }, []);
    return <>{props.children}</>;
};

export default Fancybox;
