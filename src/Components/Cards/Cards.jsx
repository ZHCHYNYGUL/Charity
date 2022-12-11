
import './Cards.css'
import styled from 'styled-components';
import hands from '../../assets/people.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Card = styled.div`
box-shadow:0 2px 20px $clr-gray300;
display:flex;
align-items:center;
justify-content:space-between;
cursor:pointer;
transition:transform 200ms ease-in;
background:#fff;
margin-bottom:30px;`
const CardBody = styled.div`
margin:10px;
border-radius:$radius;
background:#fff;
width:23%;
padding-bottom:20px;
box-shadow: 0rem 0rem 2rem 0.1rem #e0e2e4;
`
const CardImg = styled.div`
width:100%;
height:250px;
object-fit:cover;
`
const CardTitle = styled.h3`
padding:1rem;
`
const CardDescr = styled.p`
margin: 10px 1rem;
`
const CardLink = styled.a`
font-family:inherit;
font-size:1rem;
color:black;
text-decoration:underline;
margin:1rem;
&:hover{
color:#55ACEE;
}
`
const Cards = () => {
    return (
        <>
            <div className="content-container">
                <div className="text-descr">
                    <img src={hands} alt="" className='text-img' />
                    <h2 className='text-title'>Присоединяйтесь к нам</h2>
                    <hr />
                    <p className='text-subtitle'>Вы профессионал в своём деле? Вы всегда ищете новые пути? Вы действительно всей душой желаете, чтобы в жизни наших детей были долговременные перемены к лучшему?
                        Если вы отвечаете на все эти вопросы «ДА!» – вы наш человек. Организация по безвозмездной помощи заинтересована в сотрудничестве с вами.</p>
                </div>
            </div>
            <Card>
                <CardBody>
                    <CardImg><img src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg?w=2000" alt="" /></CardImg>
                    <CardTitle>Что мы делаем?</CardTitle>
                    <CardDescr>Узнайте, как наша организация продвигает все идеи</CardDescr>
                    <CardLink>Читать дальше </CardLink>
                </CardBody>
                <CardBody>
                    <CardImg> <img src="https://img.freepik.com/premium-vector/disabilities-love-together-each-other-support-movement_77271-509.jpg?w=2000" alt="" /></CardImg>

                    <CardTitle>Что мы делаем?</CardTitle>
                    <CardDescr>Узнайте, как наша организация продвигает все идеи</CardDescr>
                    <CardLink>Читать дальше </CardLink>
                </CardBody>
                <CardBody>
                    <CardImg><img src="https://media.istockphoto.com/vectors/stylized-volunteers-help-charity-and-sharing-hope-vector-id1253505221?k=20&m=1253505221&s=612x612&w=0&h=XHgV_NQndRPFILhDz5_cawsgPK1879jW5U5b5q9kc0s=" alt="" /></CardImg>
                    <CardTitle>Что мы делаем?</CardTitle>
                    <CardDescr>Узнайте, как наша организация продвигает все идеи</CardDescr>
                    <CardLink>Читать дальше </CardLink>
                </CardBody>
                <CardBody>
                    <CardImg> <img src="https://static.wixstatic.com/media/8f335b_d1d02a3404934e3f83076c4fd8f7a85d~mv2.png/v1/fill/w_1000,h_690,al_c,usm_0.66_1.00_0.01/8f335b_d1d02a3404934e3f83076c4fd8f7a85d~mv2.png" alt="" /></CardImg>
                    <CardTitle>Что мы делаем?</CardTitle>
                    <CardDescr>Узнайте, как наша организация продвигает все идеи</CardDescr>
                    <CardLink>Читать дальше </CardLink>
                </CardBody>
            </Card>
        </>
    );
};

export default Cards;