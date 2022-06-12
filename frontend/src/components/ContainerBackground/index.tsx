import * as Styled from './styled';

const ContainerBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styled.ContainerBackground>
      <Styled.CentralCard>
        {children}
      </Styled.CentralCard>
    </Styled.ContainerBackground>
  );
};

export default ContainerBackground;