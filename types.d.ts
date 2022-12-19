interface GoogleOauthReturnType {
  aud?: string;
  azp?: string;
  email?: string;
  email_verified?: boolean;
  exp?: number;
  given_name?: strings;
  iat?: number;
  iss?: string; //accounts.google.com"
  jti?: strnd;
  name?: string;
  nbf?: number;
  picture?: string;
  sub?: string;
}

export interface IEvents {
  title: string!;
  description: string!;
  label: string!;
  day: string!;
  id: string!;
}
