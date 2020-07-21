export interface PictureInfoVm {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export interface Context {
  checkedIdList: string[];
  setCheckedIdList: (value: string[]) => void;
  pictureList: PictureInfoVm[];
  setPictureList: (value: PictureInfoVm[]) => void;
}
