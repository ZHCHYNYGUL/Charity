import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [location, setLocation] = useState('')
    const [link, setLink] = useState('')
    const [date, setDate] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleSubmit = async (e) => {

        e.preventDefault()
        const postData = {
            title,
            subtitle,
            location,
            link,
            date
        }
        try {
            await axios.post('http://localhost:5000/posts/create',postData)
            toast.success('Вы создали пост!')
        }
        catch (err) {
            toast.error(err.response.data.message)

        }
    }
    const handleChange = (newValue) => {
        setDate(newValue);
    };
    return (
        <Box
            component="form"
            sx={{
                'display': 'flex',
                "flexDirection": "column",
                "alignItems": "center",
                "border": "3px solid #008CBA",
                borderRadius: "10px",
                "width": "55%",
                margin: "0 auto",
                '& > :not(style)': { m: 3, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField id="standard-basic" label="Заголовок" variant="standard" onChange={(e) => { setTitle(e.target.value) }} value={title} />
            <TextField id="standard-basic" label="Описание" variant="standard" onChange={(e) => { setSubtitle(e.target.value) }} value={subtitle} />
            <TextField id="standard-basic" label="Локация" variant="standard" onChange={(e) => { setLocation(e.target.value) }} value={location} />
            <TextField id="standard-basic" label="Перейти" variant="standard" onChange={(e) => { setLink(e.target.value) }} value={link} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Дата и время"
                    value={date}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Button variant="outlined" type="submit">Создать пост</Button>
        </Box>
    );
}


export default CreatePost;