import React from "react";
import { getMovieListPromise } from "../../api/mock-data";
import { useAppContext } from "../../core/context";
import {
  mapPictureListFromApiToVm,
  mapPictureInfoFromVmToContext,
} from "./picture-list.mapper";
import { PictureInfoVm } from "./picture-list.vm";
import { PictureListComponent } from "./picture-list.component";

export const PictureListContainer: React.FC = () => {
  const { updateCartList, checkedProductList } = useAppContext();
  const [pictureList, setPictureList] = React.useState<PictureInfoVm[]>([]);

  const onLoadPictureList = () => {
    getMovieListPromise()
      .then((data) => mapPictureListFromApiToVm(data))
      .then((data) => setPictureList(data));
  };

  React.useEffect(() => {
    onLoadPictureList();
  }, []);

  const checkisInList = (movie: PictureInfoVm): boolean =>
    checkedProductList.findIndex((product) => product.id === movie.id) !== -1;

  const updateSelectedProperty = (
    isInList: boolean,
    movie: PictureInfoVm
  ): PictureInfoVm =>
    movie.selected === isInList ? movie : { ...movie, selected: isInList };

  React.useEffect(() => {
    const newPictureList = pictureList.map((movie) => {
      const isInList = checkisInList(movie);
      return updateSelectedProperty(isInList, movie);
    });
    setPictureList(newPictureList);
  }, [checkedProductList]);

  const handleCheckedList = (product: PictureInfoVm): void => {
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
