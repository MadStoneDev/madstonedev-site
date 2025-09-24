import React from "react";

interface NotifyTeamProps {
  name: string;
  email: string;
  company?: string;
  project: string;
  budget: string;
  message: string;
}

export const NotifyTeam = ({
  name,
  email,
  company,
  project,
  budget,
  message,
}: NotifyTeamProps) => {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#000000",
        color: "#ffffff",
        lineHeight: "1.6",
      }}
    >
      <table
        role="presentation"
        cellSpacing="0"
        cellPadding="0"
        border={0}
        width="100%"
        style={{
          background:
            "linear-gradient(135deg, #171717 0%, #000000 50%, #171717 100%)",
        }}
      >
        <tr>
          <td>
            {/* Header Section */}
            <table
              role="presentation"
              cellSpacing="0"
              cellPadding="0"
              border={0}
              width="100%"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "40px 20px 20px 20px",
                  }}
                >
                  {/* Logo Area */}
                  <div style={{ marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "15px",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(232, 24, 99, 0.3) 0%, transparent 70%)",
                      }}
                    >
                      <span style={{ fontSize: "48px" }}>🧪</span>
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h1
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "36px",
                      fontWeight: "900",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    }}
                  >
                    <span
                      style={{
                        background:
                          "linear-gradient(to right, #ffffff, #a3a3a3)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "#ffffff",
                      }}
                    >
                      MadStone
                    </span>
                    <br />
                    <span style={{ color: "#E81863", fontSize: "32px" }}>
                      Laboratory
                    </span>
                  </h1>

                  <div
                    style={{
                      width: "60px",
                      height: "2px",
                      background:
                        "linear-gradient(to right, transparent, #E81863, transparent)",
                      margin: "20px auto",
                    }}
                  />
                </td>
              </tr>
            </table>

            {/* Content Section */}
            <table
              role="presentation"
              cellSpacing="0"
              cellPadding="0"
              border={0}
              width="100%"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <tr>
                <td style={{ padding: "0 20px" }}>
                  {/* Alert Banner */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #E81863 0%, #be185d 100%)",
                      borderRadius: "16px",
                      padding: "20px",
                      textAlign: "center",
                      marginBottom: "30px",
                      border: "1px solid rgba(232, 24, 99, 0.3)",
                    }}
                  >
                    <h2
                      style={{
                        margin: "0",
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#ffffff",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      🚨 New Message Received!
                    </h2>
                    <p
                      style={{
                        margin: "10px 0 0 0",
                        fontSize: "14px",
                        opacity: "0.9",
                      }}
                    >
                      Someone has sent a message via the contact form
                    </p>
                  </div>

                  {/* Project Details Card */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "20px",
                      padding: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 20px 0",
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#E81863",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Project Details
                    </h3>

                    {/* Contact Info */}
                    <table
                      role="presentation"
                      cellSpacing="0"
                      cellPadding="0"
                      border={0}
                      width="100%"
                      style={{ marginBottom: "20px" }}
                    >
                      <tr>
                        <td
                          style={{
                            padding: "10px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <strong
                            style={{
                              color: "#ffffff",
                              fontSize: "14px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Name:
                          </strong>
                          <br />
                          <span style={{ color: "#a3a3a3", fontSize: "16px" }}>
                            {name}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "10px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <strong
                            style={{
                              color: "#ffffff",
                              fontSize: "14px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Email:
                          </strong>
                          <br />
                          <span style={{ color: "#a3a3a3", fontSize: "16px" }}>
                            {email}
                          </span>
                        </td>
                      </tr>
                      {company && (
                        <tr>
                          <td
                            style={{
                              padding: "10px 0",
                              borderBottom:
                                "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <strong
                              style={{
                                color: "#ffffff",
                                fontSize: "14px",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Organization:
                            </strong>
                            <br />
                            <span
                              style={{ color: "#a3a3a3", fontSize: "16px" }}
                            >
                              {company}
                            </span>
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td
                          style={{
                            padding: "10px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <strong
                            style={{
                              color: "#ffffff",
                              fontSize: "14px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Project Type:
                          </strong>
                          <br />
                          <span style={{ color: "#a3a3a3", fontSize: "16px" }}>
                            {project}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            padding: "10px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <strong
                            style={{
                              color: "#ffffff",
                              fontSize: "14px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Budget Range:
                          </strong>
                          <br />
                          <span
                            style={{
                              color: "#E81863",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            {budget}
                          </span>
                        </td>
                      </tr>
                    </table>

                    {/* Project Description */}
                    <div style={{ marginTop: "20px" }}>
                      <strong
                        style={{
                          color: "#ffffff",
                          fontSize: "14px",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Project Message:
                      </strong>
                      <div
                        style={{
                          background: "rgba(0, 0, 0, 0.3)",
                          borderLeft: "4px solid #E81863",
                          padding: "15px",
                          marginTop: "10px",
                          borderRadius: "0 8px 8px 0",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            color: "#ffffff",
                            fontSize: "15px",
                            lineHeight: "1.6",
                          }}
                        >
                          {message}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Section */}
                  <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <p
                      style={{
                        color: "#a3a3a3",
                        fontSize: "16px",
                        marginBottom: "20px",
                      }}
                    >
                      Time to brew some digital magic! 🧪✨
                    </p>
                  </div>
                </td>
              </tr>
            </table>

            {/* Footer */}
            <table
              role="presentation"
              cellSpacing="0"
              cellPadding="0"
              border={0}
              width="100%"
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <tr>
                <td style={{ textAlign: "center", padding: "30px 20px" }}>
                  <p
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#ffffff",
                    }}
                  >
                    Where <span style={{ color: "#E81863" }}>brilliance</span>{" "}
                    meets <span style={{ color: "#ffffff" }}>madness</span>
                  </p>

                  <p
                    style={{
                      margin: "0 0 20px 0",
                      fontSize: "14px",
                      color: "#737373",
                    }}
                  >
                    This email was generated from your contact form at
                    madstonedev.com
                  </p>

                  {/* Contact Links */}
                  <div style={{ marginTop: "20px" }}>
                    <a
                      href="https://madstonedev.com"
                      style={{
                        color: "#E81863",
                        textDecoration: "none",
                        fontSize: "14px",
                        margin: "0 10px",
                      }}
                    >
                      🌐 madstonedev.com
                    </a>
                    <span style={{ color: "#404040", margin: "0 5px" }}>|</span>
                    <a
                      href="mailto:hello@madstonedev.com"
                      style={{
                        color: "#E81863",
                        textDecoration: "none",
                        fontSize: "14px",
                        margin: "0 10px",
                      }}
                    >
                      📫 hello@madstonedev.com
                    </a>
                  </div>

                  {/* Decorative Elements */}
                  <div style={{ marginTop: "30px" }}>
                    <span style={{ color: "#404040", fontSize: "12px" }}>
                      • • •
                    </span>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default NotifyTeam;
