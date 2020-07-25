import { PictureInfoVm } from "../../pods/picture-list";

export interface Context {
  checkedIdList: string[];
  setCheckedIdList: (value: string[]) => void;
  pictureList: PictureInfoVm[];
  setPictureList: (value: PictureInfoVm[]) => void;
  visibleCart: boolean;
  setVisibleCart: (value: boolean) => void;
}
