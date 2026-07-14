import React from 'react';
import styles from "./adminManage.module.css"

const Members: React.FC = () => {

  return (
    <div className={styles.memberContainer}>

      <h2>회원관리</h2>

      <table className={styles.memberTable}>
        <thead>
          <tr>
            <th>토글</th>
            <th>이름</th>
            <th>아이디</th>
            <th>나이</th>
            <th>프로필 이미지</th>
          </tr>
        </thead>

        <tbody>
          {/* 게시글 목록 영역 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>

        <tfoot>
          {/* 검색 영역 */}
          <tr>
            <td colSpan={5}>
              <select>
                <option>이름</option>
              </select>

              <input type="text" />

              <button>
                검색
              </button>
            </td>
          </tr>


          {/* 페이징 영역 */}
          <tr>
            <td colSpan={6}>
              <div className={styles.pagination}>
                
              </div>
            </td>
          </tr>

        </tfoot>

      </table>


      {/* 글쓰기 버튼 */}
      <button className={styles.button}>
        삭제
      </button>

    </div>
  );
};

export default Members;