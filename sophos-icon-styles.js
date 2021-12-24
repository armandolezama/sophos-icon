import { css } from 'lit';

export default css `
  #main-container {
    display: var(--sophos-icon-main-container-display, inline-flex);
    justify-content: var(--sophos-icon-main-container-justify-content, center);
    align-items: var(--sophos-icon-main-container-align-items, center);
    margin: var(--sophos-icon-main-container-margin, auto);
    padding: var(--sophos-icon-main-container-padding, auto);
    border: var(--sophos-icon-main-container-border, none);
    border-radius: var(--sophos-icon-main-container-border-radius, none);
    cursor: var(--sophos-icon-main-container-cursor, auto);
  }

  #icon-text {
    text-align: var(--sophos-icon-icon-text-text-align, center);
    font-size: var(--sophos-icon-icon-text-font-size, 16px);
    margin: var(--sophos-icon-icon-text-margin, auto);
    border-radius: var(--sophos-icon-icon-text-border-radius, 0);
    border: var(--sophos-icon-icon-text-border, none);
    color: var(--sophos-icon-icon-text-color, #000000);
    background: var(--sophos-icon-icon-text-background, transparent);
    cursor: var(--sophos-icon-icon-text-cursor, auto);
  }

  #icon-image {
    box-sizing: var(--sophos-icon-icon-image-box-sizing, content-box);
    width: var(--sophos-icon-icon-image-width, 50px);
    height: var(--sophos-icon-icon-image-height, 50px);
    margin: var(--sophos-icon-icon-image-margin, auto);
    border: var(--sophos-icon-icon-image-border, 0);
    border-radius: var(--sophos-icon-icon-image-border-radius, 0);
    cursor: var(--sophos-icon-icon-image-cursor, auto);
  }

  #main-container[icon-direction = "left"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-left, row-reverse);
  } 

  #main-container[icon-direction = "right"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-right, row);
  }

  #main-container[icon-direction = "bottom"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-top, column);
  }

  #main-container[icon-direction = "top"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-bottom, column-reverse);
  }
`;