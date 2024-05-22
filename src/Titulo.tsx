function Titulo() {
  //codigo jsx es sumamente parecido a HTML -> React.createElement
  const name = "Hanier";
  if (name) {
    return <h1>Hola {name}</h1>;
  } else {
    return <h1>Hola mundo</h1>;
  }
}

export default Titulo;
