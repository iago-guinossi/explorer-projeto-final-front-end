import { Contentcontainer, HeaderContainer } from "./stles";

import {Input} from "../Input"

import CloseIcon from "../../assets/close.svg?react"
import Magnifier from "../../assets/magnifier.svg?react"

export function Menu({handleFuntion}){
    return(
        <>
        <HeaderContainer>
            <button onClick={() => handleFuntion()}><CloseIcon/></button>
            Menu
        </HeaderContainer>
        <Contentcontainer>
            <Input icon={Magnifier} placeholder="Busque por pratos ou ingredientes"></Input>
            <button>Sair</button>
        </Contentcontainer>
        </>

    )
}