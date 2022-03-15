
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';


const CommentForm = ({ postId }) => {
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };


    const handleSubmit = async () => {
        const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments', {
            method: 'POST',
            body: JSON.stringify({ post: postId, author_name: name, content: comment}),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ZnN3ZDpmc3dkLWNtcw==',
            }
        })
        console.log(response)
        
            setComment('')
            setName('')
            if(alert('Comment success')){}
            else{window.location.reload()}; 
    };



    return (
        <div>
        <TextField
            style={{
                margin: '0.5rem 0'
            }}
            id="outlined-name"
            label="Name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            color="info"
        />
        <TextField
            id="outlined-comment"
            label="comment"
            variant="standard"
            value={comment}
            onChange={handleCommentChange}
            multiline
            fullWidth
            color="info"
        />
        <FormGroup>
            <Button disabled={comment === ''} variant="outlined" color='success' size='large' onClick={() => handleSubmit()}
                style={{
                    fontFamily: 'Poppins',
                    margin: '1rem 0',

                    padding: '0.2rem 1rem ',
                    borderRadius: '1rem',
                }}>Submit</Button>
        </FormGroup>
    </div>
)};

export default CommentForm;