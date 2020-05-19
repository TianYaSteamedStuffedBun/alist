import { Consumer } from '@alist/react'
import SchemaList from './components/SchemaList'
import { registerListComponent } from '@alist/react-schema-renderer'
import List from './components/List'
import Filter from './components/Filter'
import Table from './components/Table'
import Pagination from './components/Pagination'
import Layout from './components/Layout'
import Selection from './components/Selection'
import Clear from './components/Clear'
import Search from './components/Search'
import Reset from './components/Reset'
import Sorter from './components/Sorter'
import ExpandContainer from './components/ExpandContainer'
import ExpandTrigger from './components/ExpandTrigger'
import ToggleTrigger from './components/ToggleTrigger'
import { createNextListActions, createNextAsyncListActions } from './shared'
import './fields'

export * from '@alist/react-schema-renderer'
export * from '@formily/next-components'
export * from '@formily/next'
export * from '@alist/react'
export * from './hooks'

// 传入默认组件
registerListComponent({
  List,
  Table,
  Filter,
  Clear,
  Reset,
  Search,
  Layout,
  Pagination,
  ToggleTrigger,
  ExpandTrigger,
  ExpandContainer,
  Selection,
  Consumer
})

export {
  List,
  Selection,
  Sorter,
  Layout,
  ExpandContainer,
  ExpandTrigger,
  SchemaList,
  ToggleTrigger,
  Filter,
  Table,
  Pagination,
  Clear,
  createNextListActions as createListActions,
  createNextAsyncListActions as createAsyncListActions,
  Consumer,
  Search,
  Reset
}
