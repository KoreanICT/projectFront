import React, { useState } from 'react'
import styles from './upboard.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface InquireVO {
    num?: number;
    title: string;
    writer: string;
    content: string;
    imgn?: string;
    bdate?: string;
    mfile: File | null; 
}
const InquireForm: React.FC = () => {
    const backendUrl = process.env.REACT_APP_BACK_END_URL;
    const [formData, setFormData] = useState<InquireVO>({
        title:'',
        writer:'',
        content:'',
        mfile: null as File | null
    })

    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
    const navigate = useNavigate();
    const formChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        
        const {name,value} = e.target;
        
        setFormData({...formData,[name]:value});
    }
    
    const fileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       
        if(e.target.files){
           
            const file = e.target.files[0]; // input type=file 
             //파일을 읽어 들이기 위한 FileReader() 객체 생성
            const reader = new FileReader();
            reader.onloadend = () =>{
                console.log("파일 이미지가 감지 됨");
                console.log(reader.result);
                setPreview(reader.result); //useState에 저장 
            }
            //읽어올 파일의 주소를 FileReader에게 등록하자.
            reader.readAsDataURL(file);
            //useState에 등록 - 서버로 전송 
            setFormData({...formData,mfile:file});
        }
    }
  const myFormSubmit = async (e:React.SubmitEvent) => {
    e.preventDefault();
    alert(backendUrl);
    const data = new FormData();
    data.append('title',formData.title);
    data.append('writer',formData.writer);
    data.append('content', formData.content);
    if(formData.mfile){
        data.append('mfile',formData.mfile);
        console.log(`FormData 전송 시 name이 필수!  Title => ${formData.title}, 
           Writer =>${formData.writer}`);
        //-여기까지 useState에 저장된 값을 찾아와서 다시 FormData에 모든 값을 저장
        try {
            //파일 업로드 시 폼의 속성 예 => encType='multipart/form-data'
            //무조건 post방식이다. *****
            //axios.post(url,data,[{header}])
            //postman에서 테스트한 주소를 복사해서 붙여 넣기 <---
            const url =`${backendUrl}/upboard/upboardAdd`;
            await axios.post(url,data,{
                headers:{'Content-Type':'multipart/form-data'}
            });
            //오류가 없으면 리스트로 이동 
            navigate('/community/uplist');
        } catch (error) {
             console.log(`Erro =>${error}`);
        }
    }
  } 


  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Form 전송 예제</h2>
        <form className={styles.form} onSubmit={myFormSubmit}>
            <table className={styles.boardTable}>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text" name="title" id="title" className={styles.input} 
                                onChange={formChange} required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>
                            <input type="text" name="writer" id="writer" className={styles.input} 
                                onChange={formChange} required
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea name="content" id="content"
                                style={{ width: '90%', height: '150px', padding: '8px' }}
                                onChange={formChange} required
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>이미지</th>
                        <td>
                            <input type="file" name="mfile" id="mfile"  className={styles.input}
                                onChange={fileChange} required
                            />
                        </td>
                    </tr>
                    {/* 이미지 미리보기 구현 */}
                    {/* { preview && ()} : useState에 존재할 때만 랜더링 시킨다      */}
                    { preview && (

                    <tr>
                        <td colSpan={2} style={{textAlign:'center'}}>
                            <img src={preview as string} alt=""
                            style={{
                                width:'150px' , height:'150px', 
                                marginRight:'10px', marginBottom:'10px'
                                }}
                            />
                        </td>
                    </tr>

                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2}>
                            <button type="submit" className={styles.button}>등록하기</button>
                        </th>
                    </tr>
                </tfoot>
            </table>

        </form>
    </div>
  )
}

export default InquireForm