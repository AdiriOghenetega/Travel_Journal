export default function List(props) {
  console.log(props);
  return (
    <div className="list_container">
      <div className="list">
        <div className="location_img">
          <img src={props.imageUrl} />
        </div>
        <div className="list_about">
          <div className="location_map">
            <div className="location_map_pin-country">
              <img src="../images/map-icon.png" />
              <label>{props.location}</label>
            </div>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="title">{props.title}</h1>
          <h4 className="date">
            {props.startDate}-{props.endDate}
          </h4>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
