import "server-only";

const { Client } = require('@notionhq/client');// Initialize the client with your Notion token
import React from "react";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(() => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "Published",
            checkbox: {
                equals: true,
            },
        },
    });
});

export const fetchPageBySlug = React.cache((slug) => {
    return notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0]);
});

export const fetchPageBlocks = React.cache((pageId) => {
    return notion.blocks.children
        .list({ block_id: pageId })
        .then((res) => res.results);
});