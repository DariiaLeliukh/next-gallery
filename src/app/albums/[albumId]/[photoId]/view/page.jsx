export default function PhotoPage(props) {
  const { albumId, photoId } = props.params;
  return (
    <div>
      <h1>
        This is the PhotoPage of album {albumId} and photo {photoId}
      </h1>
    </div>
  );
}
