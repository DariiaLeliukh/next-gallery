import { fetchAlbumsByUserId } from "@/actions/albumActions";
import AlbumList from "@/components/AlbumList";
import Link from "next/link";
import "../App.scss";

export default async function AlbumsPage(props) {
  let albums = [];
  try {
    albums = await fetchAlbumsByUserId();
  } catch (err) {
    console.log();
  }
  return (
    <div className="Page">
      <h1>This is the AlbumsPage</h1>
      <AlbumList albums={albums} />
    </div>
  );
}
