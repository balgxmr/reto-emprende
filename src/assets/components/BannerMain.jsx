function BannerMain({ bannerMainImgUrl, bannerMainText }) {
  return (
    <>
      <div className="bannerMain-container">
        <img className="bannerMain-img" src={bannerMainImgUrl} alt="" />
        <div className="bannerMain-info">
          <h2>PANAMÁ</h2>
          <p>{bannerMainText}</p>
        </div>
      </div>
    </>
  );
}

export default BannerMain;
