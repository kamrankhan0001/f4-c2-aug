import React, { useState,useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetchuser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      console.log(data);
      setUser(data);
    };
    fetchuser();
  }, [id]);
  if(!user) return <div>Loading...</div>;
  return <div>
    <h1>{user?.firstName} {user?.lastName}</h1>
    <img src={user?.image} alt="user profile"/>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Username: {user?.username}</p>
      <p>BirthDate: {user?.birthDate}</p>
      <h2>Address</h2>
      <p>{user?.address?.address}, {user?.address?.city}, {user?.address?.state}, {user?.address?.postalCode}</p>
      <h2>Company</h2>
      <p>{user?.company?.name}</p>
      <p>{user?.company?.department}</p>
      <p>{user?.company?.title}</p>
  </div>;
};
// optional chaining
export default ProfilePage;