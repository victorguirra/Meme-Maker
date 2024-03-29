import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const Templates = styled.div`
    width:100%;
    height:90px;

    background-color:#EEE;
    border-radius:8px;
    
    overflow-y: auto;
    padding:0 15px;
    
    display:flex;
    align-items:center;
    margin-bottom:30px;

    ::-webkit-scrollbar{
        width:20px;
    }

    ::-webkit-scrollbar-thumb{
        width:20px;
        background-color:#4395D8;
        border-radius:10px;
    }
    ::-webkit-scrollbar-track{
        background-color:#DBDBDB;
    }

    button{
        background:transparent;
        margin-right:10px;
        border: 2px solid transparent;
        
        &.selected{
            border-color:#4395D8;
        }
        
        img{
            width:53px;
            height:53px;
        }
    }
`;

export const Form = styled.form`
    input{
        width:100%;
        height:40px;
        border-radius:8px;
        border:1px solid #DBDBDB;
        padding:0 15px;
        font-size:14px;
        margin-bottom:10px;
    }
`;