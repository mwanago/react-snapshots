import { FunctionComponent } from 'react';

interface Props {
  name: string;
  email: string;
}

export const UserProfile: FunctionComponent<Props> = ({ name, email }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};
