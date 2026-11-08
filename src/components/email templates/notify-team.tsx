import React from "react";

interface NotifyTeamProps {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const cell: React.CSSProperties = {
  padding: "10px 0",
  borderBottom: "1px solid #D9D4C7",
};
const label: React.CSSProperties = {
  color: "#5A574E",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};
const value: React.CSSProperties = {
  color: "#15140F",
  fontSize: "16px",
};

export const NotifyTeam = ({ name, email, topic, message }: NotifyTeamProps) => {
  return (
    <div
      style={{
        margin: 0,
        padding: "24px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#F2EFE8",
        color: "#15140F",
        lineHeight: 1.6,
      }}
    >
      <table
        role="presentation"
        cellSpacing={0}
        cellPadding={0}
        width="100%"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                background: "#FFFFFF",
                border: "1px solid #D9D4C7",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <h1 style={{ margin: "0 0 4px 0", fontSize: "22px" }}>
                New contact form message
              </h1>
              <p style={{ margin: "0 0 24px 0", color: "#5A574E", fontSize: "14px" }}>
                Sent from the contact form on madstone.dev
              </p>

              <table role="presentation" cellSpacing={0} cellPadding={0} width="100%">
                <tbody>
                  <tr>
                    <td style={cell}>
                      <span style={label}>Name</span>
                      <br />
                      <span style={value}>{name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={cell}>
                      <span style={label}>Email</span>
                      <br />
                      <a href={`mailto:${email}`} style={{ ...value, color: "#B23B0B" }}>
                        {email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={cell}>
                      <span style={label}>About</span>
                      <br />
                      <span style={value}>{topic}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: "20px" }}>
                <span style={label}>Message</span>
                <div
                  style={{
                    background: "#F2EFE8",
                    borderLeft: "4px solid #B23B0B",
                    padding: "15px",
                    marginTop: "8px",
                    borderRadius: "0 8px 8px 0",
                    whiteSpace: "pre-wrap",
                    color: "#15140F",
                    fontSize: "15px",
                  }}
                >
                  {message}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NotifyTeam;
