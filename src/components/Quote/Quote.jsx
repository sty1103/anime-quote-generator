import styled from "styled-components";
const Quote = () => {
  const quote = {
    anime: "Naruto",
    character: "Pain",
    quote:
      "Because of the existence of love - sacrifice is born. As well as hate. Then one comprehends... one knows PAIN.",
  };
  return (
    <StyledQuote>
      <p>"{quote.quote}"</p>
      <h4>
        <span className="character">{quote.character}</span> <em>in</em>{" "}
        <span className="anime">{quote.anime}</span>
      </h4>
    </StyledQuote>
  );
};
const StyledQuote = styled.div`
  background: #dbece5;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    font-style: italic;
    margin-bottom: 3rem;
    background: #fff;
    border-radius: 0.5rem;
    padding: 3rem;
  }
  & > h4 {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 2px;
    span {
      padding: 5px 10px;
    }
    em {
      font-size: 1.2rem;
    }
    & > .character {
      background: #b8dace;
    }
    & > .anime {
      background: #f5e7e4;
    }
  }
`;
export default Quote;