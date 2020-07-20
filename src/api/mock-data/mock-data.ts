import { PictureInfo } from "./mock-data.model";

export const pictureList: PictureInfo[] = [
  {
    id: "01",
    picUrl: "./src/api/assets/01.jpg",
    title: "Army of Darkness",
  },
  {
    id: "02",
    picUrl: "./src/api/assets/02.jpg",
    title: "Jaws",
  },
  {
    id: "03",
    picUrl: "./src/api/assets/03.jpg",
    title: "Night of the Living Dead",
  },
  {
    id: "04",
    picUrl: "./src/api/assets/04.jpg",
    title: "House on Haunted Hill",
  },
  {
    id: "05",
    picUrl: "./src/api/assets/05.jpg",
    title: "They Day the Earth Stood Still",
  },
  {
    id: "06",
    picUrl: "./src/api/assets/06.jpg",
    title: "Poltergeist",
  },
  {
    id: "07",
    picUrl: "./src/api/assets/07.jpg",
    title: "For a Few Dollars More",
  },
];

export const getImgListPromise = (): Promise<PictureInfo[]> => {
  return Promise.resolve(pictureList);
};
