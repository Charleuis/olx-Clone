import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { postContext } from '../../store/PostsContext';
import { FirebaseContext } from '../../store/Context';
function View() {

  const[userDetails,setUserDetails] = useState();
  const {postDetails} = useContext(postContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
      const { userId } = postDetails;
      firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
        res.forEach((doc) => {
          console.log(doc.data());
          setUserDetails(doc.data());
        });
      });
   
  }, []);
  {console.log(userDetails)}

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
  <p>Seller details</p>
  {userDetails && (
    <React.Fragment>
      <p>{userDetails.userName}</p>
      <p>{userDetails.phone}</p>
    </React.Fragment>
  )}
</div>
      </div>
    </div>
  );
}
export default View;
