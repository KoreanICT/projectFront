# 프로젝트 프론트 원격 레포지토리

## git 관련 명령어 정리
### 깃 환경설정 명령어 (CMD에서 사용)
git config --global user.name "계정명" <br>
git config --global user.email "계정가입 이메일" <br>
<img width="800" height="200" alt="image" src="https://github.com/user-attachments/assets/daaaba05-2e86-4a50-806e-4a01fb5b6cdf" /> <br>


### 개인 깃 관련 명령어
git init - git 생성 (clone 받을 경우 불필요) *** <br>
git add . - 작업한 내용 임시저장 ***** <br>
git commit -m "커밋명" - 작업한 내용 저장(커밋) ***** <br>
git branch - 브랜치 확인 명령어 <br>
git branch 브랜치명 - 브랜치 생성 명령어 ***** <br>
git switch 브랜치명 - 브랜치 변경 명령어 ***** <br>
git branch -d 브랜치명 <br>
git remote add origin "깃허브주소" - 원격레포지토리 연결 명령어 *** <br>

### 원격 저장소(github) 관련 명령어
git clone 깃허브주소       - 깃허브주소에 있는 프로젝트 가져오기 ***** <br>
git pull origin "브랜치명" - 연결된 원격 저장소의 브랜치명 내용 가져오기 ***** 하루 작업 시작 전에 반드시 사용 <br>
git push origin "브랜치명" - 연결된 원격 저장소의 브랜치명 내용 변경하기 ***** <br>
<br>
git push origin --delete master - 연결한 원격 레포지토리 삭제 <br>

## 원격 레포지토리를 받는 방법
### git clone "깃허브 주소"
<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/a60812db-2313-422e-8656-103a90f4ac4c" />


## VSCODE 작업 방법
1. clone 받은 폴더 열기
2. 자신이 담당한 코드를 작업한다
3. 코드 작업 이후 터미널창을 연다


