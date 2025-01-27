import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent, IgcIconComponent, IgcRippleComponent, IgcIconButtonComponent, IgcAvatarComponent, IgcDropdownComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .icon-button {
      margin: 0 8px 0 0;
    }
    .icon-button::part(base) {
      color: var(--ig-gray-900);
    }
    .icon-button_1::part(base) {
      color: var(--ig-gray-900);
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .icon_1 {
      color: var(--ig-gray-900);
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .header {
      background-color: #361439;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 12px 20px;
      height: 70px;
      min-height: 70px;
      max-height: 70px;
      flex-shrink: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
    }
    .dropdown::part(base) {
      height: max-content;
    }
  `;

  @query('#nav-drawer')
  private navDrawer?: IgcNavDrawerComponent;

  @query('#dropdown')
  private dropdown?: IgcDropdownComponent;

  @query('#avatar')
  private avatar?: IgcAvatarComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-nav-drawer position="relative" id="nav-drawer" class="nav-drawer">
        <igc-nav-drawer-item @click="${() => Router.go(`/movies`)}">
          <span slot="icon">
            <span class="material-icons icon">
              movie
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Movies</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go(`/movie-complex`)}">
          <span slot="icon">
            <span class="material-icons icon">
              location_on
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Theatres</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item @click="${() => Router.go(`/my-purchases`)}">
          <span slot="icon">
            <span class="material-icons icon">
              shopping_cart
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">My Purchases</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <span slot="icon">
            <span class="material-icons icon">
              local_offer
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Promos</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <span slot="icon">
            <span class="material-icons icon">
              help
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Help &amp; Support</div>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
          <span slot="icon">
            <span class="material-icons icon">
              chat_bubble
            </span>
            <igc-ripple></igc-ripple>
          </span>
          <div slot="content">Contact Us</div>
        </igc-nav-drawer-item>
      </igc-nav-drawer>
      <div class="column-layout group">
        <div class="row-layout header">
          <div class="row-layout group_1">
            <igc-icon-button variant="flat" @click="${() => this.navDrawer?.toggle()}" class="icon-button">
              <span class="material-icons icon_1">
                menu
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <p class="typography__subtitle-1 text">
              MOVIE APP
            </p>
          </div>
          <div class="row-layout group_2">
            <igc-icon-button variant="flat" class="icon-button_1">
              <span class="material-icons icon_1">
                search
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button_1">
              <span class="material-icons icon_1">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar8.png" shape="circle" id="avatar" @click="${() => this.dropdown?.toggle(this.avatar)}" class="avatar"></igc-avatar>
            <igc-dropdown id="dropdown" class="dropdown">
              <igc-dropdown-item>
                My Profile
              </igc-dropdown-item>
              <igc-dropdown-item>
                Logout
              </igc-dropdown-item>
            </igc-dropdown>
          </div>
        </div>
        <router-outlet class="view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
