export default function Profiles({ data }) {
  return (
    <div>
      This is Profiles Page: <br />
      <div>
        {data.map((user) => (
          <div>
            <span>ID: {user.id};</span> <span>Name :{user.name};</span>{" "}
            <span>Age: {user.age};</span>
          </div>
        ))}
      </div>
    </div>
  );
}
