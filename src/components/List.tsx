import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li onClick={handleClick} key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
