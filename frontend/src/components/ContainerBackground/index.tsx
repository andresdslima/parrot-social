import * as Styled from './styled';

const ContainerBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styled.ContainerBackground>
        {children}
    </Styled.ContainerBackground>
  );
};

export default ContainerBackground;