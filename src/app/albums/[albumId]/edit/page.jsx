export default function AlbumEditPage(props) {
  const { albumId } = props.params;
  return (
    <div>
      <h1>This is the AlbumEditPage {albumId}</h1>
    </div>
  );
}
