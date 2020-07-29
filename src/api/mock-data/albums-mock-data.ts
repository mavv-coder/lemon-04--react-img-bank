import { ApiAlbumInfoEntity } from "./albums-mock-data.model";

export const albumApiList: ApiAlbumInfoEntity[] = [
  {
    id: "08",
    picUrl: "./src/api/assets/08.jpg",
    title: "Nevermind",
    band: "Nirvana",
  },
  {
    id: "09",
    picUrl: "./src/api/assets/09.jpg",
    title: "Let It Bleed",
    band: "Rolling Stones",
  },
  {
    id: "10",
    picUrl: "./src/api/assets/10.jpg",
    title: "A Love Supreme",
    band: "John Coltrane",
  },
  {
    id: "11",
    picUrl: "./src/api/assets/11.jpg",
    title: "Music Has the Right to the Children",
    band: "Boards of Canada",
  },
  {
    id: "12",
    picUrl: "./src/api/assets/12.jpg",
    title: "Pink Moon",
    band: "Nick Drake",
  },
  {
    id: "13",
    picUrl: "./src/api/assets/13.jpg",
    title: "Ghosteen",
    band: "Nick Cave & the Bad Seeds",
  },
  {
    id: "14",
    picUrl: "./src/api/assets/14.jpg",
    title: "Pink Floyd",
    band: "The Dark Side of the Moon",
  },
];

export const getAlbumListPromise = (): Promise<ApiAlbumInfoEntity[]> => {
  return Promise.resolve(albumApiList);
};
