import React from 'react'
import { Collapse } from 'antd'

import formulaStore from "../store";

const CollapseMain: React.FC = () => {
    const { items } = formulaStore();

    const onChange = () => {
    };

    return <Collapse items={items} onChange={onChange} />
}

export default CollapseMain
