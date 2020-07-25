import { PictureInfo } from "../../api/mock-data";
import { PictureInfoVm } from "./picture-list.vm";

const mapPictureInfoFromApiToVm = (picture: PictureInfo): PictureInfoVm => ({
  ...picture,
  selected: false,
});

// Map to Entity

export const mapPictureListFromApiToVm = (
  pictureList: PictureInfo[]
): PictureInfoVm[] => pictureList.map((e) => mapPictureInfoFromApiToVm(e));
