import React from 'react';

import Child from './Child';

const Parent = (props) => {
    return (
        <div>
            {/* <Child { ...props } description="description"/> */}
            <Child doWhatever={ props.changeTheWorldEvent } title={ props.title } />
            <Child doWhatever={ props.keepTheWorldSameEvent } title={ props.title } />
        </div>
    );
}

export default Parent;