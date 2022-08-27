import styled from "styled-components";
import { useEffect, useRef } from "react";

const DialogStyled = styled.dialog`
  border: none;
  padding: 0;
  background: transparent;
  ::backdrop {
    background-color: rgba(0, 0, 0, 0.44);
  }
`;

const Dialog = ({ children, open, onClick }) => {
  const ref = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const elem = ref.current;
    if (open) {
      elem?.showModal();
    } else {
      elem?.close();
    }
  }, [open]);

  const handleClick = (e) => {
    const backDropClick = e.target.contains(childRef.current);
    if (backDropClick) {
      onClick?.(e);
    }
  };

  return (
    <DialogStyled ref={ref} onClick={handleClick}>
      <div ref={childRef}>{children}</div>
    </DialogStyled>
  );
};

export default Dialog;
