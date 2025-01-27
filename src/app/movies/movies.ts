import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcDatePickerComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent, IgcSelectComponent, IgcTabsComponent } from 'igniteui-webcomponents';
import { TheatresNearYouType } from '../models/MovieAppData/theatres-near-you-type';
import { TheatresType } from '../models/MovieAppData/theatres-type';
import { MovieListType } from '../models/MovieAppData/movie-list-type';
import { NowPlayingType } from '../models/MovieAppData/now-playing-type';
import { ShowtimesType } from '../models/MovieAppData/showtimes-type';
import { movieAppDataService } from '../services/MovieAppData-service';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcTabsComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcSelectComponent, IgcDatePickerComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent);

@customElement('app-movies')
export default class Movies extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
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
      gap: 24px;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 512px;
      min-height: 50px;
      flex-grow: 4;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      background-image: url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 320px;
      max-height: 320px;
    }
    .group_2 {
      background-color: rgb(25, 9, 27, 0.3);
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .tabs {
      min-width: auto;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .card {
      height: max-content;
      min-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .demo-content {
      border-color: var(--ig-secondary-200);
      border-width: 2px;
      border-style: dashed;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 32px;
      padding: 48px;
      min-width: auto;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_4 {
      background-color: #110613;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 400px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .buy-tickets {
      background-color: #19091B;
      border-color: #361439;
      border-width: 4px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      margin: 0.0px 0.0px 32px;
      padding: 24px;
      flex-shrink: 0;
    }
    .theatres-near-you {
      background-color: #19091B;
      border-color: #361439;
      border-width: 4px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      margin: 0.0px;
      padding: 24.0px 0.0px;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .h5_1 {
      text-align: center;
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .icon {
      color: var(--ig-primary-400);
    }
    .image_1 {
      object-fit: cover;
      min-width: 0;
      min-height: 0;
      max-width: 160px;
      flex-shrink: 0;
    }
    .text {
      text-align: center;
      color: var(--ig-gray-500);
      height: max-content;
      min-width: min-content;
      max-width: 320px;
    }
    .title {
      margin: 0.0px 0.0px 16px;
      padding: 0.0px;
      width: max-content;
      height: max-content;
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .text_1 {
      margin: 0 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --ig-size: var(--ig-size-small);
    }
    .avatar::part(base) {
      background-color: var(--ig-success-500);
    }
    .tab-item-content {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      padding: 24px 0 0;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
      max-height: 100%;
    }
    .media-content {
      height: 180px;
      min-height: 180px;
      max-height: 180px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: var(--ig-primary-400);
    }
    .tab-item-content_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      padding: 24px 0 0;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
      max-height: 100%;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .select {
      height: max-content;
      min-width: min-content;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .select_1 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      margin: 0 24px;
      height: max-content;
    }
    .button_2::part(base) {
      color: white;
      background-color: var(--ig-primary-500);
    }
    .button_3::part(base) {
      color: var(--ig-primary-400);
    }
    .button_4::part(base) {
      color: white;
      background-color: var(--ig-primary-500);
    }
    .button_1_1::part(base) {
      color: white;
      background-color: var(--ig-primary-500);
    }
    .list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    movieAppDataService.getNowPlayingList().then(data => this.movieAppDataNowPlaying = data);
    movieAppDataService.getMovieListList().then(data => this.movieAppDataMovieList = data);
    movieAppDataService.getTheatresList().then(data => this.movieAppDataTheatres = data);
    movieAppDataService.getShowtimesList().then(data => this.movieAppDataShowtimes = data);
    movieAppDataService.getTheatresNearYouList().then(data => this.movieAppDataTheatresNearYou = data);
  }

  @state()
  private movieAppDataNowPlaying: NowPlayingType[] = [];

  @state()
  private value: string = '1';

  @state()
  private movieAppDataMovieList: MovieListType[] = [];

  @state()
  private movieAppDataTheatres: TheatresType[] = [];

  @state()
  private movieAppDataShowtimes: ShowtimesType[] = [];

  @state()
  private movieAppDataTheatresNearYou: TheatresNearYouType[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h5 class="content">
          Movie Premieres
        </h5>
        <div class="row-layout group_1">
          <div class="column-layout group_2">
            <div class="column-layout group_3">
              <h5 class="h5_1">
                MoviePlex Metropolis
              </h5>
              <igc-button type="button" class="button button_2">
                SHOW SCHEDULE
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
        </div>
        <igc-tabs class="tabs">
          <igc-tab ?selected="${true}">
            <span>Now Playing</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content">
            ${this.movieAppDataNowPlaying?.map((item) => html`
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="${item.MoviePoster}" class="image" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    ${item.Name}
                  </h3>
                  <h5 slot="subtitle">
                    ${item.Genre}
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <p class="typography__body-1 content">
                    ${item.Description}
                  </p>
                </igc-card-content>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" type="button" slot="start" class="button button_3">
                    More
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-icon-button slot="end" variant="flat" class="icon-button">
                    <span class="material-icons icon">
                      favorite
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button slot="end" variant="flat" class="icon-button">
                    <span class="material-icons icon">
                      bookmark
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                  <igc-icon-button slot="end" variant="flat" class="icon-button">
                    <span class="material-icons icon">
                      share
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-icon-button>
                </igc-card-actions>
              </igc-card>
            `)}
          </igc-tab-panel>
          <igc-tab ?disabled="${true}">
            <span>Opening This Week</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content_1">
            <div class="row-layout demo-content">
              <img src="/src/assets/start-building-dark.svg" class="image_1" />
              <p class="typography__body-2 text">
                Remove the "demo-content" container, and add your own content.
              </p>
            </div>
          </igc-tab-panel>
          <igc-tab ?disabled="${true}">
            <span>Coming Soon</span>
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content_1">
            <div class="row-layout demo-content">
              <img src="/src/assets/start-building-dark.svg" class="image_1" />
              <p class="typography__body-2 text">
                Remove the "demo-content" container, and add your own content.
              </p>
            </div>
          </igc-tab-panel>
        </igc-tabs>
      </div>
      <div class="column-layout group_4">
        <div class="column-layout buy-tickets">
          <p class="typography__subtitle-2 title">
            BUY TICKETS
          </p>
          <igc-select ?outlined="${false}" label="Pick a Movie" placeholder="Select Movie Title" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail.value}" class="select">
            <span slot="prefix">
              <span class="material-icons icon_1">
                movie
              </span>
            </span>
            ${this.movieAppDataMovieList?.map((item) => html`
              <igc-select-item value="1">
                ${item.Name}
              </igc-select-item>
            `)}
          </igc-select>
          <igc-select ?outlined="${false}" label="Theatres" placeholder="Select a Movie Complex" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail.value}" class="select">
            <span slot="prefix">
              <span class="material-icons icon_1">
                location_on
              </span>
            </span>
            ${this.movieAppDataTheatres?.map((item) => html`
              <igc-select-item value="1">
                ${item.Theatres}
              </igc-select-item>
            `)}
          </igc-select>
          <igc-date-picker label="Date" ?outlined="${false}" mode="dialog" class="date-picker"></igc-date-picker>
          <igc-select ?outlined="${false}" label="Show Time" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail.value}" class="select_1">
            <span slot="prefix">
              <span class="material-icons icon_1">
                access_time
              </span>
            </span>
            ${this.movieAppDataShowtimes?.map((item) => html`
              <igc-select-item value="1">
                ${item.Showtimes}
              </igc-select-item>
            `)}
          </igc-select>
          <igc-button type="button" class="button button_4">
            GET TICKETS NOW
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout theatres-near-you">
          <p class="typography__subtitle-2 text_1">
            THEATRES NEAR YOU
          </p>
          <igc-list class="list">
            ${this.movieAppDataTheatresNearYou?.map((item) => html`
              <igc-list-item>
                <igc-avatar initials="${item.Initials}" slot="start" shape="circle" class="avatar"></igc-avatar>
                <div slot="title">${item.Theatre}</div>
                <div slot="subtitle">${item.Address}</div>
              </igc-list-item>
            `)}
          </igc-list>
          <igc-button type="button" class="button_1 button_1_1">
            Change Location
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
    `;
  }
}
