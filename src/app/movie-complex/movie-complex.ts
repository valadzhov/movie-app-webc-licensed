import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-movie-complex')
export default class MovieComplex extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .demo-content {
      border-color: var(--ig-secondary-400);
      border-width: 2px;
      border-style: dashed;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      position: absolute;
      padding: 64px;
      min-width: 50px;
      min-height: 50px;
    }
    .image {
      object-fit: cover;
      margin: 0 0 24px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .h6 {
      color: var(--ig-primary-400);
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .text {
      text-align: center;
      color: var(--ig-gray-500);
      height: max-content;
      min-width: min-content;
      max-width: 280px;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout demo-content">
        <img src="/src/assets/start-building-dark.svg" class="image" />
        <h6 class="h6">
          Start building!
        </h6>
        <p class="typography__body-2 text">
          Remove the "demo-content" container, and add your own content.
        </p>
      </div>
    `;
  }
}
