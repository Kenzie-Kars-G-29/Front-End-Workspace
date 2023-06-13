import AuthorCard from "../../components/AuthorCard";
import StyledMain from "./style";

const Profile = () => {
  const author = {
    name: "Autor",
    bio: "Esta é a bio do autor",
  };
  return (
    <>
      <StyledMain>
        <AuthorCard author={author} />
      </StyledMain>
    </>
  );
};

export default Profile;
