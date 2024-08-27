import { useParams } from 'react-router-dom';
import { Form } from '../components/form';
import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Update = () => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/persons/${id}`).then((response) => {
      setName(response.data[0]['name']);
      setEmail(response.data[0]['email']);
    });
  }, [name, email]);

  return (
    <div className="w-full h-screen overflow-auto bg-zinc-900">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <Form id={id as string} name={name} email={email} />
      </div>
    </div>
  );
};
