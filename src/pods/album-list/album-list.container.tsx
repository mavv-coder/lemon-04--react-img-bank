import React from "react";
import { getAlbumListPromise } from "../../api/mock-data";
import { useAppContext } from "../../core/context";
import {
  mapAlbumListFromApiToVm,
  mapPictureInfoFromVmToContext,
} from "./album-list.mapper";
import { AlbumInfoVm } from "./album-list.vm";
import { AlbumListComponent } from "./album-list.component";

export const AlbumListContainer: React.FC = () => {
  const { updateCartList, checkedProductList } = useAppContext();
  const [albumList, setAlbumList] = React.useState<AlbumInfoVm[]>([]);

  const onLoadPictureList = () => {
    getAlbumListPromise()
      .then((data) => mapAlbumListFromApiToVm(data))
      .then((data) => setAlbumList(data));
  };

  React.useEffect(() => {
    onLoadPictureList();
  }, []);

  const checkisInList = (movie: AlbumInfoVm): boolean =>
    checkedProductList.findIndex((product) => product.id === movie.id) !== -1;

  const updateSelectedProperty = (
    isInList: boolean,
    movie: AlbumInfoVm
  ): AlbumInfoVm =>
    movie.selected === isInList ? movie : { ...movie, selected: isInList };

  React.useEffect(() => {
    const newPictureList = albumList.map((movie) => {
      const isInList = checkisInList(movie);
      return updateSelectedProperty(isInList, movie);
    });
    setAlbumList(newPictureList);
  }, [checkedProductList]);

  const handleCheckedList = (product: AlbumInfoVm): void => {
    const productEntity = mapPictureInfoFromVmToContext(product);
    updateCartList(productEntity);
  };

  return (
    <AlbumListComponent
      handleCheckedList={handleCheckedList}
      albumList={albumList}
    />
  );
};
