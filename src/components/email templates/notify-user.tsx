import React from "react";

interface NotifyUserProps {
  name: string;
}

export const NotifyUser = ({ name }: NotifyUserProps) => {
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
              <h1 style={{ margin: "0 0 16px 0", fontSize: "22px" }}>
                Thanks, {name}
              </h1>
              <p style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#3D3A33" }}>
                I got your message. I read everything myself, so give me a day or
                two and I'll get back to you.
              </p>
              <p style={{ margin: "0 0 24px 0", fontSize: "16px", color: "#3D3A33" }}>
                If it's urgent, you can reply straight to this email.
              </p>
              <p style={{ margin: 0, fontSize: "16px", color: "#15140F" }}>
                Richard
                <br />
                <a
                  href="https://madstone.dev"
                  style={{ color: "#B23B0B", textDecoration: "none" }}
                >
                  madstone.dev
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NotifyUser;
