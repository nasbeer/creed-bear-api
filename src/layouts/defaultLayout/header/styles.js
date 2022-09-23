import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 3rem;
  background: #f1f1f1;
  border-bottom: 1px solid #ccc;
  color: #333;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: auto;
  margin: 0 auto;
  position: relative;
  text-align: left;
  h1{
    line-height: 3rem;
    margin: 0;
    padding-left: 20px;
    font-size: 1rem;
    
    text-transform: uppercase;
  }
  .btn{
  position: absolute;
   top: 50%;
        transform: translateY(-50%);
      &.logout{        
        right: 10px;       
      }
      &.add{        
        right: 80px;       
      }
      &.home{        
        right: 165px;       
      }
  }
`;