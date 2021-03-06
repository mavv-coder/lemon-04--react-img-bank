import React from "react";
import { getMovieListPromise } from "../../api/mock-data";
import { useAppContext } from "../../core/context";
import {
  mapMovieListFromApiToVm,
  mapPictureInfoFromVmToContext,
} from "./movie-list.mapper";
import { MovieInfoVm } from "./movie-list.vm";
import { MovieListComponent } from "./movie-list.component";

export const MovieListContainer: React.FC = () => {
  const { updateCartList, checkedProductList } = useAppContext();
  const [movieList, setMovieList] = React.useState<MovieInfoVm[]>([]);

  const onLoadPictureList = () => {
    getMovieListPromise()
      .then((data) => mapMovieListFromApiToVm(data))
      .then((data) => {
        const newMovieList = generateNewAlbumListCheckingCartSelection(data);

        setMovieList(newMovieList);
      });
  };

  React.useEffect(() => {
    onLoadPictureList();
  }, []);

  const checkisInList = (movie: MovieInfoVm): boolean =>
    checkedProductList.findIndex((product) => product.id === movie.id) !== -1;

  const updateSelectedProperty = (
    isInList: boolean,
    movie: MovieInfoVm
  ): MovieInfoVm =>
    movie.selected === isInList ? movie : { ...movie, selected: isInList };

  const generateNewAlbumListCheckingCartSelection = (
    list: MovieInfoVm[]
  ): MovieInfoVm[] =>
    list.map((movie) => {
      const isInList = checkisInList(movie);
      return updateSelectedProperty(isInList, movie);
    });

  React.useEffect(() => {
    const newMovieList = generateNewAlbumListCheckingCartSelection(movieList);
    setMovieList(newMovieList);
  }, [checkedProductList]);

  const handleCheckedList = (product: MovieInfoVm): void => {
    const productEntity = mapPictureInfoFromVmToContext(product);
    updateCartList(productEntity);
  };

  return (
    <MovieListComponent
      handleCheckedList={handleCheckedList}
      movieList={movieList}
    />
  );
};
