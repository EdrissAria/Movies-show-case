import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Let's jump into movies world!"
        description="movies details, casts details
        ,searching movies, movies by genres and trailers all in one app."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="TMDB provides us thousands of movies."
        description="This app is using TheMovie database which provides 773,847 movies with trailers, movies casts and genres."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Movies app is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to show the movies"
        description="The app contains several screens. The home screen has beautiful carousel that show upcomming movies and lists movies with different catagories,
        search screen that provides an easy way to find movies, genres screens which provide movies by thier genres, movie details screen and casts information screens. 
        "
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className="bold">Muhammad Edriss Aria</span>
        </p>
      </div>
    </>
  );
}

export default App;

