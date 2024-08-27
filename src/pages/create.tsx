import Navbar from '../components/navbar';
import { FormCreate } from '../components/formCreate';

export const Create = () => {
  return (
    <div className="w-full h-screen overflow-auto bg-zinc-900">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <FormCreate />
      </div>
    </div>
  );
};
