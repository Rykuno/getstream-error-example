import NextLink from "next/link";

export const Nav = ({ children }) => {
  return (
    <div>
      <div style={{ margin: "20px", width: "100vw" }}>
        <div className="navLink">
          <NextLink href="/user/user1">User 1</NextLink>
        </div>
        <div className="navLink">
          <NextLink href="/user/user2">User 2</NextLink>
        </div>
        <div className="navLink">
          <NextLink href="/user/user3">User 3</NextLink>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
