import { Contentcontainer, HeaderContainer } from "./stles";

import {Input} from "../Input"

import MenuIcon from "../../assets/menu.svg?react"
import Magnifier from "../../assets/magnifier.svg?react"

export function Menu(){
    return(
        <>
        <HeaderContainer>
            <button><MenuIcon/></button>
            Menu
        </HeaderContainer>
        <Contentcontainer>
            <Input icon={Magnifier} placeholder="Busque por pratos ou ingredientes"></Input>
            <button>Sair</button>
        </Contentcontainer>
        </>

    )
}