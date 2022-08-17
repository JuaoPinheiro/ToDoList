import styled from 'styled-components'
import { FaStar, FaTrash } from "react-icons/fa";


export const Container = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(52,52,52,1) 64%, rgba(99,99,99,1) 100%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 10px;

    button{
        background: #35a88d;
        border-radius: 5px;
        width: 130px;
        height: 40px;
        color: white;
        border: none;
        font-weight: 550;
        font-size: 15px;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.6;
        }
        
    }

    ul{
        padding: 0;
        margin-top: 30px;
    }
`

export const InputPrincipal = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    width: 342px;
    height: 40px;
    padding-left: 10px;
    margin-right: 30px;
    outline-color: #abffd3;
    font-size: 17px;
`

export const ListItem = styled.div`
    background: ${ props => props.isFinished ? '#95fa9b' : '#e4e4e4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 15px;
    font-weight: bold;

    li{
        list-style: none;
    }
`

export const Star = styled(FaStar)`
    cursor: pointer;
    color: #b5bb03;
    width: 50px;
`

export const Trash = styled(FaTrash)`
    cursor: pointer;
    color: red;
    width: 50px;
`

export const H3 = styled.h3`
    text-align: center;
`