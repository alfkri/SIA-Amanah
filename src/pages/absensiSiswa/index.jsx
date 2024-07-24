import MenuListUser from "@/components/MenuListUser";
import NavbarUser from "@/components/NavbarUser";

import {
  container__absensiSiswa,
  container__absensiSiswa__main,
  container__absensiSiswa__content,
  absensiSiswa__header,
  absensiSiswa__calendar,
  absensiSiswa__monthNav,
  absensiSiswa__weekDays,
  absensiSiswa__days,
  absensiSiswa__day,
  hadir,
  izin,
  alfa,
  sakit,
  absensiSiswa__rekap,
  rekapCard,
} from "@/styles/AbsensiSiswa.module.css";

const AbsensiSiswa = () => {
  const absensiData = [
    { tanggal: 1, status: "Alfa" },
    { tanggal: 2, status: "Hadir" },
    { tanggal: 3, status: "Hadir" },
    { tanggal: 4, status: "Hadir" },
    { tanggal: 5, status: "Hadir" },
    { tanggal: 6, status: "" },
    { tanggal: 7, status: "" },
    { tanggal: 8, status: "Izin" },
    { tanggal: 9, status: "" },
    { tanggal: 10, status: "" },
    { tanggal: 11, status: "" },
    { tanggal: 12, status: "" },
    { tanggal: 13, status: "" },
    { tanggal: 14, status: "Alfa" },
    { tanggal: 15, status: "Sakit" },
    { tanggal: 16, status: "" },
    { tanggal: 17, status: "" },
    { tanggal: 18, status: "" },
    { tanggal: 19, status: "" },
    { tanggal: 20, status: "Alfa" },
    { tanggal: 21, status: "Alfa" },
    { tanggal: 22, status: "" },
    { tanggal: 23, status: "" },
    { tanggal: 24, status: "" },
    { tanggal: 25, status: "" },
    { tanggal: 26, status: "" },
    { tanggal: 27, status: "Alfa" },
    { tanggal: 28, status: "Alfa" },
    { tanggal: 29, status: "Hadir" },
    { tanggal: 30, status: "Sakit" },
    { tanggal: 31, status: "Sakit" },
  ];

  const countStatus = (status) => {
    return absensiData.filter((data) => data.status === status).length;
  };
  return (
    <div className={container__absensiSiswa}>
      <NavbarUser />
      <div className={container__absensiSiswa__main}>
        <MenuListUser />
        <div className={container__absensiSiswa__content}>
          <div className={absensiSiswa__header}>
            <div>
              <h1>Absensi Siswa</h1>
              <p>Nama : Muhammad Al Fikri</p>
              <p>Grup : A</p>
            </div>
          </div>
          <div className={absensiSiswa__calendar}>
            <div className={absensiSiswa__monthNav}>
              <button
                style={{
                  border: "none",
                  padding: "1rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                &lt;
              </button>
              <h2>Januari</h2>
              <button
                style={{
                  border: "none",
                  padding: "1rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                &gt;
              </button>
            </div>
            <div className={absensiSiswa__weekDays}>
              <div>S</div>
              <div>S</div>
              <div>R</div>
              <div>K</div>
              <div>J</div>
              <div>S</div>
              <div>M</div>
            </div>
            <div className={absensiSiswa__days}>
              {absensiData.map((day, index) => (
                <div
                  key={index}
                  className={`${absensiSiswa__day} ${
                    day.status === "Hadir"
                      ? hadir
                      : day.status === "Izin"
                      ? izin
                      : day.status === "Alfa"
                      ? alfa
                      : day.status === "Sakit"
                      ? sakit
                      : ""
                  }`}
                >
                  <span>{day.tanggal}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={absensiSiswa__rekap}>
            <h3>Rekap Kehadiran bulan Januari 2023</h3>
            <div className={rekapCard}>
              <div>
                <h4 style={{ fontWeight: "bold", color: "#28a745" }}>Hadir</h4>
                <p>{countStatus("Hadir")}</p>
              </div>
              <div>
                <h4 style={{ fontWeight: "bold", color: "#ffc107" }}>Izin</h4>
                <p>{countStatus("Izin")}</p>
              </div>
              <div>
                <h4 style={{ fontWeight: "bold", color: "aqua" }}>Sakit</h4>
                <p>{countStatus("Sakit")}</p>
              </div>
              <div>
                <h4 style={{ fontWeight: "bold", color: "#dc3545" }}>Alfa</h4>
                <p>{countStatus("Alfa")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbsensiSiswa;
