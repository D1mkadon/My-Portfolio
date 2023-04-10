import Image from "next/image";
import styles from "./Contact.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Controller, useForm, useFormState } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  emailValidation,
  loginValidation,
  nameValidation,
} from "@/validation/validation";
import axios from "axios";

const Contact = () => {
  const [text, setText] = useState();
  const { register, handleSubmit, watch, control, reset, formState, error } =
    useForm({
      defaultValues: {
        message: "",
        email: "",
        Subject: "",
        name: "",
      },
    });
  const { errors } = useFormState({ control });
  const onSubmit = (formData) => {
    setText(`Name: ${formData.name}
    Email: ${formData.email} 
    Subject: ${formData.Subject}
    Text: ${formData.message}`);
    console.log(formData);
    axios({
      method: "POST",
      url: "https://api.telegram.org/bot5993729517%3AAAGH0zeA8vVn9WioAQajz2E0EG9MWgw9XQQ/sendMessage",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        text: `${text}`,
        disable_web_page_preview: false,
        disable_notification: false,
        reply_to_message_id: null,
        chat_id: "408787071",
      },
    }).then(function (response) {
      console.log(response.data);
    });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ message: "", email: "", Subject: "" });
    }
  }, [formState, reset]);
  return (
    <div id="Contact" className={styles.Contact}>
      <h3 className={styles.h3}>Contact Get in touch </h3>
      <div className={styles.Block}>
        {/* left */}
        <div className={styles.left}>
          <div className={styles.blockImg}>
            <Image
              className={styles.img}
              src="/contactImg.jpg"
              alt="/"
              width={450}
              height={320}
            />
          </div>
          <div>
            <h2 className={styles.leftName}>Dmytro Tarasenko</h2>
            <p>Front-end Developer</p>
            <p className={styles.leftOpen}>
              I am available for freelance or full-time positions. Contact me
              and let`s talk
            </p>
          </div>
          <div>
            <p className={styles.leftConnect}>Connect with me</p>
            <div className={styles.LeftSocials}>
              <Link href="mailto:dt8157970@gmail.com" target="_blank">
                <MailOutlineIcon className={styles.Icons} />
              </Link>
              <Link href="https://github.com/D1mkadon" target="_blank">
                <GitHubIcon className={styles.Icons} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dmytro-tarasenko/"
                target="_blank"
              >
                <LinkedInIcon className={styles.Icons} />
              </Link>
            </div>
          </div>
        </div>
        {/* right */}

        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              rules={nameValidation}
              control={control}
              render={({ field }) => (
                <TextField
                  className={styles.input}
                  color="primary"
                  id="form-name"
                  label="Name"
                  variant="outlined"
                  name="Name"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={emailValidation}
              render={({ field }) => (
                <TextField
                  className={styles.input}
                  color="primary"
                  id="form-email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="Subject"
              rules={loginValidation}
              control={control}
              render={({ field }) => (
                <TextField
                  className={styles.input}
                  color="primary"
                  id="form-Subject"
                  label="Subject"
                  variant="outlined"
                  name="Subject"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.Subject?.message}
                  helperText={errors.Subject?.message}
                />
              )}
            />
            <div className={styles.areaParent}>
              <textarea
                className={styles.textarea}
                style={errors.message ? { border: "1px solid #d32f2f" } : null}
                name="message"
                id=""
                cols="30"
                rows="10"
                {...register("message", { required: "true" })}
              ></textarea>
              {errors.message && (
                <span className={styles.errorMsg}>This field is required</span>
              )}
            </div>
            <Button className={styles.btn} type="submit" variant="outlined">
              Submit
            </Button>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
