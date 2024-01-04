import { Request } from 'express';

export const cookieExtractor = (req: Request): string | null => {
  if (req && req.cookies) {
    return req.cookies['jwt'];
  }
  return null;
};

export const cookieRefreshExtractor = (req: Request): string | null => {
  if (req && req.cookies) {
    return req.cookies['refreshToken'];
  }
  return null;
};
