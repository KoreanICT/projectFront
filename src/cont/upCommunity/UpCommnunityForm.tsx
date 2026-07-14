// import React, { useState } from 'react'
// import styles from './upboard.module.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// // 1. UpCommunityVO vo에 저장할 파라미터를 동일하게 해준다.
// interface UpCommunityVO {
//     num?: number;
//     title: string;
//     writer: string;
//     content: string;
//     imgn?: string;
//     hit?: number;
//     reip?: string;
//     cdate?: string; // 이거 하나 주의!!!
//     // private MultipartFile mfile;
//     mfile: File | null; // 클라이언트가 파일을 전송하기 위해서 선언
// }
// const UpCommunityForm: React.FC = () => {

//     const backendUrl = process.env.REACT_APP_BACK_END_URL;

//     // 저희 이름이 안바뀌었어요
//     const [formData, setFormData] = useState<UpCommunityVO>({
//         title: '',
//         writer: '',
//         content: '',
//         mfile: null as File | null
//     });

//     // File객체를 사용해서 읽어 들인 값을 미리보기 용으로 사용할 useState
//     // ArrayBuffer 저장 시 new FileReader에 의해서 바이너리로 저장
//     // 사용할때는 string으로 변환 해준다.
//     const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

//     // 입력 후 리스트로 이동 하기 위한 훅을 생성
//     const navigate = useNavigate();

//     // form데이터를 change받아서 useState에 저장할 함수
//     const formChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         // 선택된 target 즉, HTMLElement 에서 name, value를 각각 받아 온다.
//         const { name, value } = e.target;
//         // 받아온 데이터를 useState의 formData 객체에 각각 저장한다.
//         setFormData({ ...formData, [name]: value })
//     }
//     // 파일데이터를 change받아서 useState에 저장할 함수
//     const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         // 파일 업로드가 되었을 때 실행
//         if (e.target.files) {
//             // useState에 파일 형태로 저장하겠다.
//             // .files[0] 파일은 배열 형태로 저장되어서 넘어 온다.
//             // setFormData({...formData, mfile:e.target.files[0]})
//             // javascript FileReader()를 사용해서 읽어온다.
//             // ----------<file객체 읽어들임>----------
//             const file = e.target.files[0];
//             const reader = new FileReader();
//             // Reader를 통해서 파일을 읽어 오기위해서 감지하는 영역
//             // 여기서 파일을 읽어와서 핸들링하는 영역
//             reader.onloadend = () => {
//                 console.log("파일 이미지가 감지 됨");
//                 console.log(reader.result);
//                 setPreview(reader.result); // useState에 저장
//             }
//             // 읽어올 파일의 주소를 FileReader에게 등록하자/
//             reader.readAsDataURL(file);
//             // useState에 등록 - 서버로 전송
//             setFormData({ ...formData, mfile: file });
//         }
//     }

//     // axios 사용방법
//     // const fn = async () => {
//     // await axios.post(url, data, {header})
//     // const response = await axios.get(url); response.data
//     // }
//     const myFormSubmit = async (e: React.SubmitEvent) => {
//         e.preventDefault();
//         const data = new FormData();
//         data.append('title', formData.title);
//         data.append('writer', formData.writer);
//         data.append('content', formData.content);
//         if (formData.mfile) {
//             data.append('mfile', formData.mfile);
//         }
//         console.log(`FormData 전송 시 name이 필수! Title => ${formData.title}, Wrtier => ${formData.writer}`)
//         // 여기까지 useState에 저장된 값을 찾아와서 다시 FormData에 모든 값을 저장
//         try {
//             // 파일 업로드 시 폼의 속성 예 => encType = 'mlutipart/form-data'
//             // 무조건 post방식이다. *****
//             // axios.post(url, data, [{header}])
//             // postman에서 테스트한 주소를 복사해서 붙여 넣기
//             const url = `${backendUrl}/api/community/communityAdd`;
//             await axios.post(url, data, {
//                 headers:{ 'Content-Type': 'multipart/form-data' }
//             });
//             // 오류가 없으면 리스트로 이동
//             navigate('/community');

//         } catch (error) {
//             console.error(error);
//         }

//     }

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Community 등록</h2>
//             <form action="post" className={styles.form} onSubmit={myFormSubmit}>
//                 <table className={styles.boardTable}>
//                     <tbody>
//                         <tr>
//                             <th>제목</th>
//                             <td>
//                                 <input type="text" name='title' id='title' className={styles.input} onChange={formChange} required />
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>작성자</th>
//                             <td>
//                                 <input type="text" name='writer' id='writer' className={styles.input} onChange={formChange} required />
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>내용</th>
//                             <td>
//                                 <textarea name="content" id="content"
//                                     style={{ width: '90%', height: '150px', padding: '8px' }}
//                                     onChange={formChange} required
//                                 ></textarea>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>이미지</th>
//                             <td>
//                                 <input type="file" name="mfile" id="mfile" className={styles.input} onChange={fileChange} required />
//                             </td>
//                         </tr>
//                         {/* 이미지 미리보기 구현 */}
//                         {/* { preview && ()} : useState에 존재할 때만 랜더링 시킨다. */}
//                         {preview && (
//                             <tr>
//                                 <td colSpan={2} style={{ textAlign: 'center' }}>
//                                     <img src={preview as string} alt="이미지 미리보기"
//                                         style={{
//                                             width: '150px', height: '150px',
//                                             marginRight: '10px', marginBottom: '10px'
//                                         }}
//                                     />
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <th colSpan={2}>
//                                 <button type='submit' className={styles.button}>등록하기</button>
//                             </th>
//                         </tr>
//                     </tfoot>
//                 </table>
//             </form>
//         </div>
//     )
// }

// export default UpCommunityForm