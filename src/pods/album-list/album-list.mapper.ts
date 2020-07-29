import { ApiAlbumInfoEntity } from "../../api/mock-data";
import { ProductInfoEntity } from "../../core/context";
import { AlbumInfoVm } from "./album-list.vm";

// MAP from api to album-list page
const mapAlbumInfoFromApiToVm = (album: ApiAlbumInfoEntity): AlbumInfoVm => ({
  ...album,
  selected: false,
});

export const mapAlbumListFromApiToVm = (
  pictureList: ApiAlbumInfoEntity[]
): AlbumInfoVm[] => pictureList.map((e) => mapAlbumInfoFromApiToVm(e));

// MAP from album-list page to context
export const mapPictureInfoFromVmToContext = (
  picture: AlbumInfoVm
): ProductInfoEntity => ({
  id: picture.id,
  picUrl: picture.picUrl,
  title: picture.title,
});
