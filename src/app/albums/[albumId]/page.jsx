import PhotoList from "@/components/PhotoList";
import Link from "next/link";
import "../../App.scss";

import { fetchPhotosFromAlbumByAlbumId } from "@/actions/albumActions";

export default async function AlbumPage(props) {
  let photos = [];
  try {
    photos = await fetchPhotosFromAlbumByAlbumId(props.params.albumId);
    console.log("test", photos);
  } catch (err) {
    console.log();
  }

  return (
    <div className="Page">
      <h1>This is the AlbumPage</h1>
      {photos.length > 0 && <PhotoList photos={photos} />}
    </div>
  );
}
