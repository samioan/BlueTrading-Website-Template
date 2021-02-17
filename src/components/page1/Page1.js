import "./page1.css";

const Page1 = () => (
  <div className="Page1">
    <header className="Page1Header">
      <div className="Page1HeaderButtons Page1HeaderButton1" onClick={null}>
        Contact
      </div>
      <div className="Page1HeaderButtons Page1HeaderButton2" onClick={null}>
        Features
      </div>
      <div className="Page1HeaderButtons Page1HeaderButton3" onClick={null}>
        About Us
      </div>
      <div className="Page1HeaderText">BlueTrading </div>
    </header>
    <div className="Page1TitleText">Invest in the Future of Humanity</div>
    <div className="Page1BodyText">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    </div>
    <div className="Page1HeaderImage" />
    <div className="Page1BackgroundImage" />
  </div>
);

export { Page1 };
export default Page1;
