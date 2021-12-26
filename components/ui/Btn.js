import styled from "styled-components";

const Btn = styled.button`
  font-size: 1rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.color};
  border: none;
  padding: 0.25em 1em;
  border-radius: 2px;

  position: relative;
  background: none;
  margin-right: 3em;
  border: 1px solid transparent;
  transition: 0.4s ease-out;
  border-radius: 12px;

  :hover {
    border: 1px solid #f3f3f3;
    box-shadow: -10px -10px 15px #f9f9f9 inset;
  }
  /* brillo inferior */
  ::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: gray;
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.15;
  }
  /* subrayado */
  ::after {
    content: "";
    position: absolute;
    right: 50%;
    top: 50%;
    width: 0%;
    height: 0%;
    background: ${(props) => props.sub};
    opacity: 0;
    transition: 0.3s;
    border-radius: 50%;
  }

  :hover::before {
    opacity: 0.5;
  }
  :hover::after {
    right: 0%;
    top: 10%;
    opacity: 0.12;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transform: rotate(-15deg);
  }
`;

const Button = ({ children }) => {
  const mainColor = "black";

  return <Btn>{children}</Btn>;
};

export default Button;
