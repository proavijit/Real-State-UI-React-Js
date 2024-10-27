import { listData } from "../../lib/dummydata"
import Card from "../card/Card"
import "./list.scss"


const List = () => {
  return (
    <div className="List">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List