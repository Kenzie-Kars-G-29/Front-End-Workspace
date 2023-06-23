import StyledUserOverview from "./style";

const UserOverview = () => {
  return (
    <StyledUserOverview>
      <div className="user-image" />
      <div className="user-info">
        <h2>
          Nome do Usuário
          <span>Anunciante</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </StyledUserOverview>
  );
};

export default UserOverview;
