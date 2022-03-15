   
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment'
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import CommentForm from './CommentForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflowY: 'scroll',
    height: '90vh',
    p: 4,
  };

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transform: !expand ? 'scale(1)' : 'scale(1.15)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const PostCard = ({ data, users, comment }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <>
        <Card className="mt-2 mb-2 shadow-lg">
    
        {users.map((u) =>{
            if(u.id === data.author){
                return (
                    <CardHeader
                    key={u.id}
                    avatar={
                      <Avatar src={u.avatar_urls[96]} aria-label="recipe">
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={u.name}
                    subheader={moment(data.date).format('MMMM Do, YYYY, h:mma')}
                  />
                )
            }
        })}
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {data.title.rendered}
        </Typography>
        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton style={{'marginRight':'20px','color':'blue'}} onClick={handleOpen}>
          <ExpandMoreIcon style={{'marginRight':'5px'}}></ExpandMoreIcon>
          <h5 className="pt-2">More</h5>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{'color':'blue'}}
        >
        <CommentIcon style={{'marginRight':'8px'}}/>
          <h5 className="pt-2">Comment</h5>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {comment.map(com =>
                    <div>
                    <Divider />
                    <CardHeader
                    key={com.id}
                    avatar={
                      <Avatar src={com.author_avatar_urls[96]} aria-label="recipe">
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                      </IconButton>
                    }
                    title={com.author_name}
                    subheader={moment(com.date).format('MMMM Do, YYYY, h:mma')}
                  />
                  <div style={{'paddingLeft':'20px'}} dangerouslySetInnerHTML={{ __html: com.content.rendered }}></div>
                  </div>
                )}
                <div className='w-100'>    
                <Divider></Divider> 
                <CommentForm postId={data.id}></CommentForm>
                </div>           
        </CardContent>
      </Collapse>
    </Card>
    
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
        </Box>
      </Modal>
    </>
    );

                }
export default PostCard;