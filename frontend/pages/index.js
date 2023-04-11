import React from 'react';
import { useRouter} from 'next/router';
import { authService } from '../src/services/auth/authService';
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
          // onsubmit -> Controller (pega os dados do usuario e passa para um serviço)
          // authservice -> serviço
          event.preventDefault();
          authService.login({
            username:values.usuario,
            password:values.senha
          })
          .then(() =>{
            //router.push('/auth-page-static');
            router.push('/auth-page-ssr');
          })
          .catch(()=>{
              alert('Usuario ou senha invalidos');
          })         
          
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
