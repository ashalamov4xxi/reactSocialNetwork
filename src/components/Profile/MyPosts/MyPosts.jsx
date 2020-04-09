import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utilites/Validation/Validation";
import {Textarea} from "../../common/FormControl/FormControl";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addNewMessageProfileChange = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
           <AddMessagePostFormRedux onSubmit={addNewMessageProfileChange}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddMessagePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMessagePostFormRedux = reduxForm({form: "profileAddMessageForm"})(AddMessagePostForm)

export default MyPosts;