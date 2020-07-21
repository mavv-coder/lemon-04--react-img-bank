import { PictureInfo } from "../../api/mock-data";
import { PictureInfoVm } from "./app-context.models";

const mapPictureInfoFromApiToVm = (picture: PictureInfo): PictureInfoVm => ({
  ...picture,
  selected: false,
});

export const mapPictureListFromApiToVm = (
  pictureList: PictureInfo[]
): PictureInfoVm[] => pictureList.map((e) => mapPictureInfoFromApiToVm(e));
