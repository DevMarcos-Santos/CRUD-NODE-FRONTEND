import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { updatePerson } from '../services/updatePerson';

interface Props {
  id: string;
  name: string;
  email: string;
}

export const Form = ({ id, name, email }: Props) => {
  const dataSchemaZod = z.object({
    name: z.string().min(3, 'Nome inválido'),
    email: z.string().email('E-mail inválido'),
  });

  type formSchema = z.infer<typeof dataSchemaZod>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(dataSchemaZod),
  });

  const onSubmit = (data: any) => {
    updatePerson(id, data.name, data.email);
  };

  return (
    <div className="bg-zinc-700 w-[500px] h-auto rounded-xl p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="text-white font-bold">Nome:</label>
          <input
            className="w-full rounded p-2 mt-2 bg-zinc-900 text-white"
            type="text"
            placeholder={name}
            {...register('name')}
          />
          <label
            style={{ fontSize: '13px' }}
            className="text-red-600 font-bold"
          >
            {errors.name?.message}
          </label>
        </div>
        <div className="mb-10   ">
          <label className="text-white font-bold">Email:</label>
          <input
            className="w-full rounded p-2 mt-2 bg-zinc-900 text-white"
            type="email"
            placeholder={email}
            {...register('email')}
          />
          <label
            style={{ fontSize: '13px' }}
            className="text-red-600 font-bold"
          >
            {errors.email?.message}
          </label>
        </div>
        <div>
          <button className="bg-emerald-600 w-full p-3 rounded text-white font-bold">
            Salvar
          </button>
        </div>
        <div className="mt-5">
          <Link to={'/'}>
            <button className="bg-red-600 w-full p-3 rounded text-white font-bold">
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
