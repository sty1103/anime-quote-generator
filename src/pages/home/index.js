import { useRecoilValue } from "recoil";
import styled from "styled-components";
import AnimePills from "../../components/AnimePills/AnimePills";
import Pagination from "../../components/Pagination/Pagination";
import Quote from "../../components/Quote/Quote";
import { slicedAnimeTitles, animeTitles } from "../../store";

const Homepage = () => {
  const animes = useRecoilValue(animeTitles);
  const slicedAnimes = useRecoilValue(slicedAnimeTitles);
  const colors = ["#FAE1DA", "#E8C6AD", "#F2E2ED", "#D6EBE4", "#BFDCD0"];
  const generateColor = () => {
    const randNum = Math.floor(Math.random() * 5);
    return colors[randNum];
  };
  
  return (
    <StyledHomePage>
      <header>
        <h2>Anime Quote Generator</h2>
      </header>
      <main>
        <Quote />
        <div className="animes">
          <h3>All Animes</h3>
          {animes?.length ? (
            <p>Click on any anime to see a quote from it</p>
          ) : null}
          <div className="flex">
            {animes?.length ? (
              slicedAnimes?.map((anime) => (
                <div key={anime} style={{ margin: "0 1.3rem 1.3rem 0" }}>
                  <AnimePills anime={anime} color={generateColor()} />
                </div>
              ))
            ) : (
              <p className="nodata">No anime found 😞 </p>
            )}
          </div>
          {animes?.length > 50 ? (
            <div className="pagination">
              <Pagination listLength={animes?.length} />
            </div>
          ) : null}
        </div>
      </main>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  max-width: 80%;
  margin: 2rem auto;
  & header {
    margin-bottom: 3rem;
    & > h2 {
      font-weight: 400;
      letter-spacing: 3px;
      text-align: center;
    }
  }
  & .animes {
    margin-top: 4rem;
    & > h3 {
      font-weight: 400;
      font-size: 1.4rem;
      background: #ece4f1;
      width: max-content;
      padding: 0.3rem 1rem;
    }
    & > p {
      margin: 1.2rem 0;
    }
    & > .flex {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & > .nodata {
        margin: 2rem 0 4rem;
        font-size: 1.3rem;
      }
    }
    & .pagination {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0 4rem;
    }
  }
`;
export default Homepage;