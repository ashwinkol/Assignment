import React, { useState } from "react";
import arrowIcon from "../assets/icons8-expand-arrow-50.png";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const navigate = useNavigate()
  const [expandDetail, setExpandDetail] = useState(false);

  return (
    <div
      style={{
        background: "#d6d6d6",
        border: "1px solid #d6d6d6",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
        borderRadius: expandDetail ? "12px 12px 0px 0px" : "12px",
        position: "relative",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "16rem",
          height: "12rem",
          cursor: "pointer",
        }}
      >
        <img
          src={props.elem.img}
          style={{
            width: "100%",
            height: "100%",
            transition: "300ms ease-in",
            borderRadius: "12px 12px 0px 0px",
          }}
          className="imghover"
          onClick={() => navigate("/CourseDetails/1")}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          cursor: "pointer",
          justifyContent: "space-between",
        }}
        onClick={() => setExpandDetail(!expandDetail)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "0px 0px 0px 13px",
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Cource Name:
          </p>
          <h4
            style={{
              padding: "5px 3px",
              fontWeight: 600,
              fontSize: "1rem",
            }}
            title={props.elem.course_name}
          >
            {props.elem.course_name}
          </h4>
        </div>
        {/* collapse icon */}
        <div
          style={{
            marginRight: "3px",
            display: "grid",
            placeItems: "center",
            transform: expandDetail ? "rotate(180deg)" : "rotate(0deg)",
            transition: "200ms ease-out",
          }}
        >
          <img
            src={arrowIcon}
            style={{
              width: "1.3rem",
              height: "1.3rem",
              background: "#fff",
              borderRadius: "10px",
              padding: "3px",
            }}
          />
        </div>
      </div>
      {expandDetail && (
        <div
          style={{
            position: "absolute",
            top: "14.6rem",
            left: "0px",
            background: "#fff",
            boxShadow: "0px 3px 6px 1px #888",
            zIndex: 20,
            width: "100%",
            height: "40vh",
            overflowY: "auto",
            borderRadius: "0px 0px 12px 12px",
          }}
        >
          <table>
            <tbody>
              {[
                "detail",
                "instructor_name",
                "enrollment_status",
                "description",
                "course_duration",
                "schedule",
                "location",
              ].map((item) => (
                <div style={{ padding: "5px 3px" }}>
                  <tr>
                    <td
                      style={{
                        width: "2rem",
                        padding: "0px 5px",
                        fontWeight: 500,
                      }}
                    >
                      {item.replace("_", " ")}
                    </td>{" "}
                    :<td style={{ paddingLeft: "1rem" }}>{props.elem[item]}</td>
                  </tr>
                  <hr />
                </div>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cards;
