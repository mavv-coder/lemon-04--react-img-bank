import { ApiMovieInfoEntity } from "../../api/mock-data";
import { ProductInfoEntity } from "../../core/context";
import { MovieInfoVm } from "./movie-list.vm";

// MAP from api to movie-list page
const mapMovieInfoFromApiToVm = (movie: ApiMovieInfoEntity): MovieInfoVm => ({
  ...movie,
  selected: false,
});

export const mapMovieListFromApiToVm = (
  movieList: ApiMovieInfoEntity[]
): MovieInfoVm[] => movieList.map((e) => mapMovieInfoFromApiToVm(e));

// MAP from movie-list page to context
export const mapPictureInfoFromVmToContext = (
  movie: MovieInfoVm
): ProductInfoEntity => ({
  id: movie.id,
  picUrl: movie.picUrl,
  title: movie.title,
});
