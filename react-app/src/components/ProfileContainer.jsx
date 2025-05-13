import ProfileCard from "./ProfileCard";


export default function ProfileContainer(props) {
    
    const { name, age, bio } = props;

    return (
        <div>
            <ProfileCard/>
        </div>
    )
}