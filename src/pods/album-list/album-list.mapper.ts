import { ApiAlbumInfoEntity } from "../../api/mock-data";
import { ProductInfoEntity } from "../../core/context";
import { AlbumInfoVm } from "./album-list.vm";

// MAP from api to album-list page
const mapAlbumInfoFromApiToVm = (album: ApiAlbumInfoEntity): AlbumInfoVm => ({
  ...album,
  selected: false,
});

export const mapAlbumListFromApiToVm = (
  albumList: ApiAlbumInfoEntity[]
): AlbumInfoVm[] => albumList.map((e) => mapAlbumInfoFromApiToVm(e));

// MAP from album-list page to context
export const mapPictureInfoFromVmToContext = (
  album: AlbumInfoVm
): ProductInfoEntity => ({
  id: album.id,
  picUrl: album.picUrl,
  title: album.title,
});
