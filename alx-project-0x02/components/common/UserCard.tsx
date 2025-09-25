import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <>
      <div>
        <h6>{name}</h6>
        <h6>{email}</h6>
        <p>
          {address.street}, {address.suite}, {address.city} - {address.zipcode}
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
}

export default UserCard;
