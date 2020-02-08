import {IUser} from "../types/types"

export async function getAllUsers () {
  let users:IUser[] =  [
    {
      email: "randomEmail1",
      firstName: "random",
      lastName:"Name 1",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 1",
      validated:"validated",
      coints:"123",
      country: "random country 1",
      subscriptionType: "random subscription 1",
      subscriptionDate:"12/11/2020",
      id: 1
    },
    {
      email: "randomEmail2",
      firstName: "random 1",
      lastName:"Name 2",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 2",
      validated:"validated",
      coints:"1233",
      country: "random country 2",
      subscriptionType: "random subscription 2",
      subscriptionDate:"12/11/2021",
      id: 2
    },
    {
      email: "randomEmail3",
      firstName: "random",
      lastName:"Name 3",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 3",
      validated:"validated",
      coints:"1234",
      country: "random country 3",
      subscriptionType: "random subscription 3",
      subscriptionDate:"12/11/2023",
      id: 3
    },
    {
      email: "randomEmail4",
      firstName: "random",
      lastName:"Name 4",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 4",
      validated:"validated",
      coints:"1235",
      country: "random country 4",
      subscriptionType: "random subscription 4",
      subscriptionDate:"12/11/2024",
      id: 4
    },
    {
      email: "randomEmail5",
      firstName: "random",
      lastName:"Name 5",
      type: ["random type 5","random type 5","random type 5"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 5",
      validated:"validated",
      coints:"1236",
      country: "random country 5",
      subscriptionType: "random subscription 5",
      subscriptionDate:"12/11/2025",
      id: 5
    },
    {
      email: "randomEmail6",
      firstName: "random",
      lastName:"Name 6",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 6",
      validated:"validated",
      coints:"1237",
      country: "random country 6",
      subscriptionType: "random subscription 6",
      subscriptionDate:"12/11/2026",
      id: 6
    },
    {
      email: "randomEmail7",
      firstName: "random",
      lastName:"Name 7",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 7",
      validated:"validated",
      coints:"1238",
      country: "random country 7",
      subscriptionType: "random subscription 7",
      subscriptionDate:"12/11/2027",
      id: 7
    },
    {
      email: "randomEmail8",
      firstName: "random",
      lastName:"Name 8",
      type: ["random type 1","random type 2","random type 3"],
      level:["level 1","level 2","level 3"],
      comapny: "random company 8",
      validated:"validated",
      coints:"1239",
      country: "random country 8",
      subscriptionType: "random subscription 8",
      subscriptionDate:"12/11/2028",
      id: 8
    },
  ];
  return users;
};
