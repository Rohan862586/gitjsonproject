

// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { deleting , edit, count } from '../reducer/CompoSlice'


// const Tableview = (props) => {

//   const dispatch = useDispatch();
//   let counts = 2;


//   // dispatch(count(counts))
//   // console.log('==============> '+ counts)

//   const valcount = () => {
//     // console.log(counts++)
//     dispatch(count(counts++))
//   }

//     return (

//       <tbody>      
//       {
//         props.names && props.names.map((names) => (            
//          <tr>
//          { valcount() }
//        <th scope="row" >{names.id}</th>
//        {/* <th scope="row">{ counter += 1}</th> */}
//        <td>{names.name}</td>
//        <td>{names.address}</td>
//        <td>{names.mobile}</td>
//        <td><a onClick={() => {
//             props.setUpdate(true)
//          dispatch(edit(names))
//          }}>Edit</a></td>
//        <td><a onClick={() => {
//          dispatch(deleting(names.id))
//          }}>Delete</a></td>
//         </tr>
//        ))}
//        </tbody>

//   )
// }

// export default Tableview


///////////////////////////////////////////////////////////////////////////////////





import React from 'react'
import { useDispatch } from 'react-redux'
import { deleting , edit, count } from '../reducer/CompoSlice'


const Tableview = (props) => {

  const dispatch = useDispatch();
  let counts = 2;


  // dispatch(count(counts))
  // console.log('==============> '+ counts)

  const valcount = () => {
    // console.log(counts++)
    dispatch(count(counts++))
  }

    return (

      <tbody>      
      {
        props.names && props.names.map((names) => (            
         <tr>
         { valcount() }
       <th scope="row" >{names.id}</th>
       {/* <th scope="row">{ counter += 1}</th> */}
       <td>{names.name}</td>
       <td>{names.address}</td>
       <td>{names.mobile}</td>
       <td><a onClick={() => {
            props.setUpdate(true)
         dispatch(edit(names))
         }}>Edit</a></td>
       <td><a onClick={() => {
         dispatch(deleting(names.id))
         }}>Delete</a></td>
        </tr>
       ))}
       </tbody>

  )
}

export default Tableview


