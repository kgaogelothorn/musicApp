interface Data {
    id: number;
    albumArt: string;
    artist: Artist;
    duration: number;
    album: Album;
    title: string;
  }

interface Album extends Array<any> {}
interface Artist extends Array<any> {}
interface Tracks extends Array<Data> {}

export { Data, Tracks };
