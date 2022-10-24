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
import React from "react";
import { C3Navigation } from "./c3-navigation";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "UIShell/C3Navigation",
    component: C3Navigation,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        defaultValue: "Hello World",
        title: { control: { type: "text" } },
    },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return (React.createElement(C3Navigation, __assign({}, args))); };
export var HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = { title: "Hello World" };
