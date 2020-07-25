import { PictureInfoVm } from "../../pods/picture-list";

export interface productInfoVm {
  id: string;
  picUrl: string;
  title: string;
}

export interface Context {
  checkedProductList: productInfoVm[];
  setCheckedProductList: (value: productInfoVm[]) => void;
  pictureList: PictureInfoVm[];
  setPictureList: (value: PictureInfoVm[]) => void;
  visibleCart: boolean;
  setVisibleCart: (value: boolean) => void;
}
