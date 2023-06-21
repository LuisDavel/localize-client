import { api } from 'lib/axios';
import { signIn, useSession } from 'next-auth/react';

export default function Login() {
  const user = useSession();

  const handleClick = async () => {
    const data = await api.get('user');

    console.log(data);
  };
  return <button onClick={() => signIn('google')}>Sign in</button>;
}
