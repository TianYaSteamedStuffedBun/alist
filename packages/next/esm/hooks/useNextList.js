var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useList, ListLifeCycleTypes, useEva } from '@alist/react';
import { useRef } from 'react';
import { createNextListActions, setSelectionsByInstance } from '../shared';
var useNextList = function (props) {
    if (props === void 0) { props = {}; }
    var actionsRef = useRef(null);
    actionsRef.current = actionsRef.current || props.actions || createNextListActions();
    var implementActions = useEva({
        actions: actionsRef.current
    }).implementActions;
    var hasRowSelectionCls = 'has-row-selection';
    implementActions({
        setSelections: function (ids, records) {
            setSelectionsByInstance(actionsRef.current, ids, records);
        },
        disableRowSelection: function () {
            var _a = actionsRef.current.getTableProps().className, className = _a === void 0 ? '' : _a;
            actionsRef.current.setSelectionConfig(null);
            actionsRef.current.setTableProps({
                className: className.replace(" " + hasRowSelectionCls, ''),
                rowSelection: undefined
            });
        },
        setRowSelection: function (selectionConfig) {
            actionsRef.current.setSelectionConfig(selectionConfig);
            var config = actionsRef.current.getSelectionConfig();
            var _a = actionsRef.current.getTableProps().className, className = _a === void 0 ? '' : _a;
            if (config) {
                var mode = config.mode, ids = config.ids, primaryKey = config.primaryKey, getProps = config.getProps, others = __rest(config, ["mode", "ids", "primaryKey", "getProps"]);
                actionsRef.current.setTableProps({
                    className: className.indexOf(hasRowSelectionCls) !== -1 ? className : className + " " + hasRowSelectionCls,
                    rowSelection: __assign(__assign({}, others), { mode: mode, selectedRowKeys: ids, primaryKey: primaryKey, onSelect: function (selected, record, records) {
                            actionsRef.current.notify(ListLifeCycleTypes.ON_LIST_SELECT, {
                                selected: selected, record: record, records: records
                            });
                        }, onSelectAll: function (selected, records) {
                            actionsRef.current.notify(ListLifeCycleTypes.ON_LIST_SELECT_ALL, {
                                selected: selected, records: records
                            });
                        }, onChange: function (changeIds, records) {
                            actionsRef.current.setSelectionConfig({
                                ids: changeIds,
                                records: records,
                            });
                            actionsRef.current.notify(ListLifeCycleTypes.ON_LIST_SELECT_CHANGE, {
                                ids: changeIds,
                                records: records
                            });
                            var rowSelection = actionsRef.current.getTableProps().rowSelection;
                            actionsRef.current.setTableProps({
                                rowSelection: __assign(__assign({}, rowSelection), { selectedRowKeys: changeIds })
                            });
                        }, getProps: getProps })
                });
            }
            else {
                actionsRef.current.setTableProps({
                    className: className.replace(" " + hasRowSelectionCls, ''),
                    rowSelection: undefined
                });
            }
        }
    });
    var effects = props.effects;
    return {
        actions: actionsRef.current,
        list: useList(__assign(__assign({}, props), { effects: function ($, actions) {
                if (typeof effects === 'function') {
                    effects($, actions);
                }
            } }))
    };
};
export default useNextList;
