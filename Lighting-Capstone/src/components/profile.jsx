function Profile({ pic, name, job, blurb }) {
  return (
    <div class="circle">
      <img src={pic} alt="profilepic" />
      <h3>{name}, {job}</h3>
      <p>{blurb}</p>
    </div>
  );
};
export default Profile;