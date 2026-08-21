import { useMemo, useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CheckCircleOutlined } from "@mui/icons-material";

import divider from "../../assets/star-divider.png";
import background from "../../assets/contact-background.jpg";

import styles from "./Contact.module.css";

import emailjs from "@emailjs/browser";

const SUBJECTS = [
  "General Question",
  "Reservation Inquiry",
  "Hiring Inquiry",
  "Complaint",
  "Compliment",
  "Catering",
  "Other",
] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] =
    useState<(typeof SUBJECTS)[number]>("General Question");
  const [otherSubject, setOtherSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const finalSubject =
    subject === "Other" ? otherSubject : subject;

  const valid = useMemo(
    () =>
      name &&
      email &&
      message &&
      finalSubject.trim().length > 0,
    [name, email, message, finalSubject]
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!valid) return;

    try {
      await emailjs.send(
        "service_m1zqcme",
        "template_3hjcxlj",
        {
          name,
          email,
          subject: finalSubject,
          message,
        },
        "V2E5HWAaUcNCy_TdS"
      );

      setSubmitted(true);

      setName("");
      setEmail("");
      setSubject("General Question");
      setOtherSubject("");
      setMessage("");

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  }

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <section className={styles.left}>
          <p className={styles.subtitle}>CONTACT US</p>

          <h1>
            We'd love to hear
            <br />
            from you.
          </h1>

          <img
            src={divider}
            className={styles.divider}
            alt=""
          />

          <form onSubmit={submit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Name</label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label>Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Subject</label>

              <select
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value as (typeof SUBJECTS)[number]
                  )
                }
              >
                {SUBJECTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {subject === "Other" && (
              <div className={styles.field}>
                <label>Other Subject</label>

                <input
                  type="text"
                  maxLength={100}
                  value={otherSubject}
                  onChange={(e) =>
                    setOtherSubject(e.target.value)
                  }
                />
              </div>
            )}

            <div className={styles.field}>
              <label>Message</label>

              <textarea
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
              />
            </div>

            <div className={styles.bottom}>
              <button disabled={!valid}>
                SEND MESSAGE
              </button>

              {submitted && (
                <div className={styles.success}>
                  <CheckCircleOutlined />
                  We'll get back to you as soon as
                  possible.
                </div>
              )}
            </div>
          </form>
        </section>

        <aside className={styles.right}>
          <div className={styles.info}>
            <LocationOnIcon />

            <div className={styles.infoText}>
              <h4>Address</h4>
              <p>
                606 S Broadway
                <br />
                Baltimore, MD 21231
              </p>
            </div>
          </div>

          <div className={styles.info}>
            <PhoneIcon />

            <div className={styles.infoText}>
              <h4>Phone</h4>
              <p>(667) 212-4841</p>
            </div>
          </div>

          <div className={styles.info}>
            <EmailIcon />

            <div className={styles.infoText}>
              <h4>Email</h4>
              <p>kipporamen606@gmail.com</p>
            </div>
          </div>

          <div className={styles.info}>
            <AccessTimeIcon />

            <div className={styles.infoText}>
              <h4>Hours</h4>
              <p>
                Mon 5–8:30PM
                <br />
                Tue–Thu 11:30AM–2:30PM & 5–8:30PM
                <br />
                Fri 11:30AM–2:30PM & 5–10PM
                <br />
                Sat 11:30AM–10PM
                <br />
                Sun 11:30AM–8:30PM
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}