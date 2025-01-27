import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { MyPurchasesType } from '../models/MovieAppData/my-purchases-type';
import { movieAppDataService } from '../services/MovieAppData-service';

defineComponents(IgcListComponent, IgcListItemComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent);

@customElement('app-my-purchases')
export default class MyPurchases extends LitElement {
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
    .group {
      background-color: #110613;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 8px 0;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: space-between;
      gap: 16px;
      position: relative;
      min-width: 320px;
      min-height: auto;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 6px;
      position: relative;
      min-width: 300px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 6px;
      position: relative;
      padding: 4px 0 0;
      min-width: 140px;
    }
    .h4 {
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      width: 135px;
      height: 180px;
      min-width: 0;
      min-height: 0;
      max-width: 135px;
      max-height: 180px;
      flex-shrink: 0;
    }
    .h6 {
      height: max-content;
      max-width: 300px;
    }
    .hyperlink {
      color: var(--ig-primary-400);
      height: max-content;
    }
    .text {
      color: var(--ig-gray-500);
      height: max-content;
    }
    .text_1 {
      height: max-content;
      min-width: auto;
    }
    .list {
      height: max-content;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    movieAppDataService.getMyPurchasesList().then(data => this.movieAppDataMyPurchases = data);
  }

  @state()
  private movieAppDataMyPurchases: MyPurchasesType[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h4 class="h4">
          My Purchases
        </h4>
        <igc-list class="list">
          ${this.movieAppDataMyPurchases?.map((item) => html`
            <igc-list-item>
              <div>
                <div class="row-layout group_1">
                  <img src="${item.MoviePoster}" class="image" />
                  <div class="row-layout group_2">
                    <div class="row-layout group_3">
                      <div class="column-layout group_4">
                        <h6 class="h6">
                          ${item.Name}
                        </h6>
                        <a class="typography__body-2 hyperlink">
                          ${item.Theatre}
                        </a>
                      </div>
                      <div class="column-layout group_5">
                        <p class="typography__body-2 text">
                          Purchased
                        </p>
                        <p class="typography__body-2 text_1">
                          ${item.Purchased}
                        </p>
                      </div>
                    </div>
                    <igc-button type="button" class="button">
                      <span class="material-icons">
                        cloud_download
                      </span>
                      <span>Get Tickets</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </div>
                </div>
              </div>
            </igc-list-item>
          `)}
        </igc-list>
      </div>
    `;
  }
}
