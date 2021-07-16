import React,{useState} from 'react'
import Icon from "./Components/Icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Button,Container,Row,CardBody,Card,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import "./style.css"

const tictacArray = new Array(9).fill("")

const App = () => {
    let [isCross,setIsCross] = useState(true)
    let [winMessage,setWinMessage] = useState("cross")
    
    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictacArray.fill("")
    }

    const findWinner=()=>{
        if(tictacArray[0] === tictacArray[1] && tictacArray[0]===tictacArray[2] && tictacArray[0]!=="" ){
            setWinMessage(tictacArray[0] + " has won!")
    }
        else if (tictacArray[3] === tictacArray[4] && tictacArray[3]===tictacArray[5] && tictacArray[3]!==""){
            setWinMessage(tictacArray[3] + " has won!")
    }
        else if (tictacArray[6] === tictacArray[7] && tictacArray[6]===tictacArray[8] && tictacArray[6]!==""){
            setWinMessage(tictacArray[6] + " has won!")
    }
        else if (tictacArray[0] === tictacArray[3] && tictacArray[0]===tictacArray[6] && tictacArray[0]!==""){
            setWinMessage(tictacArray[0] + " has won!")
    }
        else if (tictacArray[1] === tictacArray[4] && tictacArray[1]===tictacArray[7] && tictacArray[1]!==""){
            setWinMessage(tictacArray[1] + " has won!")
    }
        else if (tictacArray[2] === tictacArray[5] && tictacArray[2]===tictacArray[8] && tictacArray[2]!==""){
            setWinMessage(tictacArray[2] + " has won!")
    }
        else if (tictacArray[2] === tictacArray[4] && tictacArray[2]===tictacArray[6] && tictacArray[2]!==""){
            setWinMessage(tictacArray[2] + " has won!")
    }
        else if (tictacArray[0] === tictacArray[4] && tictacArray[0]===tictacArray[8] && tictacArray[0]!==""){
            setWinMessage(tictacArray[0] + " has won!")
    }    
       else if (tictacArray[0]!=="" && tictacArray[1]!=="" && tictacArray[2]!=="" && tictacArray[3]!=="" 
       && tictacArray[4]!=="" && tictacArray[5]!=="" && tictacArray[6]!=="" && tictacArray[7]!=="" && tictacArray[8]!==""
       && tictacArray[9]!==""){setWinMessage("Match Draw")}
        
           
    }

    const checkWinner=(index)=>{
        if(winMessage){
            return toast("Game has already ended !",{type:"success"})
        }
        if(tictacArray[index] === ""){
            tictacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else{
            return toast("This is already occupied",{type:"error"})
        }
        findWinner()
    }

    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center"> </ToastContainer>
            <Row>

                <Col md={6} className="offset-md-3"> 
                    {
                        winMessage ? (
                            <div>
                            <h1 className="text-center">{winMessage}</h1>
                            <Button onClick= {playAgain}><center> Play Again </center></Button>
                            </div>
                        ):(
                           <h1>
                               {isCross ? "Cross's turn" : "Circle's turn"}
                           </h1> 
                        )
                    }    

                </Col>

                <div className="grid">
                    {tictacArray.map((value,index)=>(
                        <Card onClick={()=>checkWinner(index)}>
                            <CardBody className="box">
                                <Icon choice={tictacArray[index]}/>
                            </CardBody>
                        </Card>
                    ))}

                </div>

            </Row>

        </Container>
)  
}

export default App