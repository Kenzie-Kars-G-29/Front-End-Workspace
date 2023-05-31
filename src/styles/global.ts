import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    /* Brand */
    --color-brand1:#4529E6;
    --color-brand2:#5126EA;
    --color-brand3:#B0A6F0;
    --color-brand4:#EDEAFD;

    /* Grey Scale */
    --color-grey0:#0B0D0D;
    --color-grey1:#212529;
    --color-grey2:#495057;
    --color-grey3:#868E96;
    --color-grey4:#ADB5BD;
    --color-grey5:#CED4DA;
    --color-grey6:#DEE2E6
    --color-grey7:#E9ECEF
    --color-grey8:#F1F3F5
    --color-grey9:#F8F9FA
    --color-grey10:#FDFDFD
    --color-whiteFixed:#FFFFFF

    /* Feedback */
    --color-alert1:#CD2B31
    --color-alert2:#FDD8D8
    --color-alert3:#FFE5E5
    --color-sucess1:#18794E
    --color-sucess2:#CCEBD7
    --color-sucess3:#DDF3E4

    /* Colors Random Profile */
    --color-random1:#E34D8C;
    --color-random2:#C04277;
    --color-random3:#7D2A4D;
    --color-random4:#7000FF;
    --color-random5:#6200E3;
    --color-random6:#36007D;
    --color-random7:#349974;
    --color-random8:#2A7D5F;
    --color-random9:#153D2E;
    --color-random10:#6100FF;
    --color-random11:#5700E3;
    --color-random12:#30007D;

    /* Typography */
    --font-heading-1:2.75rem;
    --font-heading-2:2.25rem;
    --font-heading-3:2rem;
    --font-heading-4:1.75rem;
    --font-heading-5:1.5rem;
    --font-heading-6:1.25rem;
    --font-heading-7:1rem;
    --font-body-1:1rem;
    --font-body-2:.875rem;
    /* --font-button-big-text:0rem;
    --font-button-medium-text:0rem;
    --font-input-placeholder:0rem;
    --font-input-label:0rem; */
    --font-weight:700;
    --font-weight:600;
    --font-weight:500;
}
`;

export default GlobalStyle;
