'use client';

import { useLoginRedirectCodeQuery } from '@/hooks/query/login';
import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();
  const { data: redirectUri } = useLoginRedirectCodeQuery();

  const redirectToLoginPage = () => {
    if (redirectUri === undefined) return;

    sessionStorage.setItem('pageUrlBeforeClickLoginButton', window.location.href);
    router.push(redirectUri);
  };

  return <span onClick={redirectToLoginPage}>로그인</span>;
}
