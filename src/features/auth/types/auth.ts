type Credentials = { username: string; password: string };

type AccessToken = {
  value: string;
  expires: string;
};

export type { Credentials, AccessToken };
