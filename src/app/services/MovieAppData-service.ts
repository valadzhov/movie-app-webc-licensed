import { FetchApi } from './FetchApi-service';
import { NowPlayingType } from '../models/MovieAppData/now-playing-type';
import { MovieListType } from '../models/MovieAppData/movie-list-type';
import { TheatresType } from '../models/MovieAppData/theatres-type';
import { ShowtimesType } from '../models/MovieAppData/showtimes-type';
import { TheatresNearYouType } from '../models/MovieAppData/theatres-near-you-type';
import { MyPurchasesType } from '../models/MovieAppData/my-purchases-type';

class MovieAppDataService {
  public getNowPlayingList = async (): Promise<NowPlayingType[]> => {
    return await FetchApi.fetchApiResponse<NowPlayingType[]>('https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2', []);
  }

  public getMovieListList = async (): Promise<MovieListType[]> => {
    return await FetchApi.fetchApiResponse<MovieListType[]>('https://excel2json.io/api/share/99cd7568-0b49-4c09-4387-08da496bf5f2', []);
  }

  public getTheatresList = async (): Promise<TheatresType[]> => {
    return await FetchApi.fetchApiResponse<TheatresType[]>('https://excel2json.io/api/share/5435e256-3846-4895-4385-08da496bf5f2', []);
  }

  public getShowtimesList = async (): Promise<ShowtimesType[]> => {
    return await FetchApi.fetchApiResponse<ShowtimesType[]>('https://excel2json.io/api/share/f179620a-3bb6-49cd-4384-08da496bf5f2', []);
  }

  public getTheatresNearYouList = async (): Promise<TheatresNearYouType[]> => {
    return await FetchApi.fetchApiResponse<TheatresNearYouType[]>('https://excel2json.io/api/share/49f543dc-9c4e-43e8-4386-08da496bf5f2', []);
  }

  public getMyPurchasesList = async (): Promise<MyPurchasesType[]> => {
    return await FetchApi.fetchApiResponse<MyPurchasesType[]>('https://excel2json.io/api/share/3f89384c-e58f-429a-4388-08da496bf5f2', []);
  }
}
export const movieAppDataService: MovieAppDataService = new MovieAppDataService();
