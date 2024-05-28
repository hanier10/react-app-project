import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  //codigo jsx es sumamente parecido a HTML -> React.createElement
  const list = ["Goku", "Tanjiro", "Eren"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo " + elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  return (
    <>
      <Card>
        <CardBody title="Hola mundo" text="Este es el texto" />
        {contenido}
        <List data={list} onSelect={handleSelect} />
      </Card>
    </>
  );
}

export default App;
