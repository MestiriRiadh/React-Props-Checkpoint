import PropTypes from "prop-types";
export function Profile({ fullName, bio, profession }) {
  return (
    <div className="profile">
      <h1>{fullName}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "user",
  bio: "bio",
  profession: "profession",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
