import {
  login__container,
  login__wrapper,
  login__head,
  login__subhead,
  login__form,
  login__input,
  login__button,
  login__foot,
  input_icon,
  input_with_icon,
} from "../../styles/Login.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import logoLogin from "../../../public/assets/logo-login.png";
import EmailIcon from "../../../public/assets/message-logo.svg";
import PassworIcon from "../../../public/assets/password-logo.svg";
const LoginOrtuPage = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/userHome");
  };
  return (
    <div className={login__container}>
      <div className={login__wrapper}>
        <div className={login__head}>
          <p>Masuk</p>
          <Image src={logoLogin} width={70} alt="" />
        </div>
        <p className={login__subhead}>Silahkan masukkan akun anda</p>
        <form className={login__form} onSubmit={handleLogin}>
          <label>Alamat email</label>
          <div className={input_with_icon}>
            <Image src={EmailIcon} alt="email-icon" className={input_icon} />
            <input
              className={login__input}
              type="email"
              placeholder="Masukkan alamat email"
            />
          </div>
          <label>Kata Sandi</label>
          <div className={input_with_icon}>
            <Image
              src={PassworIcon}
              alt="password-icon"
              className={input_icon}
            />
            <input
              className={login__input}
              type="password"
              placeholder="Masukkan kata sandi"
            />
          </div>
          <button className={login__button} type="submit">
            Masuk
          </button>
        </form>
        <p className={login__foot}>Belum punya akun? chat admin di sini</p>
        <a
          style={{ marginTop: "10px" }}
          href={"/auth/login"}
          className={login__foot}
        >
          Atau login sebagai Admin
        </a>
      </div>
    </div>
  );
};

export default LoginOrtuPage;
