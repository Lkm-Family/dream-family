import { Component } from "react";
import PageFilter from "../component/page-filter";
import PageIndex from "../component/page-index";

export const duyiRoutes = [
    {
        key: 'page-index',
        label: '序言',
        component:<PageIndex />
    },
    {
        key: 'page-filter',
        label: '网页过滤',
        component:<PageFilter />
    }
]