import axios from "axios";

export const getNames =  async(url= `${process.env.REACT_APP_API}` , headers = {}) => {
  return await fetch( url , {
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      ...headers
  }
}).then(response => response.json());
};
// console.log(getNames())




export const createName = async( data , headers={}) => {
  return await fetch(`${process.env.REACT_APP_API}`, {
      method : 'POST',
      mode : 'cors',
      headers : {
          'Content-Type' : 'application/json',
          'accept' : 'application/json',
          ...headers
      },
      body : JSON.stringify(data)
  }).then(response => response.json()).catch(error => error);
};



// export const getNames = async () => {
//    return await axios.get(`${process.env.REACT_APP_API}`);
// }


// export const createName = async (name) => {
//   return await axios.post(`${process.env.REACT_APP_API}`, name);
// };

export const getName = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/${id}`);
};

export const removeName = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_API}/${id}`);
};

export const updateName = async (id, val ) => {
  return await axios.put(`${process.env.REACT_APP_API}/${id}`, val);
};




// //////////////////////////////////////////////////////////////////////////////////




// import axios from "axios";
// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



// export interface Contact {
//   "name": string,
//   "address": string,
//   "mobile": Number
// }


//  const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
//   tagTypes: ['Contact'],
//   endpoints:(builder) => ({
//     contacts: builder.query<Contact[], void>({
//       query: () => '/contacts',
//           providesTags: ['Contact']
//       })
//     })
//   })


// export const { useContactsQuery } = contactsApi



// // export const createName = async( data , headers={}) => {
// //   return await fetch(`${process.env.REACT_APP_API}`, {
// //       method : 'POST',
// //       mode : 'cors',
// //       headers : {
// //           'Content-Type' : 'application/json',
// //           'accept' : 'application/json',
// //           ...headers
// //       },
// //       body : JSON.stringify(data)
// //   }).then(response => response.json()).catch(error => error);
// // };



// // // export const getNames = async () => {
// // //    return await axios.get(`${process.env.REACT_APP_API}`);
// // // }


// // // export const createName = async (name) => {
// // //   return await axios.post(`${process.env.REACT_APP_API}`, name);
// // // };

// // export const getName = async (id) => {
// //   return await axios.get(`${process.env.REACT_APP_API}/${id}`);
// // };

// // export const removeName = async (id) => {
// //   return await axios.delete(`${process.env.REACT_APP_API}/${id}`);
// // };

// // export const updateName = async (id, val ) => {
// //   return await axios.put(`${process.env.REACT_APP_API}/${id}`, val);
// // };





// // export const { useContactsQuery } = contactsApi



