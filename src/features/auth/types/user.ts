type User = {
  id: string;
  role: Role;
  username: string;
};

type Role = 'USER' | 'ADMIN';

export type { User, Role };
