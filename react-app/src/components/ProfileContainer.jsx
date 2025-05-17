import ProfileCard from './ProfileCard';
import PageHeader from './Header'; 

//This component holds the profile data.



export default function ProfileContainer() {
  const profiles = [

    { name: 'Clark Kent', age: 35, bio: "There's no place like Smallville." },
    { name: 'Peter Parker', age: 48, bio: "Just your friendly, neighborhood Spider-Man." },
    { name: 'Bruce Wayne', age: 31, bio: "MY superpower is that I'm rich" }
 
];

  return (

    <div>

      <PageHeader />

      {profiles.map((profile, index) => (
       
       <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
        />

      ))}
    </div>
  );
}
