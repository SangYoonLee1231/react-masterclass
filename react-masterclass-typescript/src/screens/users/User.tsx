import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();

  return (
    <div>
      <div>
        <h1>User</h1>
        <h3>ID : {userId}</h3>
        <h3>Name : {users[Number(userId) - 1].name}</h3>
      </div>
      <hr />
      <Outlet />
      <Link to="followers">See Followers</Link>
    </div>
  );
}

export default User;
