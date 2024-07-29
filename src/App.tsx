import { styled } from "styled-components";
import Table from "./components/table";
import { tableData } from "./config";
import "./styles/index.css";
const MainContainer = styled.main`
  display: flex;
  margin: 4rem;
  flex-direction: column;
`;

const SectionContainer = styled.section`
  position: relative;
`;

function App() {
  return (
    <MainContainer>
      <SectionContainer>
        <Table tableData={tableData} />
      </SectionContainer>
    </MainContainer>
  );
}

export default App;
