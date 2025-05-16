

function ProfileCard() {

    let profileData = [
        { 
        name: "Clark Kent", 
        age: "♾️",
        bio: "I thought Shaquille O'neal was Superman?"
        }, 
        { 
        name: "Peter Parker", 
        age: 48,
        bio: "Peter Parker is the real Spiderman!" 
        }, 
        { 
        name: "Bruce Wayne", 
        age: 31,
        bio: "Bruce Wayne is filthy rich!" 
        }
]
// const profile = profileData.map(data, index) => ;
const profile = profileData.map((data, index) => ( 
<div id="margin"> 
    <li class="single-profile" key={index}> 
        <key class="key-names"> <b>NAME:</b> </key> {data.name} <br />
        <key class="key-names"> <b>AGE:</b> </key> {data.age} <br />
        <key class="key-names"> <b>BIO:</b> </key> {data.bio} <br />
    </li>
</div>));

<div class="key-names"></div>
    return (
       <ul class="profiles">{profile}</ul>
    );

}

export default ProfileCard;