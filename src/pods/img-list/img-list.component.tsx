import React from "react";
import { getImgListPromise } from "../../api/mock-data";
import { mapPictureListFromApiToVm } from "./img-list.mapper";
import { PictureInfoVm } from "./img-list.vm";
import { useStyles } from "./img-list.styles";

export const ImgList: React.FC = () => {
  const [imgList, setImgList] = React.useState<PictureInfoVm[]>([]);
  const classes = useStyles();

  const onLoadImgList = () => {
    getImgListPromise()
      .then((data) => mapPictureListFromApiToVm(data))
      .then((data) => setImgList(data));
  };

  React.useEffect(() => {
    onLoadImgList();
  }, []);

  return (
    <div className={`${classes.root}, ${classes.flexContainer}`}>
      {imgList.map((img) => (
        <div key={img.id} className={classes.pictures}>
          <img src={img.picUrl} alt="img" className={classes.poster} />
          <p>{img.title}</p>
          <input type="checkbox" defaultChecked={img.selected}></input>
        </div>
      ))}
    </div>
  );
};
