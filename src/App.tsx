import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  //codigo jsx es sumamente parecido a HTML -> React.createElement
  const list: string[] = ["Goku", "Tanjiro", "Eren"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo " + elemento);
  };

  

  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
    </Card>
  );
}

export default App;
