import { useParams } from "react-router-dom";
import CollegePage from "../components/college/CollegePage";
import colleges from "../data/colleges/index";

export default function CollegeDetailPage() {
  const { id } = useParams();
  const data = colleges[id];

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: 80, fontFamily: "Segoe UI, sans-serif" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏫</div>
        <h2 style={{ color: "#111827" }}>College not found</h2>
        <p style={{ color: "#6b7280" }}>No college found with ID: <strong>{id}</strong></p>
      </div>
    );
  }

  return <CollegePage data={data} />;
}
