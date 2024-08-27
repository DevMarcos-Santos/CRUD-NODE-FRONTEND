import { createContext, useEffect, useState } from 'react';
import ButtonDelete from './components/button-delete';
import ButtonEdit from './components/button-edit';
import Navbar from './components/navbar';
import axios from 'axios';
import { Person } from './types/person';
import { deletePerson } from './services/deletePerson';
import ButtonCreate from './components/button-create';

function App() {
  const [data, setData] = useState<Person[]>([]);
  const dataContext = createContext(data);

  useEffect(() => {
    axios.get('http://localhost:3000/persons').then((response) => {
      setData(response.data);
    });
  });

  return (
    <div className="w-full h-screen overflow-auto bg-zinc-900">
      <div>
        <Navbar />
      </div>
      <div className="w-full items-end flex justify-end">
        <div className='mr-10 mt-4'>
          <ButtonCreate onClick={() => window.location.href = '/create'}/>
        </div>
      </div>
      <div className="p-10">
        <div className="w-full bg-zinc-800 p-10">
          {data.map((item, key) => (
            <div
              key={item.id}
              className="text-white card h-auto mb-7 p-5 flex flex-column rounded"
            >
              <div className="w-full">
                <p>
                  <b>Nome: </b>
                  {item.name}
                </p>
                <p>
                  <b>Email: </b>
                  {item.email}
                </p>
              </div>
              <div className="flex justify-end h-full w-full">
                <div className="mr-2">
                  <ButtonEdit
                    onClick={() =>
                      (window.location.href = `/update/${item.id}`)
                    }
                  />
                </div>
                <div>
                  <ButtonDelete onClick={() => deletePerson(item.id)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
