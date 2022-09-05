import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
});

const AddPost = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title='Create Post' onClick={e => setOpen(true)} sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
                <Fab color='primary' aria-label='add'><Add /></Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={'auto'} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant='h6' color='#BEBEBE' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: 50, height: 50 }} src='https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png' />
                        <Typography fontWeight={500} variant='span'>John Doe</Typography>
                    </UserBox>

                    <TextField
                        id='standard-multiline-static'
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant='standard'
                        sx={{ width: '100%' }}
                    />

                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup fullWidth variant='contained' >
                        <Button sx={{ cursor: 'pointer' }}>Post</Button>
                        <Button sx={{ width: '100px', cursor: 'pointer' }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost