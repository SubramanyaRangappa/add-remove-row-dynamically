import React, { Component } from 'react';

const Leadwalnut = () => {
    return ( 
        <div>
            
        </div>
     );
}
 
export default Leadwalnut;



















// import React, { Component, useState } from 'react';
// import { FaStar } from 'react-icons/fa'

// const Leadwalnut = () => {
//     const [rating, setRating] = useState(null)
//     const [hover, setHover] = useState(null)
//     return (
//         <div>
//             {[...Array(5)].map((star, index) => {
//                 const ratingValue = index + 1
//                 return (
//                     <label key={index}>
//                         <input type="radio" name="rating" style={{ display: 'none' }}
//                             onClick={() => setRating(ratingValue)}
//                         />
//                         <FaStar size={100} style={{ cursor: 'pointer', transition: 'color 200ms' }}
//                             onMouseEnter={() => setHover(ratingValue)}
//                             onMouseLeave={() => setHover(null)}
//                             color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
//                         />
//                     </label>
//                 )
//             })}

//         </div>
//     );
// }

// export default Leadwalnut;























// import React, { Component, useReducer, useEffect } from 'react';
// import Axios from 'axios';




// const initialState = {
//     error :'',
//     posts:{},
//     loading : true
// }

// const reducer = (state,action) => {
//     switch( action.type ) {
//         case 'fetch_success' :
//             return {
//                 loading : false,
//                 error :'',
//                 posts : action.payload
//             }

//         case 'fetch_error' :
//             return {
//                 loading : false,
//                 posts :{},
//                 error : 'something went wrong'
//             }

//         case 'default' : return state
//     }
// }

// const Leadwalnut = () => {
//     const [ state, dispatch ] = useReducer(reducer, initialState)

//     useEffect(()=>{
//         Axios.get("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => {
//             dispatch({type : 'fetch_success', payload:response.data})
//         })
//         .catch(error => {
//             dispatch({type : 'fetch_error'})
//         })
//     })

//     return ( 
//         <div>
//             {state.loading ? 'loading' : state.posts.title}
//             {state.error ? state.error : null}
//         </div>
//      );
// }

// export default Leadwalnut;



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Leadwalnut = () => {
//     const [ loading, setLoading ] = useState(true)
//     const [ error, setError ] = useState('')
//     const [ post, setPost ] = useState({})

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response =>{
//             setLoading(false)
//             setPost(response.data)
//             setError('')
//         }).catch(error =>{
//                 setLoading(false)
//                 setError('something went wrong')
//                 setPost({})
//             }
//         )
//     })
//     return ( 
//         <div>
//             {loading ? 'loading' : post.title}
//             {error ? error : null}
//         </div>
//      );
// }

// export default Leadwalnut;






























// import React, { useState, useEffect, useReducer } from 'react';
// import axios from 'axios'

// const initialState = 0

// const reducer = (state, action ) => {
//     switch( action ) {
//         case 'increment' : return state + 1 
//         case 'decrement' : return state - 1
//         case 'reset' : return initialState
//         case 'default' : return state
//     }
// }


// const Leadwalnut = () => {
//     const [ count, dispatch ] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <span>Count {count}</span>
//             <button onClick = {()=>dispatch('increment')}>Increment</button>
//             <button onClick = {()=>dispatch('decrement')}>Decrement</button>
//             <button onClick = {()=>dispatch('reset')}>reset</button>
//         </div>
//     )
// }

// export default Leadwalnut;
