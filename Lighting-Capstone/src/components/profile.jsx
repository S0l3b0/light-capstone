function Profile({ pic, name, job, blurb }) {
  return (
    <div class="bg-indigo-300 w-55 h-55 m-20 border border-4 border-dashed border-indigo-50">
      <img className = "mx-auto pt-5 pb-2" src={pic} alt="profilepic" width="75"/>
      <h3 className = "text-xl">{name}</h3>
      <h4>{job}</h4>
      <p>{blurb}</p>
    </div>
  );
};
export default Profile;