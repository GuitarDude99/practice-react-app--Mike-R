function ProfileCard({ name, age, bio }) {
    
    // this is a reusable card that takes in name age, and bio as props.


    return (
      <div className="profile">
       
        <p><b>Name:</b> {name}</p>
        <p><b>Age:</b> {age}</p>
        <p><b>Bio:</b> {bio}</p>
     
      </div>
   
);
  }
  
  export default ProfileCard;
  