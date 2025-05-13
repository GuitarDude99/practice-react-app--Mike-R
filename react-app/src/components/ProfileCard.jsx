function ProfileCard() {

    let profileData = [
        { 
        name: "Clark K", 
        age: 10000000,
        bio: "This is Clark's bio." 
        }, 
        { 
        name: "Peter P", 
        age: 48,
        bio: "This is Peter's bio." 
        }, 
        { 
        name: "Bruce W", 
        age: 31,
        bio: "This is Bruce's bio." 
        }
]
// const profile = profileData.map(data, index) => ;
const profile = profileData.map((data, index) => (<li key={index}> Name: {data.name} <br /> - Age: {data.age} <br /> - {data.bio} </li>));

    return (
       <ul>{profile}</ul>
    );

}

export default ProfileCard;