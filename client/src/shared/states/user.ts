import { atom } from "jotai";

export interface User {
  access_token: string | null;
  username?: string;
  name?: string;
  email?: string;
  profile_img?: string;
  new_notification_available?: boolean;
}

export const userAtom = atom<User | null>(null);
