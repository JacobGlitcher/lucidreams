import React from 'react'

import CollapseAmount from './CollapseAmount'
import CollapseTiming from './CollapseTiming'
import CollapseTags from './CollapseTags'

const CollapseBody: React.FC = () => {
    return (
        <>
            <CollapseAmount/>
            <CollapseTiming/>
            <CollapseTags/>
        </>
    )
}

export default CollapseBody
