import PropTypes from "prop-types";
const Estate = ({ estate }) => {
  const {
    image,
    estate_title,
    description,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
  } = estate;
  return (
    <div>
      <div className="card bg-base-100 md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div>
            <h2 className="card-title">{estate_title}</h2>
            <div className="badge badge-primary badge-outline">
              {segment_name}
            </div>
          </div>
          <p>{description}</p>
          <div className="flex ">
            <p>
              Price: <span className="text-red-500">{price}</span>
            </p>
            <p className="ml-4">
              Status: <span className="text-red-500">{status}</span>
            </p>
          </div>
          <p>
            Area: <span className="text-red-500">{area}</span>
          </p>
          <p>
            Location: <span className="text-red-500">{location}</span>
          </p>
          <div>
            <h2 className="text-xl font-bold">Facilities:</h2>
            <ul>
              {facilities.map((facility,index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default Estate;
