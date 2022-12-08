import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Request";
function Home() {
  return (
    <div>
      <Main />
      <Row id="1" title="Estrenos" fetchURL={requests.requestUpcoming}/>
      <Row id="2" title="Populares" fetchURL={requests.requestPopular}/>
      <Row id="3" title="Tendencias" fetchURL={requests.requestTrending}/>
      <Row id="4" title="Más Valorados" fetchURL={requests.requestTopRated}/>
      <Row id="5" title="Terror" fetchURL={requests.requestHorror}/>
    </div>
  );
}

export default Home;
