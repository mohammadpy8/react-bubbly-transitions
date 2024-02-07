import { FC, useState } from "react";
import { localStorageServicesTypes } from "../../@types/localStorage/locaStorageTypes";
import { eventTypes } from "../../globalTypes";
 
const LastSection: FC = (): JSX.Element => {
  const [data, setData] = useState<localStorageServicesTypes>({
    date: "",
    id: 0,
    title: "",
  });

  const submitHandler = (event : eventTypes.eventFormTypes ) => {}

  return (
    <div>
      <form className="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">ttile</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            id="title"
            value={data.title}
          />
        </div>
        <div>
          <label htmlFor="id">id</label>
          <input
            type="number"
            name="id"
            placeholder="id"
            id="id"
            value={data.id}
          />
        </div>
        <div>
          <label htmlFor="data">date</label>
          <input
            type="date"
            name="date"
            placeholder="date"
            id="date"
            value={data.date}
          />
        </div>
        <button></button>
      </form>
    </div>
  );
};

export default LastSection;
