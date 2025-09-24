import styled from "styled-components/native";

export default function LoginScreen(){
    // const dataRutas = [
    //     {name: "proyConversor", href:"/(proyConversor)"},
    //     {name: "teoria", href:"/(teoria)"}
    // ];

    // const renderItem = ({item})=>{
    //     return(
    //         <Link href={item.href}>
    //             <Title>{item.name}</Title>
    //         </Link>
    //     )
    // };

    return(
        <Container>
            <Title>Iniciar Sesión</Title>

            <StyledInput placeholder="Correo electrónico"/>

            <StyledInput placeholder="Contraseña"/>

            <LoginButton>
                <ButtonText>Ingresar</ButtonText>
            </LoginButton>
        </Container>
    )
}

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color: #f7e7ce;
`;
const Title = styled.Text`

`;
const StyledInput = styled.TextInput`
    background-color: white;
    border: 2px solid black;
    padding: 5px;
    margin-top: 10px;
`;
const LoginButton = styled.Text`
    
`;
const ButtonText = styled.Text`
    
`;