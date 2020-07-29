import { ApiMovieInfoEntity } from "../../api/mock-data";
import { ProductInfoEntity } from "../../core/context";
import { PictureInfoVm } from "./picture-list.vm";

// MAP from api to picture-list page
const mapPictureInfoFromApiToVm = (
  picture: ApiMovieInfoEntity
): PictureInfoVm => ({
  ...picture,
  selected: false,
});

export const mapPictureListFromApiToVm = (
  pictureList: ApiMovieInfoEntity[]
): PictureInfoVm[] => pictureList.map((e) => mapPictureInfoFromApiToVm(e));

// MAP from picture-list page to context
export const mapPictureInfoFromVmToContext = (
  picture: PictureInfoVm
): ProductInfoEntity => ({
  id: picture.id,
  picUrl: picture.picUrl,
  title: picture.title,
});
