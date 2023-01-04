import { useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User</h1>
      <h3>ID : {userId}</h3>
      <h3>Name : {users[Number(userId) - 1].name}</h3>
    </div>
  );
}

export default User;
