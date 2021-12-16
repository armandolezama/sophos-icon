import { LitElement, html } from 'lit';
import styles from './sophos-icon-styles';

export class SophosIcon extends LitElement {

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor () {
    super();
    this.iconText = '';
    this.imageSource = '';
    this.imageAlt = '';
    this.iconDirection = '';
  }

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties () {
    return {
      iconText : {type : String},
      imageSource : {type : String},
      imageAtl : {type : String},
      iconDirection : { type : String}
    };
  }

  static get styles () {
    return styles;
  }

  render () {
    return html`
      <div id="main-container" icon-direction=${this.iconDirection}>
        <h3 id="icon-text">${this.iconText}</h3>
        <img id="icon-image" src=${this.imageSource} alt=${this.imageAlt}>
      </div>
    `;
  }
}
customElements.define('sophos-icon', SophosIcon);