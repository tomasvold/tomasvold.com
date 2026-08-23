import React from "react"
import "./index.css"
import logoPng from "./imports/HUSKU-X_black_and_white.png"

export default function App() {
  const landingUrl = "https://www.tomasvold.com/products/husku-x/index.html"
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
    landingUrl,
  )}`

  return (
    <div className="a4-page">
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "2px solid black",
          paddingBottom: "0.25rem",
        }}
      >
        <div
          style={{
            height: "160px",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img
            src={logoPng}
            alt="HUSKU-X — Backing Track System"
            style={{
              height: "240px",
              width: "auto",
              display: "block",
              marginTop: "-58px",
            }}
          />
        </div>

        {/* LIVE QR CODE */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={qrCodeUrl}
            alt="Setup QR Code"
            style={{
              width: "64px",
              height: "64px",
              display: "block",
              imageRendering: "pixelated",
            }}
          />
          <span
            className="mono"
            style={{
              fontSize: "0.55rem",
              fontWeight: "bold",
              display: "block",
              marginTop: "4px",
            }}
          >
          </span>
          <span style={{ fontSize: "0.5rem", color: "#555", marginTop: "8px", display: "block" }}>
            Version 1.0 &nbsp;2026-08-23
          </span>
          <span style={{ fontSize: "0.5rem", color: "#555", marginTop: "2px", display: "block" }}>
            More info on{" "}
            <a href="https://www.tomasvold.com/products/husku-x/index.html" style={{ color: "#555" }}>
              tomasvold.com/products/husku-x/index.html
            </a>
          </span>
        </div>
      </header>

      {/* 01. SIGNAL ROUTING */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            className="mono"
            style={{
              background: "black",
              color: "white",
              padding: "2px 6px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            01
          </span>
          <h2
            className="mono"
            style={{ fontSize: "1.1rem", margin: 0, letterSpacing: "1px" }}
          >
            HARDWARE SIGNAL FLOW (mono)
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #e0e0e0",
            padding: "0.6rem 1rem",
            borderRadius: "6px",
            background: "#fafafa",
          }}
        >
          {/* HUSKU-X + CABLE + GENERIC INTERFACE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              flex: 2,
            }}
          >
            <svg
              viewBox="0 0 540 230"
              width="100%"
              style={{ display: "block" }}
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
                </marker>
              </defs>

              {/* ─── HUSKU-X UNIT ─── */}
              {/* Brighter Main Body */}
              <rect
                x="60"
                y="50"
                width="120"
                height="160"
                rx="4"
                fill="#333"
                stroke="#000"
                strokeWidth="2"
              />
              <rect
                x="64"
                y="54"
                width="112"
                height="152"
                fill="none"
                stroke="#444"
                strokeWidth="1"
              />

              {/* NFC Tags */}
              <circle
                cx="90"
                cy="85"
                r="18"
                fill="#111"
                stroke="#000"
                strokeWidth="1"
              />
              <circle
                cx="150"
                cy="85"
                r="18"
                fill="#111"
                stroke="#000"
                strokeWidth="1"
              />
              {/* NFC left — tap to connect, callout goes upper-left */}
              <line x1="90" y1="67" x2="52" y2="26" stroke="#000" strokeWidth="0.8" />
              <polygon points="49,20 55,28 58,22" fill="#000" />
              <text x="48" y="8" textAnchor="end" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">1.TAP TO</text>
              <text x="48" y="18" textAnchor="end" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">CONNECT</text>
              {/* NFC right — tap to load UI, callout goes right (below cable zone) */}
              <line x1="168" y1="85" x2="190" y2="75" stroke="#000" strokeWidth="0.8" />
              <polygon points="196,72 188,71 190,78" fill="#000" />
              <text x="198" y="62" textAnchor="start" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">2.TAP TO</text>
              <text x="198" y="72" textAnchor="start" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">LOAD UI</text>

              {/* Top Fan (Middle) */}
              <circle
                cx="120"
                cy="135"
                r="22"
                fill="#151515"
                stroke="#111"
                strokeWidth="1"
              />
              <circle cx="120" cy="135" r="8" fill="#222" />
              {[0, 45, 90, 135].map((angle) => (
                <line
                  key={`fan-${angle}`}
                  x1="120"
                  y1="113"
                  x2="120"
                  y2="157"
                  stroke="#2a2a2a"
                  strokeWidth="1.5"
                  transform={`rotate(${angle} 120 135)`}
                />
              ))}

              {/* Logo Text */}
              <text
                x="120"
                y="190"
                textAnchor="middle"
                fill="#fff"
                fontSize="11"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                HUSKU-X
              </text>

              {/* Power Port (Right Edge, near bottom) */}
              <rect
                x="180"
                y="160"
                width="12"
                height="22"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect x="180" y="164" width="6" height="14" fill="#111" />
              <line
                x1="192"
                y1="171"
                x2="205"
                y2="171"
                stroke="#888"
                strokeWidth="0.75"
              />
              <text
                x="208"
                y="173"
                textAnchor="start"
                fill="#000"
                fontSize="11"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                USB-C 5V
              </text>

              {/* USB & LAN Ports (Back Panel / Top Edge) */}
              {/* Empty USB Port (Left) */}
              <rect
                x="72"
                y="38"
                width="20"
                height="12"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />

              {/* Active USB Port (Middle, Highlighted) */}
              <rect
                x="105"
                y="38"
                width="20"
                height="12"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="101"
                y="34"
                width="28"
                height="20"
                fill="none"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="2,2"
              />

              {/* LAN Port */}
              <rect
                x="135"
                y="38"
                width="26"
                height="12"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect x="143" y="38" width="10" height="4" fill="#111" />

              {/* ─── CABLE ROUTING ─── */}
              {/* Clean sweeping curve from the middle port to the interface */}
              <path
                d="M 115,38 C 115,0 180,-10 230,40 C 255,65 260,95 290,95"
                fill="none"
                stroke="#444"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 115,38 C 115,0 180,-10 230,40 C 255,65 260,95 290,95"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeDasharray="4,4"
                strokeLinecap="round"
              />

              {/* Plugs */}
              <rect
                x="107"
                y="26"
                width="16"
                height="12"
                rx="2"
                fill="#555"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="275"
                y="87"
                width="16"
                height="16"
                rx="2"
                fill="#555"
                stroke="#000"
                strokeWidth="1"
              />

              {/* ─── GENERIC AUDIO INTERFACE ─── */}
              <rect
                x="290"
                y="50"
                width="160"
                height="90"
                rx="8"
                fill="#f0f0f0"
                stroke="#000"
                strokeWidth="1.5"
              />
              <text
                x="370"
                y="40"
                textAnchor="middle"
                fill="#555"
                fontSize="11"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                2 CHANNEL AUDIO INTERFACE
              </text>

              {/* USB-B Port */}
              <rect
                x="286"
                y="87"
                width="10"
                height="16"
                fill="#ddd"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="296"
                y="87"
                width="12"
                height="16"
                rx="2"
                fill="#fff"
                stroke="#000"
                strokeWidth="1"
              />
              <rect x="299" y="92" width="6" height="8" fill="#ccc" />

              <text
                x="268"
                y="77"
                textAnchor="middle"
                fill="#000"
                fontSize="9"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
                transform="rotate(40, 230,90)"
              >
                POWER IN
              </text>

              {/* Left XLR Output */}
              <circle
                cx="345"
                cy="95"
                r="16"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
              />
              <circle cx="340" cy="90" r="2" fill="#000" />
              <circle cx="350" cy="90" r="2" fill="#000" />
              <circle cx="345" cy="100" r="2" fill="#000" />
              <text
                x="345"
                y="70"
                textAnchor="middle"
                fill="#000"
                fontSize="6"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                LEFT OUT
              </text>

              {/* Right XLR Output */}
              <circle
                cx="405"
                cy="95"
                r="16"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
              />
              <circle cx="400" cy="90" r="2" fill="#000" />
              <circle cx="410" cy="90" r="2" fill="#000" />
              <circle cx="405" cy="100" r="2" fill="#000" />
              <text
                x="405"
                y="70"
                textAnchor="middle"
                fill="#000"
                fontSize="6"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                RIGHT OUT
              </text>

              {/* ─── OUTPUT ARROWS TO HTML BOXES ─── */}
              {/* Left OUT → FOH / PA (bottom box) */}
              <path
                d="M 361,95 C 390,95 410,155 530,155"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
              {/* Right OUT → In-Ear Monitors (top box) */}
              <path
                d="M 421,95 C 450,95 460,55 530,55"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
            </svg>
          </div>

          {/* HTML Output Split Boxes */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: "2rem",
              flex: 0.8,
              marginLeft: "0.5rem",
              paddingTop: "0.5rem",
              paddingBottom: "1rem",
            }}
          >
            {/* Top Box -> IEMs */}
            <div
              className="hw-box"
              style={{ padding: "0.8rem", minWidth: "160px" }}
            >
              <h4 className="mono" style={{ margin: 0, fontSize: "0.85rem" }}>
                IN-EAR MONITORS
              </h4>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.75rem",
                  color: "#555",
                }}
              >
                Click track
              </p>
            </div>

            {/* Bottom Box -> FOH */}
            <div
              className="hw-box"
              style={{ padding: "0.8rem", minWidth: "160px" }}
            >
              <h4 className="mono" style={{ margin: 0, fontSize: "0.85rem" }}>
                FOH / PA SYSTEM
              </h4>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.75rem",
                  color: "#555",
                }}
              >
                Mono Backing Tracks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. SIGNAL ROUTING — STEREO */}
      <section
        style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            className="mono"
            style={{
              background: "black",
              color: "white",
              padding: "2px 6px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            02
          </span>
          <h2
            className="mono"
            style={{ fontSize: "1.1rem", margin: 0, letterSpacing: "1px" }}
          >
            HARDWARE SIGNAL FLOW (stereo)
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #e0e0e0",
            padding: "0.6rem 1rem",
            borderRadius: "6px",
            background: "#fafafa",
          }}
        >
          {/* HUSKU-X + CABLE + 4 CHANNEL INTERFACE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              flex: 2,
            }}
          >
            <svg
              viewBox="0 0 540 230"
              width="100%"
              style={{ display: "block" }}
            >
              <defs>
                <marker
                  id="arrow2"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
                </marker>
              </defs>

              {/* ─── HUSKU-X UNIT ─── */}
              <rect
                x="60"
                y="50"
                width="120"
                height="160"
                rx="4"
                fill="#333"
                stroke="#000"
                strokeWidth="2"
              />
              <rect
                x="64"
                y="54"
                width="112"
                height="152"
                fill="none"
                stroke="#444"
                strokeWidth="1"
              />
              <circle
                cx="90"
                cy="85"
                r="18"
                fill="#111"
                stroke="#000"
                strokeWidth="1"
              />
              <circle
                cx="150"
                cy="85"
                r="18"
                fill="#111"
                stroke="#000"
                strokeWidth="1"
              />
              {/* NFC left — tap to connect, callout goes upper-left */}
              <line x1="90" y1="67" x2="52" y2="26" stroke="#000" strokeWidth="0.8" />
              <polygon points="49,20 55,28 58,22" fill="#000" />
              <text x="48" y="8" textAnchor="end" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">1.TAP TO</text>
              <text x="48" y="18" textAnchor="end" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">CONNECT</text>
              {/* NFC right — tap to load UI, callout goes right (below cable zone) */}
              <line x1="168" y1="85" x2="190" y2="75" stroke="#000" strokeWidth="0.8" />½
              <polygon points="196,72 188,71 190,78" fill="#000" />
              <text x="198" y="62" textAnchor="start" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">2.TAP TO</text>
              <text x="198" y="72" textAnchor="start" fill="#000" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">LOAD UI</text>
              <circle
                cx="120"
                cy="135"
                r="22"
                fill="#151515"
                stroke="#111"
                strokeWidth="1"
              />
              <circle cx="120" cy="135" r="8" fill="#222" />
              {[0, 45, 90, 135].map((angle) => (
                <line
                  key={`fan2-${angle}`}
                  x1="120"
                  y1="113"
                  x2="120"
                  y2="157"
                  stroke="#2a2a2a"
                  strokeWidth="1.5"
                  transform={`rotate(${angle} 120 135)`}
                />
              ))}
              <text
                x="120"
                y="190"
                textAnchor="middle"
                fill="#fff"
                fontSize="11"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                HUSKU-X
              </text>
              <rect
                x="180"
                y="160"
                width="12"
                height="22"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect x="180" y="164" width="6" height="14" fill="#111" />
              <line
                x1="192"
                y1="171"
                x2="205"
                y2="171"
                stroke="#888"
                strokeWidth="0.75"
              />
              <text
                x="208"
                y="173"
                textAnchor="start"
                fill="#000"
                fontSize="11"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                USB-C 5V
              </text>

              {/* Back panel ports */}
              <rect
                x="72"
                y="38"
                width="20"
                height="12"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="105"
                y="38"
                width="20"
                height="12"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="101"
                y="34"
                width="28"
                height="20"
                fill="none"
                stroke="#000"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <rect
                x="135"
                y="38"
                width="26"
                height="12"
                fill="#222"
                stroke="#000"
                strokeWidth="1"
              />
              <rect x="143" y="38" width="10" height="4" fill="#111" />

              {/* ─── CABLE ─── */}
              <path
                d="M 115,38 C 115,0 180,-10 230,40 C 255,65 260,95 290,95"
                fill="none"
                stroke="#444"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M 115,38 C 115,0 180,-10 230,40 C 255,65 260,95 290,95"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeDasharray="4,4"
                strokeLinecap="round"
              />
              <rect
                x="107"
                y="26"
                width="16"
                height="12"
                rx="2"
                fill="#555"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="275"
                y="87"
                width="16"
                height="16"
                rx="2"
                fill="#555"
                stroke="#000"
                strokeWidth="1"
              />

              {/* ─── 4 CHANNEL AUDIO INTERFACE ─── */}
              <rect
                x="290"
                y="50"
                width="180"
                height="90"
                rx="8"
                fill="#f0f0f0"
                stroke="#000"
                strokeWidth="1.5"
              />
              <text
                x="380"
                y="40"
                textAnchor="middle"
                fill="#555"
                fontSize="10"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                4 CHANNEL AUDIO INTERFACE
              </text>

              {/* USB Port */}
              <rect
                x="286"
                y="87"
                width="10"
                height="16"
                fill="#ddd"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="296"
                y="87"
                width="12"
                height="16"
                rx="2"
                fill="#fff"
                stroke="#000"
                strokeWidth="1"
              />
              <rect x="299" y="92" width="6" height="8" fill="#ccc" />
              <text
                x="268"
                y="77"
                textAnchor="middle"
                fill="#000"
                fontSize="9"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
                transform="rotate(40, 230,90)"
              >
                POWER IN
              </text>

              {/* OUT 1 */}
              <circle
                cx="325"
                cy="95"
                r="14"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
              />
              <circle cx="320" cy="90" r="1.5" fill="#000" />
              <circle cx="330" cy="90" r="1.5" fill="#000" />
              <circle cx="325" cy="100" r="1.5" fill="#000" />
              <text
                x="325"
                y="70"
                textAnchor="middle"
                fill="#000"
                fontSize="6"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                OUT 1
              </text>

              {/* OUT 2 */}
              <circle
                cx="365"
                cy="95"
                r="14"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
              />
              <circle cx="360" cy="90" r="1.5" fill="#000" />
              <circle cx="370" cy="90" r="1.5" fill="#000" />
              <circle cx="365" cy="100" r="1.5" fill="#000" />
              <text
                x="365"
                y="70"
                textAnchor="middle"
                fill="#000"
                fontSize="6"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                OUT 2
              </text>

              {/* OUT 3 */}
              <circle
                cx="405"
                cy="95"
                r="14"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
              />
              <circle cx="400" cy="90" r="1.5" fill="#000" />
              <circle cx="410" cy="90" r="1.5" fill="#000" />
              <circle cx="405" cy="100" r="1.5" fill="#000" />
              <text
                x="405"
                y="70"
                textAnchor="middle"
                fill="#000"
                fontSize="6"
                fontFamily="'Space Mono', monospace"
                fontWeight="bold"
              >
                OUT 3
              </text>


              {/* ─── OUTPUT ARROWS ─── */}
              {/* OUT 1 & 2 → FOH / PA (bottom) */}
              <path
                d="M 339,95 C 350,95 380,165 530,165"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                markerEnd="url(#arrow2)"
              />
              <path
                d="M 379,95 C 390,95 410,145 530,145"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                markerEnd="url(#arrow2)"
              />

              {/* OUT 3 → In-Ear Monitors (top) */}
              <path
                d="M 419,95 C 440,95 450,55 530,55"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
                markerEnd="url(#arrow2)"
              />
            </svg>
          </div>

          {/* HTML Output Split Boxes */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: "2rem",
              flex: 0.8,
              marginLeft: "0.5rem",
              paddingTop: "0.5rem",
              paddingBottom: "1rem",
            }}
          >
            {/* Top Box -> IEMs */}
            <div
              className="hw-box"
              style={{ padding: "0.8rem", minWidth: "160px" }}
            >
              <h4 className="mono" style={{ margin: 0, fontSize: "0.85rem" }}>
                IN-EAR MONITORS
              </h4>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.75rem",
                  color: "#555",
                }}
              >
                Click track
              </p>
            </div>

            {/* Bottom Box -> FOH */}
            <div
              className="hw-box"
              style={{ padding: "0.8rem", minWidth: "160px" }}
            >
              <h4 className="mono" style={{ margin: 0, fontSize: "0.85rem" }}>
                FOH / PA SYSTEM
              </h4>
              <p
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "0.75rem",
                  color: "#555",
                }}
              >
                Stereo Backing Tracks
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* 03. CHECKLIST FOOTER */}
      <footer
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            className="mono"
            style={{
              background: "black",
              color: "white",
              padding: "2px 6px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            03
          </span>
          <h2
            className="mono"
            style={{ fontSize: "1.1rem", margin: 0, letterSpacing: "1px" }}
          >
            QUICK-START CHECKLIST
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          {[
            {
              step: "01",
              title: "POWER ON",
              desc: "Connect 5V USB-C power to the Husku-X unit. Wait 1-2 minutes for the system to boot.",
            },
            {
              step: "02",
              title: "CONNECT",
              desc: 'Tap the left NFC tag or connect your phone to the "Husku-X" Wi-Fi hotspot.',
            },
            {
              step: "03",
              title: "LOAD UI",
              desc: "Tap the right NFC tag and wait for the user interface to load in your browser.",
            },
            {
              step: "04",
              title: "PLAY",
              desc: "Select your active setlist in the browser and hit Play.",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                padding: "1rem",
                border: "2px solid black",
                borderRadius: "4px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.4rem",
                }}
              >
                <h4
                  className="mono"
                  style={{ fontSize: "0.9rem", margin: 0, fontWeight: "bold" }}
                >
                  {item.title}
                </h4>
                <span
                  className="mono"
                  style={{ fontSize: "0.7rem", color: "#888" }}
                >
                  {item.step}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.72rem",
                  margin: 0,
                  lineHeight: "1.45",
                  color: "#333",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
