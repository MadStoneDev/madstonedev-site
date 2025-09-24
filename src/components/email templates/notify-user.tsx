interface NotifyUserProps {
  name: string;
}

export const NotifyUser = ({ name }: NotifyUserProps) => {
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
                    <span style={{ color: "#E81863", fontSize: "32px" }}>
                      Dev
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
                  {/* Success Banner */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                      borderRadius: "16px",
                      padding: "20px",
                      textAlign: "center",
                      marginBottom: "30px",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
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
                      Message Received!
                    </h2>
                  </div>

                  {/* Main Message Card */}
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "20px",
                      padding: "40px 30px",
                      marginBottom: "30px",
                      textAlign: "center",
                    }}
                  >
                    {/* Greeting */}
                    <h3
                      style={{
                        margin: "0 0 20px 0",
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#ffffff",
                      }}
                    >
                      Hey {name}!
                    </h3>

                    <p
                      style={{
                        margin: "0 0 25px 0",
                        fontSize: "18px",
                        color: "#a3a3a3",
                        lineHeight: "1.6",
                      }}
                    >
                      Thanks for reaching out! Your project inquiry has been
                      received at the lab and is now being analyzed by our team
                      of mad scientists.
                    </p>

                    {/* Lab Process Steps */}
                    <div
                      style={{
                        background: "rgba(232, 24, 99, 0.1)",
                        border: "1px solid rgba(232, 24, 99, 0.2)",
                        borderRadius: "12px",
                        padding: "20px",
                        marginBottom: "25px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 15px 0",
                          fontSize: "16px",
                          color: "#E81863",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        What happens next?
                      </p>
                      <div
                        style={{
                          textAlign: "left",
                          fontSize: "14px",
                          color: "#ffffff",
                        }}
                      >
                        <p style={{ margin: "8px 0" }}>
                          📋 I will review your inquiry
                        </p>
                        <p style={{ margin: "8px 0" }}>
                          🔬 I will get in touch with you
                        </p>
                        <p style={{ margin: "8px 0" }}>
                          💡 I will prepare a custom solution proposal
                        </p>
                        <p style={{ margin: "8px 0" }}>
                          📧 We will, hopefully, work together!
                        </p>
                      </div>
                    </div>

                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        color: "#a3a3a3",
                        lineHeight: "1.6",
                      }}
                    >
                      While you wait, check out my current work at{" "}
                      <a
                        href="https://madstone.dev#laboratory"
                        style={{ color: "#E81863", textDecoration: "none" }}
                      >
                        the laboratory
                      </a>
                      .
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <p
                      style={{
                        color: "#a3a3a3",
                        fontSize: "14px",
                        marginBottom: "20px",
                      }}
                    >
                      Got questions in the meantime?
                    </p>

                    <a
                      href="mailto:hello@madstonedev.com"
                      style={{
                        display: "inline-block",
                        background:
                          "linear-gradient(135deg, #E81863 0%, #be185d 100%)",
                        color: "#ffffff",
                        textDecoration: "none",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        fontWeight: "700",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        border: "1px solid rgba(232, 24, 99, 0.5)",
                      }}
                    >
                      Contact Me
                    </a>
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
                    This is an automated response from madstonedev.com
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

export default NotifyUser;
