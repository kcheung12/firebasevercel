import styled from 'styled-components';

const ListContainer = styled.ul`
    max-width:480px;
    margin: 0 auto;
`;
const ListItem = styled.li`
    padding:0.5rem 1rem;
    box-shadow: 0 0 2px 0 grey;
    display:flex;
    justify-content:space-between;
`;

const ListCopy = styled.p`
    font-size:14px;
    max-width:80%;
`

const ListControls = styled.div`

`;

const ListControl = styled.button`
    border:none;
    background:transparent;
    &:hover svg{
        color:#ed4747;
    }

    svg{
        color:rgba(0,0,0,0.5);
    }
`;

export {ListItem, ListContainer, ListCopy, ListControls, ListControl};