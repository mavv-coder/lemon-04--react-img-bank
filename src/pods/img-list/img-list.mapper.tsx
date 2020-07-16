import { PictureInfo } from "../../api/mock-data";
import { PictureInfoVm } from "./img-list.vm";

const mapPictureInfoFromApiToVm = (picture: PictureInfo): PictureInfoVm => ({
  ...picture,
  selected: false,
});

export const mapPictureListFromApiToVm = (
  pictureList: PictureInfo[]
): PictureInfoVm[] => pictureList.map((e) => mapPictureInfoFromApiToVm(e));
