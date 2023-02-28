import HeroForm from "../../components/Forms/HeroForm/HeroForm";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/Nav/NavBar/NavBar";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <section className="hero">
        <h1 className="hero__title">
          Unlimited movies, TV
          <br></br> shows, and more.
        </h1>
        <h2 className="hero__subtitle">Watch anywhere. Cancel anytime.</h2>
        <HeroForm />
      </section>
    </div>
  );
};

export default Home;
