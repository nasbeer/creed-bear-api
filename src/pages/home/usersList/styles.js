import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px 0;
  
  border-bottom: 1px dotted #ccc;
  position: relative;
  &>div{
    display: inline-block;
  }
  button,a{
    position:  absolute;
    top: 50%;
    transform: translateY(-50%);
    &.delete{
      right: 0px;
      background:#e81500;
      border:1px solid #e81500;
      color:#fff;
    }
    &.edit{
      right: 70px;
      background:#00ac69;
      border:1px solid #00ac69;
      color:#fff;
    }
  }
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f2f2f2;
  float: left;
  
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit:cover;
    box-shadow:2px 2px 2px 2px #ccc;

  }
`;
export const UserInfo = styled.div`
  width:calc(100% - 60px) ;
  height: 60px;
  padding: 0 20px;
  float: left;
  &>div{
    margin: 2px 0;
  }
  &.load_more{
    margin-top:5px;
    margin-bottom:5px;
   
  }
`;
export const Text = styled.div`
  font-size: 1rem;
  color : ${props => props.color === 'firstname' ? '#000' : '#777' };
  font-weight : ${props => props.color === 'firstname' ? '600' : '700' };
`;