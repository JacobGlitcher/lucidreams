import React from 'react'
import { PlusSquareOutlined } from '@ant-design/icons'
import { Flex } from 'antd'

import formulaStore from '../store'
import CollapseBody from "./CollapseBody.tsx";

const CollapseHeader: React.FC = () => {
    const { items, addFormula } = formulaStore();

    const handleAddFormula = (): void => {
        addFormula({
            key: items.length.toString(),
            label: `New Formula`,
            children: <CollapseBody/>,
        })
    }

    return (
        <Flex justify={'space-between'}>
            <h1>Formulas({})</h1>
            <PlusSquareOutlined style={{ fontSize: '26px' }} onClick={handleAddFormula}/>
        </Flex>
    )
}

export default CollapseHeader
