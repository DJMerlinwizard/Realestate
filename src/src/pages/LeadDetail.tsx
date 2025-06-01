import { useParams } from "react-router-dom";

const LeadDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lead Detail Page</h1>
      <p>Showing data for lead ID: {id}</p>
    </div>
  );
};

export default LeadDetail;
