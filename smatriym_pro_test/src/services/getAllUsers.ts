import {User} from "../types/types"

export async function getAllUsers () {
  let users:User[] =  [
    {
      email: "randomEmail1",
      name: "randomName 1",
      type: "random type 1",
      comapny: "random company 1",
      country: "random country 1",
      subscription: "random subscription 1",
      id: 1
    },
    {
        email: "randomEmail2",
        name: "randomName 2",
        type: "random type 2",
        comapny: "random company 2",
        country: "random country 2",
        subscription: "random subscription 2",
        id: 2
      },
      {
        email: "randomEmail3",
        name: "randomName 3",
        type: "random type 3",
        comapny: "random company 3",
        country: "random country 3",
        subscription: "random subscription 3",
        id: 3
      },
      {
        email: "randomEmail4",
        name: "randomName 4",
        type: "random type 4",
        comapny: "random company 4",
        country: "random country 4",
        subscription: "random subscription 4",
        id: 4
      },
      {
        email: "randomEmail5",
        name: "randomName 5",
        type: "random type 5",
        comapny: "random company 5",
        country: "random country 5",
        subscription: "random subscription 5",
        id: 5
      },
      {
        email: "randomEmail6",
        name: "randomName 6",
        type: "random type 6",
        comapny: "random company 6",
        country: "random country 6",
        subscription: "random subscription 6",
        id: 6
      },
      {
        email: "randomEmail7",
        name: "randomName 7",
        type: "random type 7",
        comapny: "random company 7",
        country: "random country 7",
        subscription: "random subscription 7",
        id: 7
      },
      {
        email: "randomEmail8",
        name: "randomName 8",
        type: "random type 8",
        comapny: "random company 8",
        country: "random country 8",
        subscription: "random subscription 8",
        id: 8
      }
  ];
  return users;
};
