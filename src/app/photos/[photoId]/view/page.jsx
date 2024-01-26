export default function PhotoPage(props) {
  const { photoId } = props.params;
  return (
    <div>
      <h1>This is the PhotoPage of photo {photoId}</h1>
    </div>
  );
}
