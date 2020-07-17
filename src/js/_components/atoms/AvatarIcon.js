import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { userDetails } from "js/services/userDetails";

export default function AvatarIcon({ props }) {
  const [username, setUsername] = useState("");
  useEffect(() => {
    async function innerFunction() {
      let response;
      await userDetails().then((res) => {
        response = res;
      });
      let firstName = response.data.email.split("@")[0];
      let firstChar = firstName.charAt(0).toUpperCase();
      let lastName = firstName.split(".")[1];
      if (lastName === undefined) {
        lastName = "";
      }

      let secondChar = lastName.charAt(0).toUpperCase();
      setUsername(firstChar + secondChar);
      return response.data.username;
    }
    innerFunction();
  }, []);
  return (
    <div data-testid="avatar">
      <Avatar style={{ width: props.spacing, height: props.spacing }}>
        {username}
      </Avatar>
    </div>
  );
}
