import React from "react";
import { getMovieListPromise } from "../../api/mock-data";
import { useAppContext } from "../../core/context";
import {
  mapMovieListFromApiToVm,
  mapPictureInfoFromVmToContext,
} from "./movie-list.mapper";
import { MovieInfoVm } from "./movie-list.vm";
import { PictureListComponent } from "./movie-list.component";

export const PictureListContainer: React.FC = () => {
  const { updateCartList, checkedProductList } = useAppContext();
  const [pictureList, setPictureList] = React.useState<MovieInfoVm[]>([]);

  const onLoadPictureList = () => {
    getMovieListPromise()
      .then((data) => mapMovieListFromApiToVm(data))
      .then((data) => setPictureList(data));
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

  React.useEffect(() => {
    const newPictureList = pictureList.map((movie) => {
      const isInList = checkisInList(movie);
      return updateSelectedProperty(isInList, movie);
    });
    setPictureList(newPictureList);
  }, [checkedProductList]);

  const handleCheckedList = (product: MovieInfoVm): void => {
    const productEntity = mapPictureInfoFromVmToContext(product);
    updateCartList(productEntity);
  };

  return (
    <PictureListComponent
      handleCheckedList={handleCheckedList}
      pictureList={pictureList}
    />
  );
};
