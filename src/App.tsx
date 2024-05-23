import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  //codigo jsx es sumamente parecido a HTML -> React.createElement
  const list = ["Goku", "Tanjiro", "Eren"];
  return (
    <>
      <Card>
        <CardBody title="Hola mundo" text="Este es el texto" />
        <List data={list} />
      </Card>
    </>
  );
}

export default App;
