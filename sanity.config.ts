import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";

import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: "/studio",
    title: "Money Blog",

    projectId,
    dataset,

    plugins: [deskTool(), codeInput()],

    schema: {
        types: schemaTypes,
    },
});
