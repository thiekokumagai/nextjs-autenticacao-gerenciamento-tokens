import React from 'react';
import { useRouter} from 'next/router';
export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha: 'safepassword',
  });
  function HandleChange(event){
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) =>{
      return{
        ...currentValues,
        [fieldName]:fieldValue
      }
    });
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event)=>{
          event.preventDefault();
          router.push('/auth-page-ssr');
          //router.push('/auth-page-static');

        }}>
        <input
          placeholder="Usuário" name="usuario"
          defaultValue="omariosouto" value={values.usuario} onChange={HandleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          defaultValue="safepassword" value={values.senha} onChange={HandleChange}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
