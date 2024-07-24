// import MenuList from "@/components/MenuList";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   container__raporBBulanan,
//   container__raporBBulanan__main,
//   container__raporBBulanan__content,
//   raporBBulanan__header,
//   raporBBulanan__table,
// } from "../../../../styles/RaporBBulanan.module.css";

// const RaporBJanuari = () => {
//   return (
//     <div className={container__raporBBulanan}>
//       <Navbar />
//       <div className={container__raporBBulanan__main}>
//         <MenuList />
//         <div className={container__raporBBulanan__content}>
//           <div className={raporBBulanan__header}>
//             <div>
//               <h1>Pengisian Perkembangan Bulanan</h1>
//               <p>
//                 Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
//               </p>
//             </div>
//           </div>
//           <table className={raporBBulanan__table}>
//             <thead>
//               <tr>
//                 <th>Nama</th>
//                 <th>Perkembangan Nilai Moral dan Agama</th>
//                 <th>Perkembangan Motorik</th>
//                 <th>Perkembangan Kognitif</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td style={{ color: "#323232", fontWeight: "600" }}>
//                   Maria Anders
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   <Link href={"/rapor/grupA/januari/edit"}>
//                     <Image
//                       src={require("../../../../../public/assets/edit.svg")}
//                       alt="hero"
//                     ></Image>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ color: "#323232", fontWeight: "600" }}>
//                   Maria Anders
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   <Link href={"/rapor/grupA/januari/edit"}>
//                     <Image
//                       src={require("../../../../../public/assets/edit.svg")}
//                       alt="hero"
//                     ></Image>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ color: "#323232", fontWeight: "600" }}>
//                   Maria Anders
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Consequuntur aut porro deserunt.
//                 </td>
//                 <td>
//                   <Link href={"/rapor/grupA/januari/edit"}>
//                     <Image
//                       src={require("../../../../../public/assets/edit.svg")}
//                       alt="hero"
//                     ></Image>
//                   </Link>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RaporBJanuari;

// // import React, { useState } from "react";
// // import MenuList from "@/components/MenuList";
// // import Navbar from "@/components/Navbar";
// // import Image from "next/image";
// // import Modal from "@/components/Modal";
// // import FormRapor from "@/components/FormRapor";
// // import {
// //   container__raporBBulnanan,
// //   container__raporBBulnanan__main,
// //   container__raporBBulnanan__content,
// //   raporBBulnanan__header,
// //   raporBBulnanan__table,
// //   raporBBulnanan__btn__action,
// // } from "../../../../styles/RaporBBulanan.module.css";

// // const RaporBJanuari = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentRapor, setCurrentRapor] = useState(null);
// //   const [students, setStudents] = useState([
// //     {
// //       name: "Fikri",
// //       moral: "-.",
// //       motorik: "-",
// //       kognitif: "-",
// //     },
// //     {
// //       name: "Adi",
// //       moral: "-",
// //       motorik: "-",
// //       kognitif: "-",
// //     },
// //     {
// //       name: "Maria",
// //       moral: "-",
// //       motorik: "-",
// //       kognitif: "-",
// //     },
// //   ]);

// //   const handleEditClick = (student) => {
// //     setCurrentRapor(student);
// //     setIsModalOpen(true);
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //     setCurrentRapor(null);
// //   };

// //   const handleFormSubmit = (updatedData) => {
// //     setStudents((prevStudents) =>
// //       prevStudents.map((student) =>
// //         student.name === updatedData.name ? updatedData : student
// //       )
// //     );
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className={container__raporBBulnanan}>
// //       <Navbar />
// //       <div className={container__raporBBulnanan__main}>
// //         <MenuList />
// //         <div className={container__raporBBulnanan__content}>
// //           <div className={raporBBulnanan__header}>
// //             <div>
// //               <h1>Pengisian Perkembangan Bulanan</h1>
// //               <p>
// //                 Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
// //               </p>
// //             </div>
// //           </div>
// //           <table className={raporBBulnanan__table}>
// //             <thead>
// //               <tr>
// //                 <th>Nama</th>
// //                 <th>Perkembangan Nilai Moral & Agama</th>
// //                 <th>Perkembangan Motorik</th>
// //                 <th>Perkembangan Kognitif</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {students.map((student) => (
// //                 <tr key={student.name}>
// //                   <td style={{ color: "#323232", fontWeight: "600" }}>
// //                     {student.name}
// //                   </td>
// //                   <td>{student.moral}</td>
// //                   <td>{student.motorik}</td>
// //                   <td>{student.kognitif}</td>
// //                   <td>
// //                     <button
// //                       className={raporBBulnanan__btn__action}
// //                       onClick={() => handleEditClick(student)}
// //                     >
// //                       <Image
// //                         style={{ width: "20px", height: "20px" }}
// //                         src={require("../../../../../public/assets/edit.svg")}
// //                         alt="edit"
// //                       />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //       <Modal show={isModalOpen} onClose={handleModalClose}>
// //         <FormRapor
// //           initialData={currentRapor}
// //           onSubmit={handleFormSubmit}
// //           onCancel={handleModalClose}
// //         />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default RaporBJanuari;

import React, { useState } from "react";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Modal from "@/components/Modal";
import FormRapor from "@/components/FormRapor";
import {
  container__raporBBulanan,
  container__raporBBulanan__main,
  container__raporBBulanan__content,
  raporBBulanan__header,
  raporBBulanan__table,
  raporBBulanan__btn__action,
} from "../../../../styles/RaporBBulanan.module.css";

const RaporBJanuari = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRapor, setCurrentRapor] = useState(null);
  const [students, setStudents] = useState([
    {
      name: "Saiful",
      moral: "-.",
      motorik: "-",
      kognitif: "-",
    },
    {
      name: "Zuhdi",
      moral: "-",
      motorik: "-",
      kognitif: "-",
    },
  ]);

  const handleEditClick = (student) => {
    setCurrentRapor(student);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentRapor(null);
  };

  const handleFormSubmit = (updatedData) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.name === updatedData.name ? updatedData : student
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className={container__raporBBulanan}>
      <Navbar />
      <div className={container__raporBBulanan__main}>
        <MenuList />
        <div className={container__raporBBulanan__content}>
          <div className={raporBBulanan__header}>
            <div>
              <h1>Pengisian Perkembangan Bulanan</h1>
              <p>
                Kelola Pengisian Perkembangan Bulanan Siswa RA AMANAH SCHOOL
              </p>
            </div>
          </div>
          <table className={raporBBulanan__table}>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Perkembangan Nilai Moral & Agama</th>
                <th>Perkembangan Motorik</th>
                <th>Perkembangan Kognitif</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.name}>
                  <td style={{ color: "#323232", fontWeight: "600" }}>
                    {student.name}
                  </td>
                  <td>{student.moral}</td>
                  <td>{student.motorik}</td>
                  <td>{student.kognitif}</td>
                  <td>
                    <button
                      className={raporBBulanan__btn__action}
                      onClick={() => handleEditClick(student)}
                    >
                      <Image
                        style={{ width: "20px", height: "20px" }}
                        src={require("../../../../../public/assets/edit.svg")}
                        alt="edit"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={handleModalClose}>
        <FormRapor
          initialData={currentRapor}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
        />
      </Modal>
    </div>
  );
};

export default RaporBJanuari;
