import { css } from 'lit-element';

export default css `
  #main-container {
    display: var(--sophos-icon-main-container-display, inline-flex);
  }

  #icon-text {
    text-align: var(--sophos-icon-icon-text-text-align, center);
  }

  #icon-image {
    width: var(--sophos-icon-icon-image-width, 50px);
    height: var(--sophos-icon-icon-imageheight, 50px);
  }

  #main-container[icon-direction = "left"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-left, row-reverse);
  } 

  #main-container[icon-direction = "right"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-right, row);
  }

  #main-container[icon-direction = "top"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-top, column);
  }

  #main-container[icon-direction = "bottom"] {
    flex-direction: var(--sophos-icon-main-container-flex-direction-icon-direction-bottom, column-reverse);
  }
`;