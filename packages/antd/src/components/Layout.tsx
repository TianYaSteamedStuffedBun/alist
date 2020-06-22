import React from 'react'
import {
    FormButtonGroup,
    createVirtualBox,
} from '@formily/antd'
import { FormItemGrid, MegaLayout } from '@formily/antd-components'
import { compatLayoutProps } from '@alist/react'

let Layout: React.FC & {
    (): any;
    ButtonGroup: any;
    Grid: any;
    Flex: any;
}

const CompatMegaLayout = (props) => {
    const compatProps = compatLayoutProps(props)
    return <MegaLayout {...compatProps} />
}

Layout = (() => {
    const LayoutExport: any = createVirtualBox('filter-flex-layout', CompatMegaLayout)
    LayoutExport.ButtonGroup = FormButtonGroup    
    LayoutExport.Grid = FormItemGrid

    return LayoutExport
})() 


export default Layout


