import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { cookieRefreshExtractor } from 'src/common/extractors/cookie.extractor';
import { JwtPayload } from './access-token.strategy';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: cookieRefreshExtractor,
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      passReqToCallback: false,
    });
  }

  validate(req: Request, payload: any) {
    // const refreshToken = req.cookies['refreshToken'];
    console.log('попа', req, payload);
    // if (!refreshToken) {
    //   throw new UnauthorizedException();
    // }
    // return { ...payload, refreshToken };
  }

  // validate(payload: any) {
  //   return payload;
  // }
}
