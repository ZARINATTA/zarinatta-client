import { API_END_POINT } from '@/static/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useLoginQuery = () =>
  useQuery({
    queryKey: ['loginQuery'],
    queryFn: () => {},
  });

export const useLogoutQuery = () =>
  useQuery({
    queryKey: ['logout'],
    queryFn: () => {},
  });

export const useLoginRedirectCodeQuery = () =>
  useQuery({
    queryKey: ['loginRedirectQuery'],
    queryFn: async () => {
      const response = await fetch(`${API_END_POINT}/v1/auth/redirect`);
      const value = await response.json();

      return value.redirectUri;
    },
  });

export const useSignUpQuery = (code: string) =>
  useQuery({
    queryKey: ['signupQuery'],
    queryFn: async () =>
      (await axios.get<{ refreshToken: string }>(`${API_END_POINT}/v1/auth/signup?code=${code}`))
        .data,
  });
