import CustomButton from "./Button.jsx";

function TeamSection() {
  const handleButtonClick = () => {
    // que hace el boton deaaa
    console.log("me lleva el chanfle a otra pag.");
  };

  return (
    <>
      <div className="descripcion-container team">
        <div className="descripcion-title">
          <h2 className="team-title">Conoce nuestro equipo</h2>
          <CustomButton className="custom-button" texto="Conocer más" onClick={handleButtonClick} />
        </div>
        <div className="team-container">
          <div className="team-member">
            <img className="team-member-img" src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" />
            <p className="team-member-name">Miguel Ortega</p>
          </div>
          <div className="team-member">
            <img className="team-member-img" src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" />
            <p className="team-member-name">Miguel Ortega</p>
          </div>
          <div className="team-member">
            <img className="team-member-img" src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" />
            <p className="team-member-name">Miguel Ortega</p>
          </div>
          <div className="team-member">
            <img className="team-member-img" src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="" />
            <p className="team-member-name">Miguel Ortega</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamSection;
