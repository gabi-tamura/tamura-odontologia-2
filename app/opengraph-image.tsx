import { ImageResponse } from "next/og";
export const alt = "Tamura Odontologia — Bragança Paulista";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "#102d3a", color: "#fff" }}>
      <div style={{ fontSize: 28, color: "#8ac2dc", marginBottom: 32 }}>BRAGANÇA PAULISTA · SP</div>
      <div style={{ fontSize: 78, fontWeight: 700 }}>Tamura Odontologia</div>
      <div style={{ fontSize: 32, marginTop: 32 }}>Conheça a clínica e entre em contato</div>
    </div>, size,
  );
}
