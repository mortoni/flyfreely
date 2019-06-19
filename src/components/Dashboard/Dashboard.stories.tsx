import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import Dashboard from "./Dashboard";

const stories = storiesOf("Components/Dashboard", module);
stories.addDecorator(withKnobs);

stories.add(
    "Dashboard",
    () => (
        <Dashboard />
    ),
);
