'use client';

import { useSignUpQuery } from '@/hooks/query/login';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { data } = useSignUpQuery(code ?? '');
  const pageUrlBeforeClickLoginButton = sessionStorage.getItem('pageUrlBeforeClickLoginButton');

  if (data !== undefined && pageUrlBeforeClickLoginButton !== null) {
    sessionStorage.setItem('refreshToken', data.refreshToken);
    router.push(pageUrlBeforeClickLoginButton);
  }

  return <>로그인중...</>;
}
