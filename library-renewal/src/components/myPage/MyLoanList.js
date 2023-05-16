import styled from 'styled-components';

const Container = styled.div`
  .loan-list {
    margin-bottom: 2rem;
  }
  table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid black;
  }
`;

const ExtensionBtn = styled.button`
  display: block;
  margin: auto;
  width: 5rem;
  height: 2rem;
  background-color: #4859a6;
  color: #ffffff;
  border-radius: 5px;
`;

const MyLoanList = () => {
  return (
    <Container>
      <h3>총 10건</h3>
      <div className="loan-list">
        <table>
          <tbody>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">No.</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">저자</td>
              <td className="column-title">대출일</td>
              <td className="column-title">반납예정일</td>
              <td className="column-title">연장횟수</td>
              <td className="column-title">반납유형</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">1</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">1</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">3</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">4</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">5</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">6</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">7</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">8</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">9</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
            <tr>
              <td className="column-title">□</td>
              <td className="column-title">10</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-12</td>
              <td className="column-title">2023-05-26</td>
              <td className="column-title">0</td>
              <td className="column-title">정상반납</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExtensionBtn>
        <h3>대출연장</h3>
      </ExtensionBtn>
    </Container>
  );
};

export default MyLoanList;
