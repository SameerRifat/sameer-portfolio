import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, IconButton } from '@mui/material';
import Image from 'next/image'; // Import next/image
import Link from 'next/link';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import vidPoster from '@/public/projects/echoCart.png'; 
// import resPoster from '@/public/projects/resPoster.png'; 
// import vid from '@/public/projects/echoCart3.mp4';

const ProjectDetail = ({ open, handleClickOpen, handleClose, scroll, proj }) => {
    // const [open, setOpen] = React.useState(false);
    // const [scroll, setScroll] = React.useState('paper');

    // const handleClickOpen = (scrollType) => () => {
    //     setOpen(true);
    //     setScroll(scrollType);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                // scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth
                sx={{
                    '& .MuiDialog-paper': {
                        display: 'block'
                    }
                }}
            >
                <div className='flex justify-between items-center'>
                    <DialogTitle id="scroll-dialog-title">Demo</DialogTitle>
                    <IconButton onClick={handleClose} sx={{mr: '15px'}}>
                        <CloseOutlinedIcon fontSize='small'/>
                    </IconButton>
                </div>
                <DialogContent dividers={scroll === 'paper'}>
                    {/* <video width='100%' controls src={vid} /> */}
                    {/* <Image
                        src={vidPoster}
                        alt="Video Poster"
                        width={640} // Set the width of the video
                        height={360} // Set the height of the video
                    /> */}
                    <video
                        width="100%"
                        height="100%"
                        controls
                        poster="/echoCartPoster.png"
                        // poster={proj?.imageUrl.src}
                        // style={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'block', margin: 'auto' }}
                    >
                        <source src="/echoCart.mp4" type="video/mp4" />
                        {/* <source src={proj?.videoUrl} type="video/mp4" /> */}
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link href={proj?.url ? proj?.url : ''} target='_blank'
                        className='px-5 py-2 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-all flex items-center gap-1 mb-2'
                    >
                        Live Preview
                        {/* <WebOutlinedIcon /> */}
                        <LaunchOutlinedIcon fontSize='small' />
                    </Link>
                    {/* <Button color="error" onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ProjectDetail;
