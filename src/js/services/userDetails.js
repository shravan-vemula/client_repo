import axios from 'axios';

export const userDetails =()=>{
    return axios.get(
        "https://bc3-json-mock.herokuapp.com/users/1"
        );
}

export const userNotificationSettings=()=>{
    return axios.get(
        "https://bc3-json-mock.herokuapp.com/usernotifications/1"
      );
}