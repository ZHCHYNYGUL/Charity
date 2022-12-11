import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../../redux/postsSlice'
import axios from 'axios';
import Post from '../../Components/Post/Post';
import './Home.css'
const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border: 1px solid #000;
  background-image: url("https://sjmagazine.net/wp-content/uploads/cache/2017/09/volunteer/1812171150.jpg");
  width: 100%;
  height:100vh;
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`
const Info = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Infotitle = styled.h1`
font-size: 60px;
font-style: normal;
    font-stretch: normal;
    line-height: 60px;
    letter-spacing: -0.4px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    color: #fff`
const Infodescr = styled.p`
font-size: 20px;
font-style: normal;
text-align: center;
font-weight: normal;
line-height: 26px;
letter-spacing: 0.015em;
margin-top: 10px;
max-width: 905px;
color: #fff;
`
const InfoBtns = styled.div`
margin-top:10px;
justify-content:center;
align-items:center;
`
const InfoBtn = styled.button`
padding: 10px 20px;
margin-right:10px ;
text-align: center;
font-size: 16px;
background-color: white; 
color: black; 
border: 2px solid #008CBA;
cursor: pointer;
&:hover{
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
`
const getPosts = () => {
    return axios.get('http://localhost:5000/posts/getall')
}
const Home = () => {
    const posts = useSelector(s => s.posts.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        getPosts().then((posts) => { dispatch(getAllPosts(posts.data)) })

    }, [])
    console.log(posts)
    return (
        <>
            <Content>
                <Info>
                    <Infotitle>Платформа для добрых дел</Infotitle>
                    <Infodescr>Вместе мы можем сделать наш Мир лучше. Каждое,совершенное доброе дело является лучиком света в нашем Мире</Infodescr>
                    <InfoBtns>
                        <Link to='/createpost'><InfoBtn>Создать пост</InfoBtn></Link>
                    </InfoBtns>
                </Info>
            </Content>
            <div>
                {posts.map((post)=>{
                    return <Post post={post}/>
                })}
            </div>
        </>

    );
};

export default Home;