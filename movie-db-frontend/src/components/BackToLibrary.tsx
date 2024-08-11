import { useNavigate } from "react-router-dom";

export const BackToLibrary = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/library");
  };

  return (
    <div className='filter-box'>
      <button className='filter-box-btn' onClick={handleRedirect}>
        {"<"} Back to library
      </button>

      <h2>Search Relusts</h2>
    </div>
  );
};
