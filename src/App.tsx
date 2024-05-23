import Card, { CardBody } from "./components/Card";

function App() {
  //codigo jsx es sumamente parecido a HTML -> React.createElement
  return (
    <>
      <Card>
        <CardBody title="Hola mundo" text="Este es el texto" />
      </Card>
    </>
  );
}

export default App;
