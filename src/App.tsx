import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  //codigo jsx es sumamente parecido a HTML -> React.createElement
  const list: string[] = ["Goku", "Tanjiro", "Eren"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo " + elemento);
  };

  return (
    <>
      <Card>
        <CardBody title="Hola mundo" text="Este es el texto" />
        {list.length !== 0 && <List data={list} onSelect={handleSelect} />}

        <Button isLoading={isLoading} onClick={handleClick}>
          Hola mundo
        </Button>
      </Card>
    </>
  );
}

export default App;
